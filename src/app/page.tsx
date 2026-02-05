import LiquidCore from "@/components/LiquidCore";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden relative bg-cinema-black">
      
      {/* 3D LAYER: This sits behind everything */}
      <LiquidCore />

      {/* TEXT LAYER: This sits on top */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col pointer-events-none">
        
        {/* Top Label */}
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-white-5 bg-gradient-to-b from-zinc-200/0 via-zinc-200/0 to-transparent pb-6 pt-8 backdrop-blur-sm dark:border-white-5 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-white-5 animate-fade-in opacity-0" style={{animationDelay: '0.2s'}}>
          GAURANG&nbsp;
          <code className="font-mono font-bold">/ VISUALS</code>
        </p>

        {/* Main Title */}
        <div className="mt-32 relative flex place-items-center flex-col text-center">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white-10 animate-slide-up opacity-0 drop-shadow-2xl" style={{animationDelay: '0.5s'}}>
            DIGITAL<br />
            ALCHEMY
          </h1>
          
          <p className="mt-8 text-lg text-white-10 max-w-lg mx-auto animate-slide-up opacity-0" style={{animationDelay: '0.8s'}}>
            Crafting immersive digital experiences through code and cinema.
            <br />
            <span className="text-xs tracking-widest uppercase opacity-50 mt-4 block">Scroll to explore</span>
          </p>
        </div>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-20"></div>
    </main>
  );
}

