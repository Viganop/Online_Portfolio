import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Sobre } from '@/components/sobre';
import { Projetos } from '@/components/projetos';
import { Linguagens } from '@/components/linguagens';
import { Contato } from '@/components/contato';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Sobre />
      <Projetos />
      <Linguagens />
      <Contato />
      <Footer />
    </main>
  );
}
