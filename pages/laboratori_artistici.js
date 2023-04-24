import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Products from '/components/Products'

import { getDatiArticoli } from '/lib/articoli'

// I punti di forza


let prodotti = [
  {
    title: "Eco Art",
    category: "",
    description: "Nuove fantastiche creazioni, usando materiali semplici (Numero ragazzi: 20 --- 1^ ora: Medie; 2^ ora: Elementari)",
    immagineUrl: "/images/laboratori_artistici/ecoart.jpg",
  },
  {
    title: "String Art",
    category: "",
    description: "Cosa si può fare con una tavoletta di legno, dei chiodi e fili colorati? magnifiche opere d'arte! (1ª ora elementari / 2ª ora elementari)",
    immagineUrl: "/images/laboratori_artistici/stringart.jpg",
  },
  {
    title: "Informatica 1 - avanzata",
    category: "",
    description: "(Solo medie)",
    immagineUrl: "/images/laboratori_artistici/informatica.jpg",
  },
  {
    title: "Multimedia",
    category: "",
    description: "(Solo medie)",
    immagineUrl: "/images/laboratori_artistici/multimedia.jpg",
  },
  {
    title: "Giochi da tavolo",
    category: "",
    description: "(1^ ora: Medie; 2^ ora: Elementari)",
    immagineUrl: "/images/laboratori_artistici/giochiDaTavolo.jpg",
  },
  {
    title: "Impianti elettrici",
    category: "",
    description: "(Solo Medie)",
    immagineUrl: "/images/laboratori_artistici/elettrico.jpg",
  },
  {
    title: "Pollice verde",
    category: "",
    description: "(1^ ora: Medie; 2^ ora: Elementari)",
    immagineUrl: "/images/laboratori_artistici/polliceverde.jpg",
  },
  {
    title: "Tutto bici",
    category: "",
    description: "(1^ ora: Medie; 2^ ora: Elementari)",
    immagineUrl: "/images/laboratori_artistici/tuttobici.jpg",
  },
]

export default function Home({ datiArticoli }) {
  return (
    <Layout>

      <LandingHero
        opacity={0.5}
        title="Laboratori artistici"
        description="Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!"
        buttonUrl='john pork'
        buttonText="Guarda il video"
        imageUrl="/images/laboratori_artistici/pinocchio_viene_trapanato.png"
      />    
      <Products
        title="I prodotti"
        description="Un'ampia scelta di indirizzi professionali: scopri quello che ti accende di più!"
        cardWidth={4}
        products={prodotti}
      />

    </Layout>
  )
}

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli()
  return {
    props: {
      datiArticoli,
    },
  }
}