"use client"
import { useRouter } from "next/navigation"
import { Router } from "next/router"

export default function Dashboard()
{

    const router= useRouter();

    return(
        <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={()=>router.push("/Assignment-3/Question5/Profile")}>Profile</button>
            <button onClick={()=>router.push("/Assignment-3/Question5/Setting")}>Settings</button>
        </div>
    )

}