import "../globals.css";
import Link from "next/link";

export default function Assignment5Layout({children}) {
  return (
    <div >
      <nav className="ass-4layout">
        <Link href="/Assignment-6/Question1">
          <button>Question-1</button>
        </Link>
        <Link href="/Assignment-6/Question2">
          <button>Question-2</button>
        </Link>
        <Link href="/Assignment-6/Question3">
          <button>Question-3</button>
        </Link>
        <Link href="/Assignment-6/Question4">
          <button>Question-4</button>
        </Link>
        <Link href="/Assignment-6/Question5">
          <button>Question-5</button>
        </Link>
        
      </nav>

      <main>{children}</main>
    </div>
  );
}
