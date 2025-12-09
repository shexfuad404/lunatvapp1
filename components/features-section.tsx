import { Sparkles, Mic, Film, Zap, Shield, Globe, Clock, Heart } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "باشترین کوالێتی",
  },
  {
    icon: Mic,
    title: "دۆبلاژ کراوی کوردی",
  },
  {
    icon: Film,
    title: "زینجیرە و فلیم",
  },
  {
    icon: Zap,
    title: "خێرای لە بەکارهێنان",
  },
  {
    icon: Shield,
    title: "پاراستنی زانیاری",
  },
  {
    icon: Globe,
    title: "بەردەست لە هەموو شوێنێک",
  },
  {
    icon: Clock,
    title: "نوێکردنەوەی بەردەوام",
  },
  {
    icon: Heart,
    title: "لیستی دڵخواز",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">تایبەتمەندییەکان</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="relative group">
                <div className="absolute -inset-[1px] bg-black rounded-2xl border border-white/20" />

                <div className="relative flex flex-col items-center justify-center gap-3 p-6 md:p-8 bg-[#0a0a0a] rounded-2xl hover:bg-[#111] transition-all duration-300 min-h-[140px] border border-white/10 group-hover:border-white/20">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white text-center" dir="rtl">
                    {feature.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
