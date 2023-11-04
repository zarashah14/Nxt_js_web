
import Light from "../assests/Light"
import Linkdin from "../assests/Linkdin"
import Vector1 from "../assests/Vector1"
//import Cyber1 from "@/app/assests/Cyber1.png"
function Footer() {
  return (
    <div>
      <div className='color py-8 flex '>
        <ul className="flex flex-row space-x-4 mx-60 mt-10">
       <li className="text-white font-source-sans-pro text-opacity-60 text-base font-normal">© 2023 <span>Zodbyte Development</span></li>
       <li className="text-white font-source-sans-pro text-opacity-60 text-base font-normal ">Sponsor us  |</li>
       <li className="text-white font-source-sans-pro text-opacity-60 text-base font-normal">Legal notice  |</li>
       <li className="text-white font-source-sans-pro text-opacity-60 text-base font-normal">Privacy policy  |</li>
       <li><Light/></li>
       <li><Linkdin/></li>
       <li><Vector1/></li>
       </ul>
      {/*<Image src={Cyber1} / >*/}
      </div>
    </div>
  )
}

export default Footer
