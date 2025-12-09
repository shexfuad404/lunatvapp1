import { DynamicHeader } from "@/components/dynamic-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TutorialSection } from "@/components/tutorial-section"
import { ScreenshotsSection } from "@/components/screenshots-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <DynamicHeader />
      <HeroSection />
      <FeaturesSection />
      <TutorialSection />
      <ScreenshotsSection />
      <Footer />
    </main>
  )
}
