export default function BusinessPage() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">사업소개</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">주요 사업</h2>
            <p className="text-gray-600">
              회사의 주요 사업 영역에 대한 설명이 들어갈 자리입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">사업 실적</h2>
            <p className="text-gray-600">
              주요 사업 실적과 성과에 대한 내용이 들어갈 자리입니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
