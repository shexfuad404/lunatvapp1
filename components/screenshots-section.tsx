import Image from "next/image";

export function ScreenshotsSection() {
  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <section
        id="screenshots"
        className="py-24 px-4 md:px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] animate-glow-pulse" />

        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                وێنەکانی شاشە
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                <Image
                  src="/app-screen-1.png"
                  alt="Luna TV Home Screen"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                <Image
                  src="/app-screen-2.png"
                  alt="Luna TV Movie Grid"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div className="relative group md:col-span-2 lg:col-span-1 mx-auto">
              <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                <Image
                  src="/app-screen-3.png"
                  alt="Luna TV Movie Details"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </>
  );
}
