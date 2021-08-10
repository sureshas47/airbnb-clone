import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MidiumCards from "../components/MidiumCards";
import SmallCards from "../components/SmallCards";


export default function Home({exploreData, cardsData}) {
  return (
    <div >
      <Head>
        <title>air-bnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* banner */}
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='font-semibold  pb-5 text-4xl '>Explore nearby</h2>
          {/* cards from api */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            // map with destructure 
            exploreData?.map(({img, distance, location}) =>(
              <SmallCards 
              key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))
          }
          </div>
        </section>

        <section className='pt-6'>
          <h2 className='font-semibold py-8 text-4xl'>Live anywhere</h2>
         
         <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {
              // map with destructure 
              cardsData?.map(({img, title})=>(
                <MidiumCards
                  key={img}
                    img={img}
                    title={title}
                />
              ))
            }
         </div>
        </section>

        <section>
            <LargeCard
            img='https://links.papareact.com/4cj'
            title='The Greatest Outdoor'
            description='Wishlists Curated by Airbnb'
            buttonText='Get Inspired'
            />
        </section>
      </main>

         <div className=''>
         <Footer/>
         </div>
          
    </div>
  );
}

  export async function getStaticProps(){
    const exploreData= await fetch('https://links.papareact.com/pyp')
    .then(
      (res) => res.json()
    )

    const cardsData = await fetch('https://links.papareact.com/zp1')
    .then(
      (res)=>res.json()
      )
   
    return {
      props:{
        // exploreData:exploreData ==>distructuring
        exploreData,
        cardsData
      }
    }
}
 
