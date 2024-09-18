import React from 'react'
import '../../ui/services.css'
import { StaticImage } from 'gatsby-plugin-image'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import { FaRegListAlt } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";


const FancyCard = () => {
  return (
    <div className='homeSectionleftBlob'>
     <div className='homeSectionRightBlob'>
    <div className='mt-32'>
    <h1 className={`${textwhite} ${headingText} font-medium mb-28 mx-auto w-[100%] text-start md:text-center`}> <span className='text-primary-orange text-purp-gradient '> Uniting </span> With Us</h1>
   
   <div className="grid grid-cols-12">
   

    <div className="col-span-12 sm:col-span-4">
    <li >
    <a href="" className="fancy_card  w-[300px]">
      {/* <StaticImage src='../../assets/images/protectedSolutions.jpg' className='h-[300px]'/> */}
      <div className="text-white h-full flex pt-12 justify-center text-[120px]">

<FaRegListAlt />
</div>
      <div className="fancy_card__overlay">
        <div className="fancy_card__header ">
          <svg className="fancy_card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
         
         <div className="text-white ">

          <FaRegListAlt />
         </div>
          <div className="fancy_card__header-text">
            <h3 className={`fancy_card__title ${textwhite} text-xl`}>Protected Solutions</h3>            
            
          </div>
        </div>
        {/* ${paragraphTextColor} */}
        <p className={`fancy_card__description 
          text-white
          
          `}>We understand the dangers of cybercrimes and the importance of security for your data. To help you with a protected and secure web solutions, our team goes to every extent to check the reliability of our products with multiple testing.</p>
      </div>
    </a>      
  </li>

    </div>


    <div className="col-span-12 sm:col-span-4 flex justify-center">
    <li >
    <a href="" className="fancy_card  w-[300px]">
      {/* <StaticImage src='../../assets/images/protectedSolutions.jpg' className='h-[300px]'/> */}

      <div className="text-white h-full flex pt-12 justify-center text-[120px]">

<FaHandsHelping />
</div>

      <div className="fancy_card__overlay">
        <div className="fancy_card__header ">
          <svg className="fancy_card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
         
         <div className="text-white">

          <FaHandsHelping />
         </div>
          <div className="">
            <h3 className={`fancy_card__title ${textwhite} whitespace-nowrap text-xl`}>Long term Relations</h3>            
            
          </div>
        </div>
        {/* ${paragraphTextColor} */}
        <p className={`fancy_card__description 
          text-white
          
          `}>We dedicate an expert development team to our web app development projects to look after it in order to ensure its proper functioning. Our goal is to maintain a long term partnership with our clients to enable us for investing in their success.</p>
      </div>
    </a>      
  </li>

    </div>

    <div className="col-span-12 sm:col-span-4 flex justify-end">
    <li >
    <a href="" className="fancy_card  w-[300px]">
      {/* <StaticImage src='../../assets/images/protectedSolutions.jpg' className='h-[300px]'/> */}

      <div className="text-white h-full flex pt-12 justify-center text-[120px]">

<FaMagic />
</div>

      <div className="fancy_card__overlay">
        <div className="fancy_card__header ">
          <svg className="fancy_card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
         
         <div className="text-white">

          <FaMagic />
         </div>
          <div className="">
            <h3 className={`fancy_card__title ${textwhite} whitespace-nowrap text-xl`}>Accessible Web Designs</h3>            
            
          </div>
        </div>
        {/* ${paragraphTextColor} */}
        <p className={`fancy_card__description 
          text-white
          
          `}>We develop flexible and adaptable web designs to stand with changing digital ecosystem. All our products are scalable and quality assured so you can reply on us in giving your business and organization a new technological life.</p>
      </div>
    </a>      
  </li>

    </div>
   

    
   </div>
   
  
  </div>
  </div>
  </div>
  )
}

export default FancyCard