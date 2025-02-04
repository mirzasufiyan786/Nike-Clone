import { products } from "../constants"
import PopularproductCard from "../componenets/PopularproductCard"
export default function Popularprodducts() {
  return (
  <section
  id="products"
  className="max-container max-sm:mt-12"
  >
    <div className="flex flex-col justify-start gap-5">
    <h2 className="text-4xl font-bold font-palanquin">Our <span className="text-coral-red">Popular </span>Products</h2>
    <p className="lg:max-w-lg mt-2 text-slate-gray">Experonce two-notch quality and style with our sought-after selections. Discover a word of comfort, design, and value</p>
    </div>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
    {products.map((items) =>(
      <PopularproductCard
      key={items.name} {...items}
      />
    ))}
    </div>
  </section>
  )
}
