export default function Banner() {
  return (
    <section className="banner  bg-violet-100 h-96 md:relative sm:relative xs:relative">
      <div className="Text-Button flex flex-col xl:flex-row md:relative sm:relative xs:relative md:z-10 sm:z-10 xs:z-10" >
        <div className=" w-full xl:w-full overflow-hidden h-96 xxl:relative xl:relative md:absolute sm:absolute md:inset-0 md:z-0 sm:inset-0 sm:z-0 xs:inset-0 xs:z-0">
          <img className="w-full xxl:blur-none xl:blur-none lg:blur-sm md:blur-sm sm:blur-sm xs:blur-sm h-full object-cover" src="/src/assets/banner.jpg" alt="banner" />
        </div>
      </div>
    </section>
  );
}