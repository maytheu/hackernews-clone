import Footer from "./header_footer/Footer";
import Header from "./header_footer/Header";
import News from "./views/News";
import Trending from "./views/Trending";

function Home() {
  //Landing page
  return (
    <>
      <Header />
      <News />
      <Trending />
      <Footer />
    </>
  );
}

export default Home;
