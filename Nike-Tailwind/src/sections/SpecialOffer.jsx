
import { offer } from '../assets/images'
import Button from '../constants/Button'
import { arrowRight } from '../assets/icons'
export default function SpecialOffer() {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container '>
<div className='flex-1'>
    <img src={offer} width={773} height={687} className='object-contain w-full' 
    alt="" />
</div>
<div className="flex flex-1 flex-col">
      
            <h2 className='font-palanquin capitalize text-4xl  font-bold lg:max-w-lg'>
                <br />
                <span className='text-coral-red '>Special
                   </span> Offer
            </h2>
            <p className='mt-4 lg:max-w-lg info-text'>Don't miss our exclusive special offer! We're thrilled to provide you with up to 30% off on select stock items. Whether you're looking for the latest trends or timeless classics, now is the perfect time to shop and save. Our curated selection includes high-quality products that are sure to meet your needs and exceed your expectations.</p>
            <p className="mt-6 lg:max-w-lg info-text">
            Hurry, this limited-time offer won't last long! Explore our specially discounted items and take advantage of these incredible savings. At our store, we believe in rewarding our valued customers with the best deals on premium products. 
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
            <Button 
            label='View details'/>
            <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
            />
            
            </div>
 </div>
    </section>
  )
}
