export default function CareersPage() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">인재채용</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">채용 공고</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  프론트엔드 개발자
                </h3>
                <p className="text-gray-600 mb-4">경력 3년 이상</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  지원하기
                </button>
              </div>
              {/* 추가 채용 공고가 들어갈 자리 */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
