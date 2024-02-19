import Nabvar from '../../components/Navbar/Nabvar';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';

import './Home.css';
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo';
import Footer from '../../components/Footer/Footer';
import NextButton from '../../components/NextButton/NextButton';

const Home = () => {
  return (
    <Layout>
      <Nabvar/>
      <div className="home card-container h-[880px] flex justify-center items-center">
          <Card />
          <PersonalInfo />
          <NextButton />
        </div>
      <Footer />
    </Layout>
  )
}
export default Home