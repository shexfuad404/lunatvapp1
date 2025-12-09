import { Download, UserPlus, Play } from "lucide-react"

const steps = [
  {
    step: "١",
    icon: Download,
    title: "داگرتنی ئەپ",
    description: "لە ئەپستۆر یاخوت گۆگل پلەی گەران بۆ Luna Tv بکە و پاشان ینستال بکە",
  },
  {
    step: "٢",
    icon: UserPlus,
    title: "دروستکردنی هەژمار",
    description: "هەژمارێک دروست بکە",
  },
  {
    step: "٣",
    icon: Play,
    title: "سەیرکردن",
    description: "ئێستا دەتوانیت سەیری فلیم و زنجیرەکان بکەیت بە زمانی کوردی",
  },
]

export function TutorialSection() {
  return (
    <section id="tutorial" className="py-16 md:py-24 px-4 md:px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="container relative z-10">
        {/* Section title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" dir="rtl">
            چۆن دەست پێ بکەیت
          </h2>
          <p className="text-white/60 text-lg" dir="rtl">
            بە سێ هەنگاو ئاسان
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="relative group">
                  {/* Connecting line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent z-0" />
                  )}

                  <div className="relative flex flex-col items-center text-center p-6 md:p-8 bg-[#0a0a0a] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:bg-[#111]">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center mb-4 mt-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-black" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3" dir="rtl">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm md:text-base leading-relaxed" dir="rtl">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
