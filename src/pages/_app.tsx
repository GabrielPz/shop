
import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";
import Image from 'next/image'

globalStyles();
// Tudo que for colocado dentro do App se torna algo global que é renderizado em todas as pags
export default function App({ Component, pageProps }: AppProps) {

  

  return(
  <Container>
    <Header>
      <Image src={logoImg} alt="" width={130} height={52}/>
      
    </Header>
    
    <Component {...pageProps} />
  </Container>
  
  )
    

  
}
