import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Createcomponent, Header, Maincomponent} from './components'
import {AnimatePresence,motion}from 'framer-motion'
const App = () => {
  return (
<AnimatePresence>

    <div className='w-screen h-auto flex flex-col bg-primary'>
    

             <Header/>
            
       
             <main className='w-full mt-14   md:mt-20 px-4 md:px-16 py-4'>

                    <Routes>
                       
                       <Route   path='/' element={<Maincomponent/>}        />
                       <Route   path='/create' element={<Createcomponent/>}        />


                    </Routes>


 

             </main>
        
        </div>
</AnimatePresence>
  )
}

export default App