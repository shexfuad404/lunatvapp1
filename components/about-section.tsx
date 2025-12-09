import { Target, Users, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white">دەربارەی لونا تی ڤی</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-balance">
              لونا تی ڤی دروست کرا بۆ شۆڕشکردن لە چۆنیەتی ئەزموونکردنی کات بەسەربردن. باوەڕمان وایە پەخشکردن دەبێت ئاسان
              بێت، کەسیی بێت، و دەستڕاگەیشتن بێت بۆ هەمووان، لە هەر شوێنێک، لە هەر کاتێک.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed text-balance">
              لەگەڵ تەکنەلۆژیای هۆشی دەستکردی پێشکەوتوو، ژێرخانی پەخشکردنی خێرای بروسکە، و ڕووکارێکی جوان دروستکراو،
              ئێمە پلاتفۆرمی پەخشکردنی سبەینێ دروست دەکەین، کە ئەمڕۆ بەردەستە.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/40">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">ئامانجمان</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                دەستڕاگەیشتن کردنی کات بەسەربردنی پلەی جیهانی بۆ هەمووان لە ڕێگەی تەکنەلۆژیای داهێنەرانە و ئەزموونی
                بەکارهێنەری نایاب.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/40">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">کۆمەڵگامان</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                بەشدار بە لە ملیۆنان بینەری ڕازی لە سەرانسەری جیهان کە لونا تی ڤی وەک هاوڕێی پەخشکردنی سەرەکییان متمانەی
                پێ دەکەن.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/40">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">بەهاکانمان</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                کوالیتی ناوەڕۆک، تایبەتمەندی بەکارهێنەر، و داهێنانی بەردەوام هەموو ئەوەی ئێمە لە لونا تی ڤی دەیکەین
                هاندەر دەدات.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
