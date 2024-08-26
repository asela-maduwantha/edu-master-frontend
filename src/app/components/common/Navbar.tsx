import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-indigo-800 text-gray-100 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-gray-100 hover:text-gray-300">EduMaster</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/courses" className="hover:text-gray-300">Courses</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
        <Link href="/login" className="bg-yellow-400 text-indigo-800 px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
