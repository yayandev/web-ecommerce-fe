import Button from "@/components/ui/Button";
import Link from "next/link";

const SignInView = () => {
  return (
    <div className="w-full flex sm:flex-row flex-col gap-5 sm:gap-10 py-10">
      <div className="flex-1">
        <img src="/ilustrasi-signup.png" alt="signin" className="w-full" />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <form action="" className="w-full max-w-md flex flex-col gap-4 mt-10">
          <h1 className="text-3xl font-bold">Log in to LOGO</h1>
          <p className="text-sm">Enter your details below</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full border-b focus:outline-none border-gray-300 rounded p-2"
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full border-b focus:outline-none border-gray-300 rounded p-2"
          />

          <div className="flex justify-between items-center">
            <Button type="submit" variant="danger">
              Log In
            </Button>
            <Link href="/signup" className="text-red-500">
              Don{"'"}t have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInView;
