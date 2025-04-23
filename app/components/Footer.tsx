import Link from "next/link"

export default function Footer() {
    return(
<div>
<ul className="flex justify-center items-center gap-x-11 text-xl font-normal mt-28">
    <li><Link href="/">Home</Link> </li>
      <li><Link href="/About">About</Link></li>
      <li> <Link href="/Contact-Us">Contect Us</Link></li>
  </ul>
  </div>

    );
};
