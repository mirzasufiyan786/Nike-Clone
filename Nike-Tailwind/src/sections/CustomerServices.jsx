import { reviews } from "../constants";
import ReviewCard from "../componenets/ReviewCard";
export default function CustomerServices() {
  return (
   <section className="max-container">
<h3 className="font-palanquin text-center text-4xl font-bold">
   What Our <span className="text-coral-red">Customers</span> Say?
</h3>
<p className="info-text m-auto mt-4 max-w-lg text-center">
We invite you to explore our customer reviews and see why so many people choose us for their needs. From the quality of our products to the professionalism of our service, our customers' words speak volumes. 
</p>
<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
{
  reviews.map((items)=>(
    <ReviewCard
    key={items.customerName}
    imgURL={items.imgURL}
    customerName={items.customerName}
    rating={items.rating}
    feedback={
      items.feedback
    }
    />
  ))
}
</div>
   </section>
  )
}
