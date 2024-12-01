export default function ContactPage() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Contact</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">연락처 정보</h2>
            <div className="space-y-2">
              <p className="text-gray-600">주소: 서울특별시 ...</p>
              <p className="text-gray-600">전화: 02-XXX-XXXX</p>
              <p className="text-gray-600">이메일: contact@company.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">문의하기</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">이름</label>
                <input type="text" className="w-full border rounded-lg p-2" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">이메일</label>
                <input type="email" className="w-full border rounded-lg p-2" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">메시지</label>
                <textarea className="w-full border rounded-lg p-2 h-32"></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
