import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Products from "/components/Products";
import Team from "/components/Team";
import Paragraph from "/components/Paragraph";

let prodotti = [
    {
        title: "QUADRO SPOTIFY PERSONALIZZATO",
        category: "14.99€",
        description:
            "",
        immagineUrl:
            "/images/regalandia/1prodotto.jpg",
        url: "/",
    },
    {
        title: "TAZZA PERSONALIZZABILE",
        category: "9.99€",
        description:
            "",
        immagineUrl:
            "/images/regalandia/2prodotto.jpg",
        url: "/",
    },
    {
        title: "PORTACHIAVI SERIE TV PERSONALIZZATO",
        category: "4.99€",
        description:
            "",
        immagineUrl:
            "/images/regalandia/3prodotto.jpg",
        url: "/",
    },
    {
        title: "ORECCHINI PERSONALIZZATI",
        category: "19.99€",
        description:
            "",
        immagineUrl:
            "/images/regalandia/4prodotto.jpg",
        url: "/",
    },
];


let prodotti2 = [
    {
        title: "",
        category: "",
        description:
            "",
        immagineUrl:
            "/images/regalandia/categoria1.JPG",
        url: "/",
    },
    {
        title: "",
        category: "",
        description:
            "",
        immagineUrl:
            "/images/regalandia/categoria2.JPG",
        url: "/",
    },
    {
        title: "",
        category: "",
        description:
            "",
        immagineUrl:
            "/images/regalandia/categoria3.JPG",
        url: "/",
    },
    {
        title: "",
        category: "",
        description:
            "",
        immagineUrl:
            "/images/regalandia/categoria4.JPG",
        url: "/",
    },
];

let members = [
    {
        name: "Cura personale",
        imageUrl:
            "/images/regalandia/cura.jpg",

    },
    {
        name: "Giardino",
        imageUrl:
            "/images/regalandia/pianta.jpg",
    },
    {
        name: "Gaming",
        imageUrl:
            "/images/regalandia/gaming.jpg",
    },
    {
        name: "Viaggio",
        imageUrl:
            "/images/regalandia/viaggio.jpg",
    },
];

export default function Home({ datiArticoli }) {
    return (
        <Layout>
            <LandingHero
                opacity={0.5}
                title="Regalandia"
                description="Regala con originalità, scegli le idee regalo del nostro sito!"
                buttonText="Guarda il video"
                imageUrl="/images/regalandia/landing.png"
                logo="/images/regalandia/logo.png"
                height="100"
            />
            <Products
                title="Prodotti da sogno!"

                cardWidth={3}
                products={prodotti}
            />
            <Products
                title="Le TOP Categorie"

                cardWidth={3}
                products={prodotti2}
            />
            <Team
                title="Categorie più popolari"
                description=""
                members={members}
                cardWidth={3}
            />
            <Paragraph
        backgroundImageUrl="/images/regalandia/sconto.png"
        backgroundColor="purple"
        opacity={0.5}
        blur="0.2rem"
        color="white"
        title="40% SCONTO SU TUTTI I PRODOTTI QUESTO WEEKEND!"
      >
        Offerta imperdibile! Acquista i tuoi prodotti preferiti con uno sconto del 40%! Una grande occasione per risparmiare senza sacrificare la qualità. Approfitta subito di questa promozione e scegli tra una vasta gamma di prodotti a prezzi scontati. Non farti scappare questa opportunità!
      </Paragraph>
        </Layout>
        
    );
}

