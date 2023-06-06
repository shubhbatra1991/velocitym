import Link from "next/link";

function HeroPages({ name }) {
  return (
    <>
      <section className="w-full h-[41rem] bg-heropage bg-cover bg-center bg-no-repeat relative" >
        <div className="w-full h-full absolute top-0 right-0 bg-white bg-opacity-95"></div>
        <div className="container">
          <div className="flex flex-col z-30 relative w-full h-[41rem] justify-center text-black">
            <h3 className="text-3xl mb-1">{name}</h3>
            <p className="text-lg font-semibold">
              <Link 
                href="/"
                className="text-black underline transition-colors duration-200 hover:text-orange"
            >
                Home
            </Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPages;