import Button from "../constants/Button"
import { shoe8 } from "../assets/images"
import { arrowRight } from "../assets/icons"
export default function SuperQuailty() {
  return (
    <section id="about-us"
    className=" w-full flex lg:flex-row flex-col justify-between items-center  gap-10 w max-container">
      <div className="flex flex-1 flex-col">
      
            <h2 className='font-palanquin capitalize text-4xl  font-bold lg:max-w-lg'>
                We Provide You
                <br />
                <span className='text-coral-red '>Super
                   </span>
                   <span className='text-coral-red '>Quality
                   </span> Shoes
            </h2>
            <p className='mt-4 lg:max-w-lg info-text'>At our website, we are dedicated to providing you with super quality products and services. We meticulously ensure that every item meets the highest standards of excellence, offering you nothing but the best. Your satisfaction is our top priority, and we strive to exceed your expectations with our premium offerings. Trust us to deliver superior quality every time you visit.</p>
            <p className="mt-6 lg:max-w-lg info-text">
            . Trust us to deliver superior quality every time you visit. Discover the difference that true quality.
            </p>
            <div className="mt-11">
            <Button label='Shop now '
           iconUrl={arrowRight}
            />
            </div>
      </div>
            <div className="flex-1  flex justify-center items-center">
      <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
            </div>
    </section>
  )
}
