export default function Navbar() {
    return (
      <div className="bg-black flow-root p-5 fixed top-0 left-0 w-full z-10">
        <div className="space-x-6 text-white float-left">
          <span className="p-10">Company Name</span>
          <span>ATS</span>
          <span>Mock Interview</span>
          <span>Contact</span>
          <span>About</span>
        </div>
        <div className="space-x-6 text-[#b4b1b1] float-right mr-6">
          <span>Login</span>
          <span>Register</span>
        </div>
      </div>
    );
  }
  