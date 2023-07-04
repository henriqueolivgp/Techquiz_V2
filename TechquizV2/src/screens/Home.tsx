import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {

  return (
    <>
      <Navbar />
      <section className="banner  bg-violet-100 h-96 md:relative sm:relative xs:relative">
        <div className="Text-Button flex flex-col xl:flex-row md:relative sm:relative xs:relative md:z-10 sm:z-10 xs:z-10" >
          <div className=" xl-w-[853px] lg-w-[853px] h-96 p-6 xl:w-auto xl:h-96 sm:z-10 xs:z-10">
            <img className="h-20" src="/src/assets/logo/TechquizBlack.png" alt="logo" />
            <p className="mt-5 sm:font-bold xs:font-bold">Com o Techquiz pode avaliar o  seu conhecimento e saber o seu nível em todas as diversas áreas de informática.</p>
            <button type="button" className="h-12 mt-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Começar agora!</button>
          </div>
          <div className=" w-full xl:w-full overflow-hidden h-96 xxl:relative xl:relative md:absolute sm:absolute md:inset-0 md:z-0 sm:inset-0 sm:z-0 xs:inset-0 xs:z-0">
            <img className="w-full xxl:blur-none xl:blur-none lg:blur-sm md:blur-sm sm:blur-sm xs:blur-sm h-full object-cover" src="/src/assets/banner.jpg" alt="banner" />
          </div>
        </div>
      </section>

      <div className="container mx-auto ">
        <div className="content mx-auto">
          <div className="xl:columns-3 lg:columns-3 mt-10 mb-10 md:columns-1 ">
            <div className="max-w-sm mb-10 bg-gray-100 border border-black-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="flex mt-5 justify-center" href="#">
                <img className="rounded-t-lg object-scale-down w-60 " src="/src/assets/home-img/ConceitosBasicos.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm mb-10 bg-gray-100 border border-black-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="flex mt-5 justify-center" href="#">
                <img className="rounded-t-lg object-scale-down w-60 " src="/src/assets/home-img/Programacao.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm mb-10 bg-gray-100 border border-black-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="flex mt-5 justify-center" href="#">
                <img className="rounded-t-lg object-scale-down w-60 " src="/src/assets/home-img/AdministracaoSistemasInformaticos.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm mb-10 bg-gray-100 border border-black-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="flex mt-5 justify-center" href="#">
                <img className="rounded-t-lg object-scale-down w-60 " src="/src/assets/home-img/ConceitosBasicos.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm mb-10 bg-gray-100 border border-black-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="flex mt-5 justify-center" href="#">
                <img className="rounded-t-lg object-scale-down w-60 " src="/src/assets/home-img/RedesComputadores.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm bg-gray-100 border border-black-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="flex mt-5 justify-center" href="#">
                <img className="rounded-t-lg object-scale-down w-60 " src="/src/assets/home-img/ConceitosBasicos.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;