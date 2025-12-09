function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.64-.04 3.28-.04 4.92-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="bg-black relative overflow-hidden py-16">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-500/20 to-transparent blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto rounded-3xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-black/50 backdrop-blur-sm p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="md:col-span-1 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-xl">دەربارەی لونا تیڤی</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed" dir="rtl">
                بەخێربێیت بۆ کۆمپانیاکەمان بەخێربێیت بۆ تەلەفزیۆنی لونا، یەکەم
                ئەپڵیکەیشنی تایبەت بە عاشقانی سینەما و زنجیرە تەلەفزیۆنییەکان کە
                بە زمانی کوردی دۆبلاژ کراوە! لە Luna TV، ئێمە باوەڕمان وایە کە
                ڕابواردنی مافێکە بۆ هەموو کەسێک و نابێت زمان ببێتە بەربەست
                لەبەردەم خۆشی سەیرکردن. بۆیە پلاتفۆرمێکی گشتگیرمان دروست کردووە
                کە باشترین فیلم و زنجیرە نێودەوڵەتییەکان بە کوالیتی بەرز و
                پرۆفیشناڵانە بە زمانی دایکمان – کوردی دۆبلاژ کراوە.
              </p>
              <p
                className="text-sm text-white/60 leading-relaxed mt-4"
                dir="rtl"
              >
                🎯 ئەرکی ئێمە: بڵاوکردنەوەی کەلتووری کوردی و بەهێزکردنی
                ئامادەبوونی لە جیهانی ڕابواردنی دیجیتاڵی لە ڕێگەی پێشکەشکردنی
                ناوەرۆکی جیهانی بە بەرجەستەیەکی خۆماڵی، کە هەمووان بتوانن لێی
                تێبگەن و هەستی پێبکەن.
              </p>
              <p
                className="text-sm text-white/60 leading-relaxed mt-2"
                dir="rtl"
              >
                🌍 دیدگامان: ببینە ئەپڵیکەیشنی کوردی پێشەنگ لە بواری ڕابواردندا
                و بگەینە هەموو ماڵێکی کوردی لە ماڵەوە و دەرەوەی وڵات.
              </p>
              <p
                className="text-sm text-white/60 leading-relaxed mt-2"
                dir="rtl"
              >
                ❤️ بۆچی تەلەفزیۆنی لونا؟ ناوەڕۆکی تایبەت و هەمەجۆر بە زمانی
                کوردی ڕووێکی ئاسان بۆ بەکارهێنەر بۆ هەموو تەمەنەکان نوێکردنەوەی
                بەردەوام و نوێی هەفتانە ئەزموونی بینین بە کوالیتی بەرز پاڵپشتی
                تەکنیکی بەردەوام و پەیوەندی ڕاستەوخۆ لەگەڵ بینەران سوپاس بۆ
                هەڵبژاردنی Luna TV – کە جیهان لە دەستتدا کۆدەبێتەوە و بە
                زمانەکەت.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white text-base mb-4">
                سۆشیال میدیاکان
              </h4>
              <a
                href="https://www.facebook.com/share/1DHqMXFeJS/?mibextid=wwXIfr"
                className="block text-sm text-white/60 hover:text-purple-400 transition-colors"
              >
                فایسبۆک
              </a>
              <a
                href="https://www.tiktok.com/@lunatvapp"
                className="block text-sm text-white/60 hover:text-purple-400 transition-colors"
              >
                تیکتۆک
              </a>
              <a
                href="https://t.me/LUNATVapp"
                className="block text-sm text-white/60 hover:text-purple-400 transition-colors"
              >
                تیلیگرام
              </a>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white text-base mb-4">لاپەرەکان</h4>
              <a
                href="/"
                className="block text-sm text-white/60 hover:text-purple-400 transition-colors"
              >
                ماڵەوە
              </a>
              <a
                href="#features"
                className="block text-sm text-white/60 hover:text-purple-400 transition-colors"
              >
                تایبەتمەندیەکان
              </a>
              
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-white text-base mb-4">
                پەیوەندی کردن
              </h4>
         <a
  href="tel:+9647511999131"
  dir="ltr"
  className="block text-sm text-white/60 hover:text-purple-400 transition-colors"
>
  +٩٦٤ ٧٥١ ١٩٩ ٩١٣١
</a>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white text-base mb-4">یاسایی</h4>
              <a
                href="/privacy"
                className="block text-sm text-white/60 hover:text-purple-400 transition-colors"
              >
                سیاسەتی پاراستنی نهێنی
              </a>
              <a
                href="/terms"
                className="block text-sm text-white/60 hover:text-purple-400 transition-colors"
              >
                مەرجەکانی خزمەتگوزاری
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">© هەموو مافەکانی پارێزراوە</p>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1DHqMXFeJS/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 transition-all flex items-center justify-center"
              >
                <FacebookIcon className="w-5 h-5 text-white/80" />
              </a>
              <a
                href="https://t.me/LUNATVapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 transition-all flex items-center justify-center"
              >
                <TelegramIcon className="w-5 h-5 text-white/80" />
              </a>
              <a
                href="https://www.tiktok.com/@lunatvapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 transition-all flex items-center justify-center"
              >
                <TikTokIcon className="w-5 h-5 text-white/80" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
