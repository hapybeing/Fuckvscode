import LiquidCore from "@/components/LiquidCore";
import Work from "@/components/Work"; // IMPORT WORK SECTION

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-cinema-black">
      
      {/* HERO SECTION (Screen 1) */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* 3D BACKGROUND */}
        <LiquidCore />

        {/* HERO CONTENT */}
        <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm flex flex-col pointer-events-none select-none">
          <div className="relative flex place-items-center flex-col text-center">
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white-10 animate-slide-up opacity-0 drop-shadow-2xl mix-blend-overlay" style={{animationDelay: '0.5s'}}>
              DIGITAL<br />
              ALCHEMY
            </h1>
            
            <p className="mt-8 text-lg text-white-10 max-w-lg mx-auto animate-slide-up opacity-0 font-light" style={{animationDelay: '0.8s'}}>
              Crafting immersive digital experiences through code and cinema.
              <br />
              <span className="text-xs tracking-widest uppercase opacity-50 mt-12 block animate-pulse">Scroll to explore</span>
            </p>
          </div>
        </div>
      </section>

      {/* WORK SECTION (Screen 2+) */}
      <Work />

    </main>
  );
}
