import Logos from '/components/Logos'
import Footer from '/components/Footer'

export const siteName = "Regalandia"
export const siteTitle = "Regalandia - San Donà di Piave"
export const siteDescription = "idee regalo"

/*export const menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Privacy', url: '/privacy' },
    { title: 'Trasparenza', url: '/trasparenza' },
] */

/*export const header = <Logos
    logoUrl="/images/regalandia/logo.png"
    
    color="#FFFFFF"
/>
*/
const menuFooter = [
    { title: 'Informatico', url: '/informatico' },
    { title: 'Energie', url: '/energie' },
    { title: 'Elettrico', url: '/elettrico' },
    { title: 'Trasparenza', url: '/trasparenza' },
]

const socials = [
    { title: 'Facebook', imageUrl: 'https://archive.donboscosandona.it/img/ck/1cffc9d197e15de1f72a89477cc75e56073980b0.png', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', imageUrl: 'https:///archive.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', imageUrl: 'https://archive.donboscosandona.it/img/ck/36189d32ee9d4be0a612c292a430106948c85bfc.png', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', imageUrl: 'https://archive.donboscosandona.it/img/ck/55ed185e94be2aa2a1d854487273a4d139e5475f.png', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
]

let images = [
    { title: '', imageUrl: 'https://source.unsplash.com/random', },
    { title: '', imageUrl: 'https://source.unsplash.com/random', },
    { title: '', imageUrl: 'https://source.unsplash.com/random', },
    { title: '', imageUrl: 'https://source.unsplash.com/random', },
]

export const footer = <Footer
    imageUrl="https://source.unsplash.com/random"
    color="#272727"
    opacitycolor="1"
    opacity={1}
    title1="About Us"
    description1="Il sito di idee regalo è un'esperienza online pensata per chiunque voglia trovare il regalo perfetto per ogni occasione. Qui troverai una vasta selezione di idee regalo per compleanni, anniversari, festività o semplicemente per mostrare il tuo affetto a qualcuno di speciale. Sfoglia la nostra raccolta di prodotti unici e divertenti, dalle esperienze emozionanti ai gadget tecnologici all'ultimo grido. Il nostro team di esperti di regali ha curato una selezione di articoli dalle migliori marche e di produttori artigianali, per soddisfare qualsiasi esigenza e qualunque budget. In pochi clic, potrai trovare e acquistare il regalo perfetto e farlo consegnare direttamente all'indirizzo del destinatario. Siamo qui per aiutarti a rendere le tue occasioni speciali ancora più memorabili e siamo sicuri che troverai sul nostro sito l'ispirazione per il regalo perfetto!
La prima colonna sarà destinata a un testo descrittivo, la seconda ai social, la terza a un menù di navigazione grafico (che porta ad es. ai settori).
"
    title2="Social Feed"
    socials={socials}
    title3=""
    
    menu={menuFooter}
    copyright="Copyright (C) 2023 9dreams Agency."
/>