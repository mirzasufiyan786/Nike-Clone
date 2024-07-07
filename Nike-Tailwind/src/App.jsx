import { CustomerServices,Footer,Popularprodducts,Mirza,SpecialOffer,Subscribs,SuperQuailty,Hero } from "./sections";
import Nav from "./componenets/Nav";


const App = ()  => (

<main className="relative">
<Nav/>
<section className="xl:padding-l
wide:padding-r padding-b">
  <Hero/>
</section> 
<section className="padding">
<Popularprodducts/>
</section>
<section className="padding">
<SuperQuailty/>
</section>
<section className="padding">
<Mirza/>
</section>
<section className="padding">
<SpecialOffer/>
</section>
<section className="padding bg-pale-blue">
<CustomerServices/>
</section>
<section className="padding-x sm-py-32 py-16 w-full">
<Subscribs/>
</section>
<section className="padding-x bg-black  padding-t pb-8">
<Footer/>
</section>

</main>

);

export default App;