import Headings from "./week-2/headings";
import Link from "next/link";
import Profile from "./week-3/profile";




export default function Page() {
  return (
    <main>
      <Headings/>
      <Profile/>
     {/*<Image src={Bean} alt="The BEAN" className='h-300 w-100'/> */}
        
        <ul>
          <li>
            <Link href="week-2">
              Week 2 Assignment
            </Link>            
          </li>
          <li>
          <Link href="week-3">
            Week 3 Assignment
            </Link>
          </li>

        </ul>
        
    </main>
  )  
}