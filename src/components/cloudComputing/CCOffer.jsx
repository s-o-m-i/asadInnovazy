import React from 'react'
import { cloudComputingOffer } from '../../utils/cloud-computing-offer-data'
import { StaticImage } from 'gatsby-plugin-image'
import { headingText, textwhite } from '../../styles/styles'

const CCOffer = () => {
  return (
    <div className='relative'>
 <div className="homeSectionleftBlob  ">
      <div className="homeSectionRightBlob  ">
       
         
{/* <h1 className={`${textwhite} mt-28 ${headingText} text-center  w-[100%]  font-medium`}
    >

<span className='testi-linear'>  What We  </span>   Offer
  </h1> */}


  <div className="flex justify-center  mt-28">
            <div className="flex flex-col items-center">
              <div className="self-end">
                <div className="h-1 w-24 services_heading" />
              </div>

              <h1 className={`${textwhite}  ${headingText} text-center  w-[100%]  font-medium`}
    >

<span className='testi-linear'>  What We  </span>   Offer
  </h1>
             
              <div className="self-start">
                <div className="h-1 w-24 bg-orange-500" />
              </div>
            </div>
          </div>


  

    <div className="grid grid-cols-12">

   
 {cloudComputingOffer.map((e,i)=>(
    <div className={`sm:col-span-4 col-span-12 ${
        i % 3 === 1
          ? "flex justify-center"
          : i % 3 === 2
          ? "flex justify-center sm:justify-end"
          : "flex justify-center sm:justify-start"
      }  `}>
       <li className='mt-16'>
    <a href="" className="fancy_card hover:shadow-[0_20px_50px_rgba(255,_165,_0,_0.2),_0_20px_50px_rgba(128,_0,_128,_0.7)]
  w-[300px]">
    { e.imagePath === "imageOne" && <StaticImage src="../../assets/images/cc-offer-imageone.webp" className='h-[300px]'/>}
    { e.imagePath === "imageTwo" && <StaticImage src="../../assets/images/cc-offer-imagetwo.webp" className='h-[300px]'/>}
    { e.imagePath === "imageThree" && <StaticImage src="../../assets/images/cc-offer-imagethree.webp" className='h-[300px]'/>}
    { e.imagePath === "imageFour" && <StaticImage src="../../assets/images/cc-offer-imagefour.webp" className='h-[300px]'/>}
    { e.imagePath === "imageFive" && <StaticImage src="../../assets/images/cc-offer-imagefive.webp" className='h-[300px]'/>}
    { e.imagePath === "imageSix" && <StaticImage src="../../assets/images/cc-offer-imagesix.webp" className='h-[300px]'/>}
    
      <div className="text-white h-full flex pt-12 justify-center text-[120px]">


{/* {icon} */}
</div>
      <div className="fancy_card__overlay">
        <div className="fancy_card__header ">
          <svg className="fancy_card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
         
          
         
         <div className="text-white ">

         {e.icon}
         </div>
          <div className="fancy_card__header-text">
            <h3 className={`fancy_card__title ${textwhite} text-xl`}>{e.heading}</h3>            
            
          </div>
        </div>
        {/* ${paragraphTextColor} */}
        <p className={`fancy_card__description 
          text-white flex justify-center items-center
          
          `}>{e.description}</p>
      </div>
    </a>      
  </li>
    </div>
) )}
 </div>
 </div>
 </div>
    </div>
  )
}

export default CCOffer