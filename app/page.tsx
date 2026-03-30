import Header from "@/component/header"
import Hero from "@/component/hero"
import ProductViewer from "@/component/productviewer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const page = () => {
  return (
   <main>
    <Header/>
    <Hero/>
    <ProductViewer/>
   </main>
  )
}
  
export default page