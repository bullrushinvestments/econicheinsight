import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoNicheInsight',
  description: 'A subscription-based platform providing personalized content and analytics to help small businesses in the sustainable e-commerce sector grow their brand presence and customer engagement.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoNicheInsight</h1>
      <p className="mt-4 text-lg">A subscription-based platform providing personalized content and analytics to help small businesses in the sustainable e-commerce sector grow their brand presence and customer engagement.</p>
    </main>
  )
}
