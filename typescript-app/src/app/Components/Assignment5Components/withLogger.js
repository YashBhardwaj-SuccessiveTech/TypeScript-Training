"use client"
import { useEffect } from "react"

const WithLogger=(Components)=>{
    return (props)=>{
        useEffect(() => { console.log("Mount")
        return ()=>{console.log("unmount")
        }},[])
        
        useEffect(()=>{console.log("Update");
        },[])
         return <Components {...props}/>
    }
}

export default WithLogger

