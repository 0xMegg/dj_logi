import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          {/* 회사 기본 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-700">
                주식회사 예시기업
              </h2>
              <div className="text-gray-600 space-y-1">
                <p>대표이사: 홍길동</p>
                <p>사업장: 서울특별시 강남구 테헤란로 123 예시빌딩 4층</p>
                <p>전화: 02-1234-5678</p>
                <p>이메일: contact@example.com</p>
              </div>
            </div>
            <div className="text-gray-600 space-y-1">
              <p>사업자등록번호: 123-45-67890</p>
              <p>통신판매업 신고번호: 제2024-서울강남-1234호</p>
              <p>개인정보관리책임자: 김책임 (privacy@example.com)</p>
              <p>호스팅 제공자: 예시클라우드(주)</p>
            </div>
          </div>

          {/* 이용약관 및 개인정보처리방침 링크 */}
          <div className="flex space-x-4 text-sm text-gray-600">
            <Link href="/terms" className="hover:text-gray-900 hover:underline">
              이용약관
            </Link>
            <span>|</span>
            <Link
              href="/privacy"
              className="hover:text-gray-900 hover:underline"
            >
              개인정보처리방침
            </Link>
          </div>

          {/* 카피라이트 */}
          <div className="border-t border-gray-300 pt-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} 주식회사 예시기업. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
