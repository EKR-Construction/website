import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route for handling contact form submissions to Monday.com
 * Creates a new item on the Monday.com board with form data
 * Includes honeypot spam prevention and input length validation
 */

// Security: Input length limits to prevent payload attacks
const MAX_LENGTHS = {
  fullName: 100,
  email: 254, // RFC 5321 maximum
  phone: 30,
  projectDetails: 2000,
} as const;

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  projectDetails: string;
  website?: string; // Honeypot field
}

export async function POST(request: NextRequest) {
  const timestamp = new Date().toISOString();

  try {
    // Log incoming request
    console.log(`[${timestamp}] Contact form submission received`);

    // Parse request body
    const body: ContactFormData = await request.json();
    const { fullName, email, phone, projectDetails, website } = body;

    // Security: Honeypot check - if website field is filled, it's a bot
    if (website && website.trim() !== '') {
      console.warn(
        `[${timestamp}] 🤖 Honeypot triggered - Bot submission blocked`,
        {
          email: email || 'unknown',
          honeypotValue: website.substring(0, 50), // Log partial value for debugging
        }
      );
      // Return success to avoid revealing the honeypot
      return NextResponse.json(
        {
          success: true,
          message: 'Contact form submitted successfully',
        },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!fullName || !email || !phone || !projectDetails) {
      console.error(
        `[${timestamp}] Validation failed - Missing required fields:`,
        {
          hasFullName: !!fullName,
          hasEmail: !!email,
          hasPhone: !!phone,
          hasProjectDetails: !!projectDetails,
        }
      );
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Security: Validate input lengths to prevent payload attacks
    if (
      fullName.length > MAX_LENGTHS.fullName ||
      email.length > MAX_LENGTHS.email ||
      phone.length > MAX_LENGTHS.phone ||
      projectDetails.length > MAX_LENGTHS.projectDetails
    ) {
      console.error(
        `[${timestamp}] Validation failed - Input length exceeded:`,
        {
          fullNameLength: fullName.length,
          emailLength: email.length,
          phoneLength: phone.length,
          projectDetailsLength: projectDetails.length,
        }
      );
      return NextResponse.json(
        { error: 'Input exceeds maximum allowed length' },
        { status: 400 }
      );
    }

    // Log sanitized submission data (no sensitive info in logs)
    console.log(`[${timestamp}] Processing submission from: ${email}`);

    // Get environment variables
    const apiKey = process.env.MONDAY_API_KEY;
    const boardId = process.env.MONDAY_BOARD_ID;

    if (!apiKey || !boardId) {
      console.error(
        `[${timestamp}] Configuration error - Missing environment variables:`,
        {
          hasMondayApiKey: !!apiKey,
          hasMondayBoardId: !!boardId,
        }
      );
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Prepare column values for Monday.com
    // Company status column - set to "EKR"
    // Name, Telephone, Email, Message - text columns
    // NOTE: The keys below (e.g. color_mkz1c23c, text_mkz1frgh, etc.) are
    // Monday.com board-specific column IDs. They must be configured to match
    // the column IDs of the target Monday.com board's schema.
    const columnValues = JSON.stringify({
      color_mkz1c23c: { label: 'EKR' }, // Company: EKR (using label text)
      text_mkz1frgh: fullName, // Name
      text_mkz1qyjr: phone, // Telephone
      text_mkz1r6zm: email, // Email
      long_text_mkz112c1: projectDetails, // Message
    });

    // Monday.com GraphQL mutation
    const query = `
      mutation CreateContactItem($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
        create_item(
          board_id: $boardId,
          item_name: $itemName,
          column_values: $columnValues
        ) {
          id
          name
        }
      }
    `;

    // Create item name from contact details
    const itemName = `${fullName} - ${email}`;

    // Log API call attempt
    console.log(
      `[${timestamp}] Calling Monday.com API - Board ID: ${boardId}, Item: ${itemName}`
    );

    // Call Monday.com API
    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
      },
      body: JSON.stringify({
        query,
        variables: {
          boardId: boardId,
          itemName: itemName,
          columnValues: columnValues,
        },
      }),
    });

    const data = await response.json();

    // Check for errors in Monday.com response
    if (data.errors) {
      console.error(`[${timestamp}] Monday.com API error for ${email}:`, {
        errors: data.errors,
        boardId: boardId,
        itemName: itemName,
      });
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      );
    }

    // Check if item was created successfully
    if (!data.data?.create_item?.id) {
      console.error(`[${timestamp}] No item created for ${email}:`, {
        response: data,
        boardId: boardId,
        itemName: itemName,
      });
      return NextResponse.json(
        { error: 'Failed to create contact entry' },
        { status: 500 }
      );
    }

    // Success - Log to Vercel
    const itemId = data.data.create_item.id;
    console.log(`[${timestamp}] ✅ SUCCESS - Contact form submitted:`, {
      email: email,
      name: fullName,
      phone: phone,
      itemId: itemId,
      itemName: itemName,
      boardId: boardId,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        itemId: itemId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      `[${timestamp}] ❌ EXCEPTION - Contact form submission failed:`,
      {
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        timestamp: timestamp,
      }
    );
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
