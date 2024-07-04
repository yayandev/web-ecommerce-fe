import Link from "next/link";

export const metadata = {
  title: "Not Found",
};

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="space-y-6 text-center">
        <h1 className="text-5xl font-bold">404 Not Found</h1>
        <p className="text-lg">Your visited not found. You may go home page.</p>
        <Link
          href="/"
          className="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
