import Button from "@/components/ui/Button";
import Link from "next/link";

const SignUpView = () => {
  return (
    <div className="w-full flex sm:flex-row flex-col gap-5 sm:gap-10 py-10">
      <div className="flex-1">
        <img src="/ilustrasi-signup.png" alt="signin" className="w-full" />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <form action="" className="w-full max-w-md flex flex-col gap-4 mt-10">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-sm">Enter your details below</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full border-b focus:outline-none border-gray-300 rounded p-2"
          />
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

          <Button type="submit" className="w-full py-3" variant="danger">
            Create Account
          </Button>
          <Button
            className="w-full py-3 flex justify-center gap-2 items-center"
            variant="light"
          >
            <img src="/icon-google.png" alt="google" width={24} height={24} />
            <span>Sign Up with Google</span>
          </Button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="pb-1 border-b border-black hover:text-red-500"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpView;
