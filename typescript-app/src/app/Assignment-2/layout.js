import Link from "next/link";
import { CartProvider } from "../../../Context/CartContext";

export default function Assignment2Layout({ children }) {
  return (
      <body>
        <div className="ass-2layout">
          <Link href="/Assignment-2/Question1">
            <button>Question-1</button>
          </Link>
          <Link href="/Assignment-2/Question2">
            <button>Question-2</button>
          </Link>
          <Link href="/Assignment-2/Question3">
            <button>Question-3</button>
          </Link>
          <Link href="/Assignment-2/Question4">
            <button>Question-4</button>
          </Link>
          <Link href="/Assignment-2/Question5">
            <button>Question-5</button>
          </Link>
          <Link href="/Assignment-2/Question6">
            <button>Question-6</button>
          </Link>
          <Link href="/Assignment-2/Question7">
            <button>Question-7</button>
          </Link>
          <Link href="/Assignment-2/Question8">
            <button>Question-8</button>
          </Link>
          <Link href="/Assignment-2/Question9">
            <button>Question-9</button>
          </Link>
          <Link href="/Assignment-2/Question10">
            <button>Question-10</button>
          </Link>
          <Link href="/Assignment-2/Question11">
            <button>Question-11</button>
          </Link>
          <Link href="/Assignment-2/Question12">
            <button>Question-12</button>
          </Link>
          <Link href="/Assignment-2/Question13">
            <button>Question-13</button>
          </Link>
          <Link href="/Assignment-2/Question14">
            <button>Question-14</button>
          </Link>
          <Link href="/Assignment-2/Question15">
            <button>Question-15</button>
          </Link>
          <Link href="/Assignment-2/Question16">
            <button>Question-16</button>
          </Link>
          <Link href="/Assignment-2/Question17">
            <button>Question-17</button>
          </Link>
          <Link href="/Assignment-2/Question18">
            <button>Question-18</button>
          </Link>
          <Link href="/Assignment-2/Question19">
            <button>Question-19</button>
          </Link>
        </div>
        {children}
      </body>
  );
}
