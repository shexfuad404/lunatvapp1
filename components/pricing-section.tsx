import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "بنەڕەتی",
    price: "9.99",
    description: "تەواو بۆ سەیرکەرانی ئاسایی",
    features: [
      "کوالیتی پەخشی HD",
      "سەیرکردن لەسەر ١ ئامێر",
      "دەستڕاگەیشتنی بێسنوور بۆ ناوەڕۆک",
      "ئەزموونی پشتگیری کراو بە ڕیکلام",
      "هەڵوەشاندنەوە لە هەر کاتێک",
    ],
  },
  {
    name: "پرێمیۆم",
    price: "14.99",
    description: "باشترین بۆ خێزانەکان",
    features: [
      "کوالیتی 4K Ultra HD",
      "سەیرکردن لەسەر ٣ ئامێر",
      "دەستڕاگەیشتنی بێسنوور بۆ ناوەڕۆک",
      "ئەزموونی بێ ڕیکلام",
      "داگرتن بۆ دەرهێڵ",
      "پشتگیری یەکەم",
    ],
    popular: true,
  },
  {
    name: "کۆتایی",
    price: "19.99",
    description: "زۆرترین کات بەسەربردن",
    features: [
      "کوالیتی پەخشی 8K",
      "سەیرکردن لەسەر ئامێری بێسنوور",
      "دەستڕاگەیشتنی بێسنوور بۆ ناوەڕۆک",
      "ئەزموونی بێ ڕیکلام",
      "داگرتن بۆ دەرهێڵ",
      "دەستڕاگەیشتنی زوو بۆ بڵاوکراوەی نوێ",
      "پشتگیری پرێمیۆمی ٢٤/٢٢",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white">پلانەکەت هەڵبژێرە</h2>
          <p className="text-lg md:text-xl text-white text-balance max-w-3xl mx-auto leading-relaxed">
            بژارەکانی نرخی چالاک بۆ گونجاندن لەگەڵ پێداویستییەکانی پەخشکردنت
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-accent/50 bg-card/30 shadow-2xl shadow-accent/30 md:-translate-y-4"
                  : "border-border/50 bg-card/30 backdrop-blur-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  زۆرترین بەناوبانگ
                </div>
              )}

              <CardHeader className="text-center space-y-2 pt-8">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-white/80">{plan.description}</p>
                <div className="pt-4">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-white/80">/month</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 pb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/40"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  } rounded-xl py-6 transition-all hover:scale-105`}
                >
                  دەست پێ بکە
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-white/80 mt-12">
          هەموو پلانەکان تاقیکردنەوەی بەخۆڕای ٣ ڕۆژیان تێدایە. پێویستی بە کارتی بانکی نییە.
        </p>
      </div>
    </section>
  )
}
