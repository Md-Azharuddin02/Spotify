import { Outlet, Route, Routes, useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"
import { albumsData } from "../assets/assets"

function Display(){
    const displayRef= useRef()
    const location= useLocation()
    const isAlbum= location.pathname.includes("album")
    const albumId = isAlbum ? location.pathname.slice(-1) : ""
    const bgColor= albumsData[Number(albumId)].bgColor

    useEffect(()=>{
        if(isAlbum){
            displayRef.current.style.background= `linear-gradient(${bgColor}, #121212)`
        }
        else{
            displayRef.current.style.background=`#121212`
        }
    })
    return(
        <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:[75%] lg:ml-0">
           <Outlet/>
        </div>
    )
}
export default Display