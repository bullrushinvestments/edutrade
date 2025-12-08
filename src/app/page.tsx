import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EduTrade',
  description: 'EduTrade is an innovative SaaS platform that combines educational technology with personal finance management to help small businesses and e-commerce professionals learn financial literacy and automate their payment processes for smarter, data-driven decision-making.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EduTrade</h1>
      <p className="mt-4 text-lg">EduTrade is an innovative SaaS platform that combines educational technology with personal finance management to help small businesses and e-commerce professionals learn financial literacy and automate their payment processes for smarter, data-driven decision-making.</p>
    </main>
  )
}
