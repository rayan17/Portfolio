import Head from 'next/head';
import LeftColumn from './components/LeftColumn';
import MiddleColumn from './components/MiddleColumn';
import RightColumn from './components/RightColumn';

async function getData() {
  const res = await fetch('http://localhost:3000/api/portfolio', { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Portfolio = async () => {

  const data = await getData()

  console.log('data', data)
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className="flex bg-white">
        <LeftColumn item={data[0]} />
        <MiddleColumn portfolioItems={data} />
        <RightColumn portfolioItems={data} />
      </main>
    </div>
  );
};

export default Portfolio;


