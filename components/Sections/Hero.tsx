import NavBar from "../NavBar/NavBar";

export default function Hero() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex justify-center items-center">
          <div className="p-2">
            <p className="text-[4vw] md:text-[2.25vw] lg:text-[1.5vw]">
              WELCOME TO
            </p>
            <h1 className="text-[6vw] md:text-[4.5vw] lg:text-[3vw] font-semibold text-red-700">
              NATIONAL SERVICE SCHEME
            </h1>
            <p className="text-[4vw] md:text-[2.25vw] lg:text-[1.5vw] tracking-wider">
              NITC
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
