import { Container } from '@chakra-ui/react'
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import ListProducts from "@/Components/ListProducts";
import ListText from "@/Components/ListText";
import AboutUs from "@/Components/Questions";
import img from '../assets/GrabFood-EX-Desktop-HeaderImageV1.jpg'


export default function Home() {
  return (
    <Container>
      <main className="">
        <div>
          <Header />
        </div>

        <div>
          <img src={img} />
        </div>
        
        <div>
          <ListProducts />
        </div>


        <div className="mt-20">
          <ListText />
        </div>

        <div className="mt-20">
          <AboutUs />
        </div>

        <div className="mt-20">
          <Footer />
        </div>
      </main>
    </Container>
  );
}



