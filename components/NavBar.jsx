import Link from "next/link";
import React from "react";
import { BsJournalCode } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";

function NavBar() {
  return (
    <div className="flex items-center bg-black text-white w-full mx-auto px-20 justify-between py-2 border border-black">
      <Link href="/" className="flex items-center gap-2">
        <BsJournalCode className="w-5 h-5" />
        <div className="font-bold">CODE-ANALYZER</div>
      </Link>
      <div className="flex justify-evenly gap-4">
        <Link
          href="/about"
          className="hover:bg-white text-white px-2 py-1 hover:rounded-xl hover:text-black"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="hover:bg-white text-white px-2 py-1 hover:rounded-xl hover:text-black"
        >
          Contact
        </Link>
        <Link
          href="/support"
          className="hover:bg-white text-white px-2 py-1 hover:rounded-xl hover:text-black"
        >
          Support
        </Link>
      </div>
      <button className="bg-white text-black rounded-md px-3 py-2 flex items-center gap-2">
        <FaGoogle className="w-5 h-5" />
        <span>Login/Register</span>
      </button>
    </div>
  );
}

export default NavBar;
