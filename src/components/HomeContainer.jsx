import React from 'react'
import delevaryman from '../img/delivery.png'
import HeroBg from "../img/heroBg.png"
import I1 from "../img/i1.png"
import I2 from "../img/f1.png"
import I3 from "../img/c3.png"
import I4 from "../img/fi1.png"


const HomeContainer = () => {

 const item=[{name:'',img:I1},{name:'',img:I2},{name:'',img:I3},{name:'',img:I4}]

    const itemList = [];
    for (let i = 0; i < 4; i++) {
        
      itemList.push(
        <div className='lg:w-170  drop-shadow-lg  min-w-[170px]  p-4 text-center bg-cardOverlay backdrop-blur-md rounded-3xl    flex flex-col'>
            <img src={item[i].img} alt=""  className='w-20 lg:w-40 mx-auto  -mt-10   lg:-mt-20' />
            <p className='text-lg mt-2 font-semibold text-textcolor '>{item[i].name}</p>
            <p className='text-sm py-3 text-lightTextGray font-semibold'>Chocloate & Vanilla </p>
         <p className='text-sm  font-semibold text-headingcolor'>

         <span className='text-sm text-red-600 '>Tk </span>250

         </p>
       
        </div>);
    }



  return (
    <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2  w-full h-screen  '>
    <div className=' flex gap-6 flex-1 flex-col items-start justify-center'>

          <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
            <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
            <div className='w-8 h-8 rounded-full overflow-hidden bg-white'>

               <img src={delevaryman} className="w-full h-full  object-contain" alt="" />
              </div> 
          </div>
         <p className='text-[2.5rem] lg:text[4.5rem]  font-bold tracking-wide text-headingcolor '>The fastest Delivery in {" "}<span className='text-orange-600 text-[3rem] lg:text[5rem]'>Your city</span></p>
         <p className='text-base text-textcolor text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae velit repellat magnam maxime iure maiores. Cumque nulla repudiandae quibusdam ex ducimus minima at, fugit reprehenderit commodi aliquam itaque alias dignissimos.</p>
        <button className='bg-gradient-to-br text-white font-bold from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out  duration-100  '>Order Now</button>
    </div>
    <div className='py-2 flex-1 flex relative items-center'>

           <img src={HeroBg} className="ml-auto h-full lg:h-650 w-full  lg:w-auto" alt="" />
          <div className='w-full h-full absolute  top-0 left-0 flex  gap-4 flex-wrap items-center justify-center px-20 py-4' >

                  
  {itemList}
 


          </div>
    </div>
    



 
   </section>
  )
}

export default HomeContainer