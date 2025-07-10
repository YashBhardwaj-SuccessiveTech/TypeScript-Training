// 1. Create a Next.js app using the App Router with multiple pages. 
// Use next/dynamic to lazily load page components and improve initial load time. 
// Components should load only when their routes are visited.
"use client"
import dynamic from "next/dynamic"

const Counter=dynamic(()=>import("@/Components/Assignment1Components/Counter"),{
    loading:()=><p>Loading...</p>,
    ssr:false
})
const Home=()=>{

    return(
        <>
        <Counter />
        </>
    )

}
export default  Home

