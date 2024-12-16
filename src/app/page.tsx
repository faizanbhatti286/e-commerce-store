




import Products from "./product/newarrival"
import Topselling from "./product/topselling"

import Hero from "@/components/hero"
import { LogoSection } from "@/components/logosections"
import DressStyle from "@/components/dressstyles"
import Customer from "@/components/customers"







export default function Home(){
  return(
    <div>
       <Hero/>
       <LogoSection/>
       <Products/>
     <Topselling/>
      <DressStyle/>
      <Customer/>
    </div>
  )
}