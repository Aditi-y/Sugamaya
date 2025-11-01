import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Projects from '../components/Projects'
import ContactFooter from '../components/ContactFooter'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Projects />
        <ContactFooter />
      </main>
    </div>
  )
}

