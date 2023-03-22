import React, { useState } from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { MdShoppingBasket ,MdAdd,MdLogout} from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { actionType } from "../redux/UserAuthReduser/Typeaction";

const Header = () => {
  const [show,setshow]=useState(false)
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const { Userauth } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(Userauth);

  const login = async () => {
    if (!Userauth.user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      
      
      dispatch({
        type: actionType.SET_USER,
        payload: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }else{
      setshow(!show)
 
    }
  };

const logout=()=>{

setshow(false)
localStorage.clear()
dispatch({
  type:actionType.SET_USER,
  payload:null
})
 


}

  return (
    <header className="fixed z-50 w-screen backdrop-blur-sm bg-white/30  p-3 lg:mx-4  md:p-6 md:px-16">
      {/*dextop and tablet*/}
      <div className="hidden md:flex w-full item-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="" className="w-10 object-cover" />
          <p className="text-headingcolor text-xl font-bold">city</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul  initial={{opacity:0,x:200}} animate={{opacity:1,x:0}} exit={{opacity:0,x:200}} className="flex items-center gap-8 ">
            <li className="text-base text-textcolor hover:text-headingcolor  duration-100 transition-all ease-in-out cursor-pointer ">
              Home
            </li>
            <li className="text-base text-textcolor hover:text-headingcolor  duration-100 transition-all ease-in-out cursor-pointer ">
              Menu
            </li>
            <li className="text-base text-textcolor hover:text-headingcolor  duration-100 transition-all ease-in-out cursor-pointer ">
              About us
            </li>
            <li className="text-base text-textcolor hover:text-headingcolor  duration-100 transition-all ease-in-out cursor-pointer ">
              Service
            </li>
          </motion.ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textcolor text-2xl " />
            <div className="w-5 absolute -top-3 -right-3 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              onClick={login}
              src={Userauth.user ? Userauth.user.photoURL : Avatar}
              className="w-10 min-w-[40px] drop-shadow-lg h-10 min-h-[40px] cursor-pointer rounded-full"
              alt=""
            />


               {show&&(
                
                 
                 <motion.div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col 
                 absolute top-12 right-0
                 
                 
                 "
                 initial={{opacity:0,scale:0.6}}
                 animate={{opacity:1,scale:1}}
                 exit={{opacity:0,scale:0.6}}
                 
                 >


               {Userauth && Userauth.user.email ==="ahisahad520@gmail.com"&&(
                 
                 <Link to={'/create'}>
                 <p  onClick={()=>setshow(false)}  className="px-4 py-2 flex
                 items-center gap-3 rounded-lg cursor-pointer hover:bg-slate-200  transition-all
                 duration-100 ease-in-out text-textcolor text-base  ">Add new <MdAdd/> </p>

                 </Link>
                 )}


                     <p onClick={logout} className="px-4 py-2 flex
                      items-center gap-3 cursor-pointer rounded-lg hover:bg-slate-200  transition-all
                   duration-100 ease-in-out text-textcolor text-base  ">Logout  <MdLogout/></p>

                 </motion.div>

)}

          </div>
        </div>
      </div>

      {/*mobile*/}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
      <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textcolor text-2xl " />
            <div className="w-5 absolute -top-3 -right-3 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
       
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="" className="w-10 object-cover" />
          <p className="text-headingcolor text-xl font-bold">city</p>
        </Link>
        
        <div className="relative mr-3">
            <motion.img
              whileTap={{ scale: 0.6 }}
              onClick={login}
              src={Userauth.user ? Userauth.user.photoURL : Avatar}
              className="w-10 min-w-[40px] drop-shadow-lg h-10 min-h-[40px] cursor-pointer rounded-full"
              alt=""
            />


               {show&&(
                
                 
                 <motion.div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col 
                 absolute top-12 right-0
                 
                 
                 "
                 initial={{opacity:0,scale:0.6}}
                 animate={{opacity:1,scale:1}}
                 exit={{opacity:0,scale:0.6}}
                 
                 >


               {Userauth && Userauth.user.email ==="ahisahad520@gmail.com"&&(
                 
                 <Link to={'/create'}  >
                 <p onClick={()=>setshow(false)} className="px-4 py-2 flex 
                 items-center gap-3 rounded-lg cursor-pointer hover:bg-slate-200  transition-all
                 duration-100 ease-in-out text-textcolor text-base  ">Add new <MdAdd/> </p>

                 </Link>
                 )}
    <ul   className="flex flex-col   ">
            <li className="text-base  px-4 py-2 rounded-lg  text-textcolor hover:text-headingcolor  hover:bg-slate-200  duration-100 transition-all ease-in-out cursor-pointer ">
              Home
            </li>
            <li className="text-base px-4 py-2 rounded-lg  text-textcolor hover:text-headingcolor   hover:bg-slate-200 duration-100 transition-all ease-in-out cursor-pointer ">
              Menu
            </li>
            <li className="text-base px-4 py-2 rounded-lg  text-textcolor hover:text-headingcolor   hover:bg-slate-200 duration-100 transition-all ease-in-out cursor-pointer ">
              About us
            </li>
            <li className="text-base px-4 py-2 rounded-lg  hover:bg-slate-200 text-textcolor hover:text-headingcolor  duration-100 transition-all ease-in-out cursor-pointer ">
              Service
            </li>
          </ul>

                     <p onClick={logout} className="p-2 m-2 flex
                      items-center gap-3 cursor-pointer rounded-lg hover:bg-gray-300  justify-center bg-gray-200  transition-all
                   duration-100 ease-in-out text-textcolor text-base  ">Logout  <MdLogout/></p>

                 </motion.div>

)}

          </div>
        
        </div>
    </header>
  );
};

export default Header;
