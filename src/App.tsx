import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Excerpt from './components/Excerpt'
import Recommendation from './components/Recommendation'
import Biography from './components/Biography'
import RecentPosts from './components/RecentPosts'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Divider from './components/Divider'

export default function App() {
  return (
    <main className="relative z-[1] px-6">
      <Hero />
      <Divider />
      <Manifesto />
      <Divider />
      <Excerpt />
      <Divider />
      <Recommendation />
      <Divider />
      <Biography />
      <Divider />
      <RecentPosts />
      <Divider />
      <Contact />
      <Footer />
    </main>
  )
}
