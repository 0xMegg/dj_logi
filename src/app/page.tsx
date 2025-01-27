export default function Home() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ minHeight: "100vh" }}
      >
        <source src="/videos/back.mp4" type="video/mp4" />
      </video>
      {/* 오버레이 */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* 회사명 */}
      <div className="absolute w-full h-full flex items-center justify-center z-20">
        <h1 className="text-7xl font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          동진특수물류
        </h1>
      </div>
    </div>
  );
}
