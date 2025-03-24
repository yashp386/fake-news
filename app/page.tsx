import { Suspense } from "react"
import FakeNewsDetector from "@/components/fake-news-detector"
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Fake News Detector</h1>
        <p className="text-muted-foreground text-center mb-8">Analyze news articles to determine their credibility</p>
        <Suspense fallback={<Skeleton className="w-full h-[600px] rounded-lg" />}>
          <FakeNewsDetector />
        </Suspense>
      </div>
    </main>
  )
}

