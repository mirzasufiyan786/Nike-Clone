
export default function ShoeCard({imgUrl,changeBigShoeImage,bigShoeImg}) {
    const hanelClick = () =>{
if(bigShoeImg !== imgUrl.bigShoe)
    {
        changeBigShoeImage(imgUrl.bigShoe)
    }
    }
  return (
    <div 
    className={`border-2 rounded-xl 
        ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}

    // className="border-2 rounded-xl cusror-pointer max-sm:flex-1 border-coral-red"
    onClick={hanelClick}
    >
     <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgUrl.thumbnail} alt="Shoe collection" width={127} height={103} className="object-contain"/>
     </div>
    </div>
  )
}