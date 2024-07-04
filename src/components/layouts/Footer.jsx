import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-black">
        <footer className="w-full sm:py-10 py-5 max-w-7xl mx-auto gap-5 sm:gap-10 flex justify-between text-white flex-col sm:flex-row sm:px-0 px-5">
          <div className="space-y-2 flex-1 w-full">
            <h1 className="font-bold">LOGO</h1>
            <p className="font-semibold">Subscribe</p>
            <p className="text-sm">Get 10% off your first order</p>
            <form
              action=""
              className="w-full flex gap-4 items-center border border-white rounded p-2 bg-black"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full focus:outline-none bg-black"
              />
              <button type="submit">
                <FaArrowRight />
              </button>
            </form>
          </div>
          <div className="space-y-2  flex-1 w-full">
            <h1 className="font-bold">Support</h1>
            <p className="text-sm">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-sm">exclusive@gmail.com</p>
            <p className="text-sm">+880 123 456 789</p>
          </div>
          <div className="space-y-2 flex-1 w-full">
            <h1 className="font-bold">Account</h1>
            <a href="#" className="text-sm block hover:text-red-500">
              My Account
            </a>
            <a href="#" className="text-sm block hover:text-red-500">
              Login
            </a>
            <a href="#" className="text-sm block hover:text-red-500">
              Register
            </a>
            <a href="#" className="text-sm block hover:text-red-500">
              Cart
            </a>
          </div>
          <div className="space-y-2 flex-1 w-full">
            <h1 className="font-bold">Quick Links</h1>
            <a href="#" className="text-sm block hover:text-red-500">
              About Us
            </a>
            <a href="#" className="text-sm block hover:text-red-500">
              Contact Us
            </a>
            <a href="#" className="text-sm block hover:text-red-500">
              Privacy Policy
            </a>
            <a href="#" className="text-sm block hover:text-red-500">
              Terms & Conditions
            </a>
          </div>

          <div className="space-y-2 flex-1 w-full">
            <h1 className="font-bold">Download App</h1>
            <p className="text-sm">Download our app for Android and IOS</p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80">
                <img src="/playstore.png" alt="playstore" className="w-14" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src="/appstore.png" alt="appstore" className="w-14" />
              </a>
            </div>
          </div>
        </footer>
        <div className="w-full p-3 flex justify-center border-t border-gray-500">
          <p className="text-sm text-gray-500">
            Copyright © 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
