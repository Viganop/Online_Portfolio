import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ProblemaSolucao } from '@/components/problema-solucao';
import { Projetos } from '@/components/projetos';
import { Contato } from '@/components/contato';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemaSolucao />
      <Projetos />
      <Contato />
      <Footer />
    </main>
  );
}
