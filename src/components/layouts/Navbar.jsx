"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Sign In",
    path: "/signin",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/product/search/${keyword}`);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="w-full border-b sticky top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto bg-white py-4 flex justify-between items-center px-4 sm:px-0">
        <h1 className="font-bold">LOGO</h1>
        <div className="hidden md:flex gap-4">
          {routes.map((route, index) => (
            <Link
              href={route.path}
              key={index}
              className={`font-bold text-lg hover:text-red-500 ${
                pathname === route.path && "text-red-500"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <form
            onSubmit={handleSearch}
            className="flex gap-4 items-center border rounded p-2 bg-gray-100"
          >
            <input
              type="search"
              name="search"
              id="search"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              autoComplete="off"
              onKeyDown={(e) => {
                if (e.key === "Enter" && keyword) {
                  handleSearch(e);
                }
              }}
              placeholder="Search"
              className="focus:outline-none bg-gray-100"
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
          <Link href="/profile">
            <FaUser
              className={`text-xl hover:text-red-500 ${
                pathname == "/profile" && "text-red-500"
              }`}
            />
          </Link>
          <Link href="/cart">
            <FaShoppingCart
              className={`text-xl hover:text-red-500 ${
                pathname == "/cart" && "text-red-500"
              }`}
            />
          </Link>
        </div>
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-4">
          {routes.map((route, index) => (
            <Link
              href={route.path}
              key={index}
              className={`font-bold hover:text-red-500 ${
                pathname === route.path && "text-red-500"
              }`}
            >
              {route.name}
            </Link>
          ))}

          <Link
            className={`font-bold hover:text-red-500 ${
              pathname == "/profile" && "text-red-500"
            }`}
            href="/profile"
          >
            Profile
          </Link>
          <Link
            className={`font-bold hover:text-red-500 ${
              pathname == "/cart" && "text-red-500"
            }`}
            href="/cart"
          >
            Cart
          </Link>

          <form
            onSubmit={handleSearch}
            className="flex gap-4 items-center border rounded p-2 bg-gray-100 mt-4"
          >
            <input
              type="search"
              name="search"
              id="search"
              value={keyword}
              onSubmit={handleSearch}
              autoComplete="off"
              onKeyDown={(e) => {
                if (e.key === "Enter" && keyword) {
                  handleSearch(e);
                }
              }}
              onChange={(e) => setKeyword(e.target.value)}
              required
              placeholder="Search"
              className="focus:outline-none bg-gray-100 w-full"
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
