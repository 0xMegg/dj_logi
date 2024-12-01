export default function CompanyPage() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">회사소개</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">회사 개요</h2>
            <p className="text-gray-600">
              회사에 대한 소개 내용이 들어갈 자리입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">비전과 미션</h2>
            <p className="text-gray-600">
              회사의 비전과 미션에 대한 내용이 들어갈 자리입니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
