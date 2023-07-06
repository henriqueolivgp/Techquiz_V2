import Banner from "../components/Banner";
import HomeContent from "../components/HomeContent";

function Home() {

  return (
    <>
      <Banner />
      <div className="container mx-auto ">
        <div className="content mx-auto">
          <HomeContent />
        </div>
      </div>
    </>
  )
}

export default Home;