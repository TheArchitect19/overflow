import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black flex justify-between items-center p-5 fixed top-0 left-0 w-full z-10">
      <div className="flex justify-start gap-6 items-center">
        <Link href="/" className="px-10">
          Overflow
        </Link>
        <Link href="/ats">ATS</Link>
        <Link href="/mock-interview">Mock Interview</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="text-[#b4b1b1] flex gap-6 items-center">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}
