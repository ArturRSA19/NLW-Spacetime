import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { Cadastro } from '@/components/Cadastro'
import { EmptyMemories } from '@/components/EmptyMemories'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Esquerda */}
      <div className=" relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Stripes */}
        <div className="absolute bottom-0 right-0 top-0 w-2 bg-stripes pr-2" />

        {/* Cadastro */}
        <Cadastro />

        {/* Hero */}
        <Hero />

        {/* Copyright */}
        <Copyright />
      </div>

      {/* Direita */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
