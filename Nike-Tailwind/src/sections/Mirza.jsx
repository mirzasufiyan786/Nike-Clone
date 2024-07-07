import { services } from "../constants";
import ServiceCard from "../componenets/ServiceCard";
export default function Mirza() {
  return (
   <section className="max-container flex justify-center flex-wrap gap-9">
{
  services.map((items)=>(
    <ServiceCard  
    key={items.label} {...items}

    />
  ))
}
   </section>
  )
}
