export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">개인정보처리방침</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">개인정보의 처리 목적</h2>
          <p className="text-gray-700">
            당사는 홈페이지 운영을 위해 필요한 최소한의 개인정보만을 처리하고
            있습니다. 현재 당사 홈페이지에서는 이용자의 개인정보를 직접적으로
            수집하거나 저장하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            개인정보의 처리 및 보유 기간
          </h2>
          <p className="text-gray-700">
            당사는 홈페이지를 통해 개인정보를 수집, 저장하지 않으므로 개인정보의
            처리 및 보유 기간이 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">개인정보의 제3자 제공</h2>
          <p className="text-gray-700">
            당사는 개인정보를 제3자에게 제공하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            정보주체의 권리, 의무 및 그 행사방법
          </h2>
          <p className="text-gray-700">
            이용자는 개인정보주체로서 권리 행사를 하실 수 있습니다. 다만, 당사
            홈페이지에서 개인정보를 수집하지 않으므로, 이와 관련된 권리 행사는
            제한될 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            개인정보의 안전성 확보 조치
          </h2>
          <p className="text-gray-700">
            당사는 홈페이지 운영에 있어 개인정보가 분실, 도난, 유출, 변조 또는
            훼손되지 않도록 안전성 확보에 필요한 기술적, 관리적 조치를 하고
            있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">개인정보 보호책임자</h2>
          <p className="text-gray-700 mb-4">
            개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와
            관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이
            개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">개인정보 보호책임자</h3>
            <ul className="space-y-1 text-gray-700">
              <li>성명: 홍길동</li>
              <li>직책: 개인정보보호팀장</li>
              <li>연락처: 02-1234-5678, privacy@example.com</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            개인정보처리방침의 변경
          </h2>
          <p className="text-gray-700">
            이 개인정보처리방침은 2024년 1월 1일부터 적용되며, 법령 및 방침에
            따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행
            7일 전부터 공지사항을 통하여 고지할 것입니다.
          </p>
        </section>
      </div>
    </div>
  );
}
