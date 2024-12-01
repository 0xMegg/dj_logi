import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-7">
            <Link href="/" className="flex items-center py-4">
              <Image
                src="/djLogo_nav.png"
                alt="로고"
                className="h-8"
                width={32}
                height={32}
              />
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
