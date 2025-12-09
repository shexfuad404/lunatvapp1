import { Button } from "@/components/ui/button"
import { Play, Star } from "lucide-react"

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  )
}

const stats = [
  { icon: Star, value: "4.4", label: "هەڵسەنگاندن" },
  { icon: Play, value: "500+", label: "فلیم" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40 pb-12 md:pb-20 px-4">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-t from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/80">یەکەم ئەپی دۆبلاژی کوردی</span>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white animate-in fade-in slide-in-from-bottom-4 duration-1000 text-balance leading-tight drop-shadow-2xl">
              Luna TV
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 text-balance leading-relaxed drop-shadow-lg"
              dir="rtl"
            >
              یه که م ئه پڵیکەیشنی کوردی بۆ دۆبلاژکردنی فیلم و زنجیره کان به زمانی کوردی
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-black shadow-xl shadow-white/20 text-sm md:text-base font-semibold px-5 md:px-6 py-6 md:py-7 rounded-2xl transition-all hover:scale-105 w-full sm:w-auto min-w-[220px] md:min-w-[260px]"
            >
              <a
                href="https://apps.apple.com/iq/app/luna-tv/id6737426855?l=ar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start gap-3 w-full"
              >
                <AppleIcon className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                <span className="text-left">Download on App Store</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-black shadow-xl shadow-white/20 text-sm md:text-base font-semibold px-5 md:px-6 py-6 md:py-7 rounded-2xl transition-all hover:scale-105 w-full sm:w-auto min-w-[220px] md:min-w-[260px]"
            >
              <a
                href="https://play.google.com/store/search?q=Luna+tv&c=apps&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start gap-3 w-full"
              >
                <GooglePlayIcon className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                <span className="text-left">Get it on Google Play</span>
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-4 md:gap-8 pt-8 md:pt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 px-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <Icon className="w-5 h-5 text-white/60" />
                  <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-white/60" dir="rtl">
                    {stat.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
