import Link from "next/link";
import css from "styled-jsx/css";

export default function Headerrr() {
  return(

    <ul className="flex justify-start items-start gap-x-11 text-xl font-semibold bg-gray-300">
    <li><Link href="/">Home</Link> </li>
      <li><Link href="/About">About</Link></li>
      <li> <Link href="/Contact-Us">Contect Us</Link></li>
  </ul>

  );
};