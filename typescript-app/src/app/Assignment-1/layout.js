import "../globals.css";
import Link from "next/link";

export default function Assignment1Layout({ children }) {
  return (
  
        <div className="ass-1layout">
          <Link href="/Assignment-1/Question1">
            <button>Question-1</button>
          </Link>
          <Link href="/Assignment-1/Question2">
            <button>Question-2</button>
          </Link>
          <Link href="/Assignment-1/Question3">
            <button>Question-3</button>
          </Link>
          <Link href="/Assignment-1/Question4">
            <button>Question-4</button>
          </Link>
          <Link href="/Assignment-1/Question5">
            <button>Question-5</button>
          </Link>
          <Link href="/Assignment-1/Question6">
            <button>Question-6</button>
          </Link>
          {children}
        </div>
    
  );
}
