import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-7">
            <Link href="/" className="flex items-center py-4">
              <span className="font-semibold text-gray-500 text-lg">로고</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/company"
              className="py-4 px-2 text-gray-500 hover:text-gray-900"
            >
              회사소개
            </Link>
            <Link
              href="/business"
              className="py-4 px-2 text-gray-500 hover:text-gray-900"
            >
              사업소개
            </Link>
            <Link
              href="/team"
              className="py-4 px-2 text-gray-500 hover:text-gray-900"
            >
              직원소개
            </Link>
            <Link
              href="/careers"
              className="py-4 px-2 text-gray-500 hover:text-gray-900"
            >
              인재채용
            </Link>
            <Link
              href="/contact"
              className="py-4 px-2 text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
