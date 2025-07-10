import { ReactNode } from "react";
import "../globals.css";
import Link from "next/link";

type Props = {
  children: ReactNode
}

export default function Assignment4Layout({children}: Props) {
  return (
    <div >
      <nav className="ass-4layout">
        <Link href="/Assignment-4/Question1">
          <button>Question-1</button>
        </Link>
        <Link href="/Assignment-4/Question2">
          <button>Question-2</button>
        </Link>
        <Link href="/Assignment-4/Question3">
          <button>Question-3</button>
        </Link>
        <Link href="/Assignment-4/Question4">
          <button>Question-4</button>
        </Link>
        <Link href="/Assignment-4/Question5">
          <button>Question-5</button>
        </Link>
        <Link href="/Assignment-4/Question6">
          <button>Question-6</button>
        </Link>
        <Link href="/Assignment-4/Question7">
          <button>Question-7</button>
        </Link>
        <Link href="/Assignment-4/Question8">
          <button>Question-8</button>
        </Link>
        <Link href="/Assignment-4/Question9">
          <button>Question-9</button>
        </Link>
        <Link href="/Assignment-4/Question10">
          <button>Question-10</button>
        </Link>
        <Link href="/Assignment-4/Question11">
          <button>Question-11</button>
        </Link>
        <Link href="/Assignment-4/Question12">
          <button>Question-12</button>
        </Link>
        <Link href="/Assignment-4/Question13">
          <button>Question-13</button>
        </Link>
        <Link href="/Assignment-4/Question14">
          <button>Question-14</button>
        </Link>
        
      </nav>

      <main>{children}</main>
    </div>
  );
}
