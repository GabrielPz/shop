import { styled } from "../styles"
import { HomeContainer, Products } from "../styles/pages/home "
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import produto1 from "../assets/gowShop.jpg"
import produto2 from "../assets/erShop.webp"
import produto3 from "../assets/straySHop.jpg"
import {stripe} from "../lib/stripe"
import { GetServerSideProps } from "next"
import Stripe from "stripe"


interface HomeProps {

  products: {
    id: string;
    name: string;
    price: number;
    imageUrl: string
  }[]
}
export default function Home({products: Home}) {

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
      slides: {
        perView: 3,
        spacing: 48,
      }
    },
    [
      // add plugins here
    ]
  )


  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Products className="keen-slider__slide" >
        <Image  src={produto1} width={520} height={480} alt=""/>
        
        <footer>
          <strong> Game X</strong>
          <span> R$ 9999,99</span>
        </footer>
      </Products>
      <Products className="keen-slider__slide">
       
        <Image src={produto2} width={520} height={480} alt=""/>
        <footer>
          <strong> Game X</strong>
          <span> R$ 9999,99</span>
        </footer>
      </Products>
      <Products className="keen-slider__slide" >
       
        <Image src={produto3} width={520} height={480} alt=""/>
        <footer>
          <strong> Game X</strong>
          <span> R$ 9999,99</span>
        </footer>
      </Products>
      <Products className="keen-slider__slide" >
       
        <Image src={produto3} width={520} height={480} alt=""/>
        <footer>
          <strong> Game X</strong>
          <span> R$ 9999,99</span>
        </footer>
      </Products>
    </HomeContainer>
  )
}

export const getSercerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list(
  {expand: ['data.defaul_price']
  } )
  
  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price
    return{
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: product.default_price,
  }})

  return {
    props: {
      list:[1,2,3]
    }
  }
}
