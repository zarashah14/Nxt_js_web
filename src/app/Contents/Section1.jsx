import Image from "next/image"
import Group from "@/app/assests/Group.png"
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
       </div>
       </div>
  )
}

export default Section1
