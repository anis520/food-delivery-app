import React from 'react'
import { HashLoader } from 'react-spinners'
import{BiCloudUpload, BiTrash}from'react-icons/bi'
import notfound from '../img/not.gif'
import { motion } from 'framer-motion'
const Createcomponent = () => {
  return (
    <div className='bg-white mt-10 w-10/12 md:w-6/12 mx-auto rounded-lg py-2'>
          
          <h2 className='text-center font-semibold text-2xl  mb-4'>Add a dish </h2>
             
          <div className='grid md:grid-cols-2 gap-2  mx-2'>
            <div className='p-4 w-full   '>

            <p>Name :</p>
               <input className='border w-full p-1  focus:outline-orange-300 rounded' type="text" />
               

<select name="cars" id="cars" className='bg-gray-200 p-1 w-full my-2 border  focus:outline-orange-300   rounded'>
  <option >--catagory--</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
               <p>price :</p>
               <input className='border  w-full p-1 focus:outline-orange-300 rounded' type="text" />
               
    
<button className='bg-orange-400 w-full text-white font-semibold p-1 my-2 rounded-md'>Fill up</button>
            </div>
            <div className='p-2 w-full bg-orange-100 relative'>
                  
                  {/* <img src={notfound} className='w-full mt-2 rounded-lg' alt="" /> */}
                 
                 <div className='flex items-center justify-center h-full backdrop-blur-lg rounded-md bg-white/30 '>
                  <HashLoader color="#fb923c" />

                 </div>

                {/* <motion.button  whileTap={{ scale: 0.8 }} className='absolute top-0 right-0  w-4/12 flex items-center justify-center rounded-md bg-orange-400 text-white font-semibold '>photo <BiCloudUpload className='text-xl ml-2 '></BiCloudUpload> </motion.button> */}
                <motion.button  whileTap={{ scale: 0.8 }} className='absolute top-0 right-0  w-3/12 flex items-center justify-center rounded-md bg-red-500  text-white font-semibold '>Trash <BiTrash className='text-xl ml-1 '></BiTrash> </motion.button>
            </div>
            

          </div>








    </div>
  )
}

export default Createcomponent