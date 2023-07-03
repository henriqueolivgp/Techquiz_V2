import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {


  return (
    <>
      <Navbar />
      <section className="banner  bg-violet-100 h-96">
        <div className=" flex flex-col xl:flex-row" >
          <div className=" w-[853px] h-96 p-6 xl:w-auto xl:h-96 ">
            <img className="h-20" src="/src/assets/TechquizBlack.png" alt="" />
            <p className="mt-5">Com o Techquiz pode avaliar o  seu conhecimento e saber o seu nível em todas as diversas áreas de informática.</p>
            <button type="button" className="h-12 mt-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Começar agora!</button>
          </div>
          <div className=" w-full xl:w-full overflow-hidden h-96">
            <img className="w-full h-full object-cover" src="/src/assets/banner.jpg" alt="banner" />
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        <div className="content">

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;