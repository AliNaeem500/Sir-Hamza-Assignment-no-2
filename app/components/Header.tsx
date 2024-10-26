import Link from "next/link";


export default function Headerrr() {
  return(

    <ul style = {{display:"flex" , gap:'30px' , background:'yellow'}}>
    <li><Link href="/">Home</Link> </li>
      <li><Link href="/About">About</Link></li>
      <li> <Link href="/Contact-Us">Contect Us</Link></li>
  </ul>

  );
};