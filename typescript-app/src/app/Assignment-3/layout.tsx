"use client";
// import { Authcontext, AuthProvider } from "@/context/Authcontext";
import Link from "next/link";
import { ReactNode } from "react";

type Props={
  children: ReactNode
}

const Assignment3Layout = ({ children }:Props) => {

  return (
    <div>
        <nav className="ass-3layout">
          <Link href="/Assignment-3/Question1">
          <button>Question-1</button>
        </Link>

        <Link href="/Assignment-3/Question2">
          <button>Question-2</button>
        </Link>

        <Link href="/Assignment-3/Question3">
          <button>Question-3</button>
        </Link>

        <Link href="/Assignment-3/Question4">
          <button>Question-4</button>
        </Link>

        <Link href="/Assignment-3/Question5">
          <button>Question-5</button>
        </Link>

        <Link href="/Assignment-3/Question6">
          <button>Question-6</button>
        </Link>
        </nav>
   
      {/* Render the nested pageimport { useRouter } from "next/navigation"; */}

      {/* <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>{children}</div> */}
      {/* <div  className="uparniche">
        <AuthProvider> */}
          {children}
        {/* </AuthProvider>
      </div> */}
      {/* {children} */}
    </div>
  );
};
export default Assignment3Layout;
