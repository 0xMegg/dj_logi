export default function TeamPage() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">직원소개</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 직원 카드 예시 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">홍길동</h3>
            <p className="text-gray-600 mb-2">직책: CEO</p>
            <p className="text-gray-500">간단한 소개글이 들어갈 자리입니다.</p>
          </div>
          {/* 추가 직원 카드들이 들어갈 자리 */}
        </div>
      </div>
    </main>
  );
}
