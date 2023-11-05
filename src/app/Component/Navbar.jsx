
import Container from "../MyContainer/Container"
//import Image from 'next/image'
import App from '../assests/App'
import Icon from '../assests/Icon'

import Icon2 from '../assests/Icon2'
function Navbar () {
    return (
      <Container>
       <div className="flex bg-gradient-to-b">
       <nav >
      <ul className="flex flex-row items-center gap-10 my-4 mx-60">
        <li className="text-blue-700 font-inter text-3xl font-bold ">double your net worth
        <span className="text-blue-700 font-inter text-base font-bold">.club</span></li>
        <li className="text-blue-700 font-inter text-[15.805px] font-medium">How it works</li>
        <li className="text-blue-700 font-inter text-[16.07px] font-medium">Leaderboard</li>
        <button className="rounded-md bg-blue-100 shadow-custom px-4 py-4 flex items-center gap-1">
            <App/>Sign In<Icon/>
            </button>
        <button className="text-white text-center font-inter text-12 
        font-bold rounded-md bg-blue-700 bg-opacity-70 filter flex items-center gap-1 px-8 py-4">
            Sign up<Icon2/> 
            </button>
      </ul>
      </nav>
      </div>
      </Container>
    )       
  }
  

export default Navbar 