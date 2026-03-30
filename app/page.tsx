import Header from "@/component/header"
import Hero from "@/component/hero"
import ProductViewer from "@/component/productviewer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Showcase from "@/component/showcase"

gsap.registerPlugin(ScrollTrigger)

const page = () => {
  return (
   <main>
    <Header/>
    <Hero/>
    <ProductViewer/>
    <Showcase/>
   </main>
  )
}
  
export default page