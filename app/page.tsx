import Header from "@/component/header"
import Hero from "@/component/hero"
import ProductViewer from "@/component/productviewer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Showcase from "@/component/showcase"
import Performance from "@/component/performance"
import Features from "@/component/features"
import Footer from "@/component/footer"
import Highlights from "@/component/highlights"

gsap.registerPlugin(ScrollTrigger)

const page = () => {
  return (
   <main>
    <Header/>
    <Hero/>
    <ProductViewer/>
    <Showcase/>
    <Performance/>
    <Features/>
    <Highlights/>
    <Footer/>
   </main>
  )
}
  
export default page