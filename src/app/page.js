//import Image from 'next/image'
import Container from './MyContainer/Container'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
export default function Home() {
  return (
    
    <Container>
      <div className="bg-custom custom-drop-shadow">
      <Navbar/>
      <h1 className='p-10 m-10'>This my app content here</h1>
      <Footer/>
    

       
      </div>
      </Container>
 
  )
}
