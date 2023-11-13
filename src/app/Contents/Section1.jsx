import Image from "next/image"
import Group from "@/app/assests/Group.png"
import pricingbtn from "@/app/assests/pricingbtn.png"
//import line from "@/app/assests/line.png"
import Circle from "@/app/assests/circle.png"
import prlife from "@/app/assests/prlife.png"
import SVG from "@/app/assests/SVG.png"
import cyclon from "@/app/assests/cyclon.png"
//import ractangle from "@/app/assests/ractangle.png"
import rtc from "@/app/assests/rtc.png"
function Section1() {
  return (
    <div className="bg-opacity-80 bg-purple-100 filter drop-shadow-xl">

          <div className="grid grid-cols-2 mx-48 py-10 justify-center">
            <div>
          <p className="text-blue-700 text-opacity-80 font-inter font-bold text-4xl">
            Double your net worth with <br/>three life-changing steps.</p>
          <p className="text-gray-700 font-ibm-plex-mono font-semibold text-base mt-2">
            Experience a wealth transformation in just a few coinflips.</p></div>
        <div className="mb-10">
              <Image src={Group} / >
        </div>

             <div className="flex flex-row gap-20 ml-4">
            
                  <div className="flex flex-col mb-40 w-80 h-80">
                     <div className="flex flex-col justify-center w-221 h-54 flex-shrink-0">
                    <p className="text-blue-900 font-inter text-5xl font-bold mx-16">Deposit</p>
                    </div>
              
                <div className="mycolor my-2">
                  <p className=" text-gray-600 text-center font-mono font-bold text-base mx-14 mt-6 ">
                  Step one</p>
                     
                 <form className="flex flex-col justify-center flex-shrink-0">
                <input type="email" placeholder="Enter amount you’d like to deposit" size={26} className="mycolor px-2 py-4 mt-4"/>
                <input type="email" placeholder="Paypal" size={26}  className="myblue px-2 py-4 mt-4"/>
                <input type="email" placeholder="Stripe" size={26}  className="mypurpl px-2 py-4 mt-4"/>
                <input type="date" placeholder="4242 4242 4242 4242" size={26} className="mypurpl px-2 py-4 mt-4"/>
                {/* <input type="email" placeholder="Current Balance" size={26}  className="mycolor px-2 py-4 mt-4"/> */}
                <div className="bigbtn flex flex-col justify-center my-8 py-8">
                      <div className="sidebtn mr-60 flex items-center justify-center w-59 h-54 p-2.5 absolute"> 
                      <Image src={pricingbtn} / >
                      </div>
                      <p className="text-blue-700 font-mono text-xs font-bold px-24 z-10">Enter amount</p>

                      {/* <Image src={line} className=""/>
                       <input type="email" placeholder="50.00 USD" size={6} className="rightbtn ml-48 rounded-md py-2
                        "/> */}
                    </div>
                    <button className="last px-2 py-4 mt-4 text-white mx-16 my-2">Update balance</button>
                </form>
                </div>
                </div>

                <div className="flex flex-col mb-28 w-80 h-80">
                     <div className="flex flex-col w-221 h-54 flex-shrink-0">
                    <p className="text-blue-900 font-inter text-5xl font-bold mx-16">Flip</p>
                    </div>
              
                <div className="mycolor my-2">
                  <p className=" text-gray-600 text-center font-mono font-bold text-base mx-14 mt-6 ">
                  Step two</p>
                  <div><Image src={Circle} className="circle mx-10"/ ></div>  
                 <form className="flex flex-col justify-center flex-shrink-0">
                <div className="flex flex-col"> 
                <input type="email" placeholder="Heads" size={4} className="mycolor px-2 py-4 mr-48 ml-8 absolute"/>
                <input type="email" placeholder="Tails" size={4} className="mycolor px-2 py-4 ml-48 mr-8 z-10"/>
                </div> 

                <div className="midbigtn flex flex-col justify-center my-8 py-8">
                      <div className="midbtn mr-60 flex items-center justify-center w-59 h-54 p-2.5 absolute"> 
                      <Image src={SVG} / >
                      </div>
                      <p className="text-blue-700 font-mono text-xs font-bold px-24 z-10">Enter amount</p>

                      {/* <Image src={line} className=""/>
                       <input type="email" placeholder="50.00 USD" size={6} className="rightbtn ml-48 rounded-md py-2
                        "/> */}
                    </div>

                    <div className="fourthbtn flex flex-col justify-center py-8">
                      <div className="ftbtn mr-60 flex items-center justify-center w-59 h-54 p-2.5 absolute"> 
                      <Image src={cyclon} / >
                      </div>
                      <p className="text-white font-mono text-xm font-bold  px-24 z-10">Flip the Coin</p>
                    </div>
                    <p className="text-gray-400 font-mono text-xs font-bold mx-20">Your CID : 4124532516</p>
                </form>
                </div>
                </div>
               
               
                <div className="flex flex-col mb-28 w-80 h-80">
                     <div className="flex flex-col w-221 h-54 flex-shrink-0">
                    <p className="text-blue-900 font-inter text-5xl font-bold mx-16">Withdraw</p>
                    </div>
              
                <div className="mycolor my-2">
                  <p className=" text-gray-600 text-center font-mono font-bold text-base mx-14 mt-6 ">
                  Step three</p> 
                 <form className="flex flex-col justify-center flex-shrink-0">
                 <input type="email" placeholder="Enter amount you’d like to deposit" size={26} className="mycolor px-2 py-4 mt-6"/>
                <input type="email" placeholder="Paypal" size={26}  className="myblue px-2 py-4 mt-6"/>
                <input type="email" placeholder="Stripe" size={26}  className="mypurpl px-2 py-4 mt-6"/>
               
                   
                    <div className="thirdcardbtn flex flex-col justify-center my-24 py-8">
                      <div className="thrdbtn mr-60 flex items-center justify-center w-59 h-54 p-2.5 absolute"> <Image src={prlife} / >
                      </div>
                      <p className="text-white font-mono text-base font-semibold px-24 z-10">Withdraw Now</p>
                    </div>
                  
                </form>
               
                </div>
                </div>
               
                  
       </div>
       </div>
               
                 <hr className="bg-black h-[1px] my-3"/>
                 Boss 
                 

                {/* <div className="mt-60 mx-auto "><Image src={rtc} / >ghhjhjg</div> */}

       </div>
  )
}

export default Section1
