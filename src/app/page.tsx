export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-carbon-black-500">
        EKR Construction
      </h1>
      <p className="mt-4 text-lg text-carbon-black-500">
        Welcome to EKR Construction website
      </p>
      <div className="mt-8 flex gap-4">
        <button className="rounded bg-cornflower-blue-500 px-6 py-3 text-eggshell-50 hover:bg-cornflower-blue-600">
          Primary Button
        </button>
        <button className="rounded bg-dusty-grape-500 px-6 py-3 text-eggshell-50 hover:bg-dusty-grape-600">
          Secondary Button
        </button>
        <button className="rounded bg-tomato-jam-500 px-6 py-3 text-eggshell-50 hover:bg-tomato-jam-600">
          Accent Button
        </button>
      </div>
    </main>
  );
}
