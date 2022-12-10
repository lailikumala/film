import CardMovie from '../components/CardMovie';
import Layout from '../components/Layout'
import { HomeProps } from '../type';
import { KEY, URI } from '../utils';

const Home = (props: HomeProps) => {
  const { dataMovie, dataMovie2 } = props;

  return (
    <Layout pageTitle="Home Page">
      {dataMovie.map((movie) => (
        <CardMovie dataMovie={movie} key={movie.id} />
      ))}
    </Layout>
  )
}
export default Home

export async function getServerSideProps() {
  const res = await fetch(`${URI}/popular?api_key=${KEY}&language=en-US&page=1`);
  const data = await res.json();
  const dataMovie = data.results

  return {
    props: {
      dataMovie,
    },
  };
}