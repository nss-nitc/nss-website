import { eventsList } from "./EventsData";

export default function Events() {
  const events = eventsList.slice(0, 5);
  return (
    <div className="flex flex-col bg-[#F9F3E6] overflow-hidden">
      <div className="flex w-screen justify-center py-5 md:py-10">
        <h1 className="font-extrabold text-[30px] md:text-[50px] Poppins">
          Our Events
        </h1>
      </div>
      {events.map((event, index) => {
        if (index % 2 === 0) {
          return (
            <div className="flex flex-col md:flex-row py-5 justify-between ">
              <div className="flex flex-col md:mx-0 mx-10 rounded-t-3xl md:rounded-l-none w-fit md:w-[55%] justify-center px-8 md:ps-14 py-8 md:my-5 gap-2 bg-[#57A2D8] bg-opacity-[54%] md:rounded-e-3xl">
                <h1 className="Poppins font-bold text-[25px] md:text-[30px] ">
                  {event.name}
                </h1>
                <p className="Poppins text-[20px] lg:text-[26px] ">
                  {event.paragraph}
                </p>
              </div>
              <div className="flex w-screen md:w-[40%] px-10 sm:px-0 justify-center items-center mb-6 md:my-5 ">
                <img
                  className="w-full h-fit md:mx-0 mx-10 rounded-b-3xl md:rounded-r-none md:rounded-s-3xl"
                  src={event.imageUrl}
                  alt={event.imageAlt}
                />
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex flex-col md:flex-row justify-between">
              <div className="hidden w-[40%] justify-center items-center md:my-5 md:flex">
                <img
                  className=" w-full h-fit md:mx-0 mx-10 md:rounded-e-3xl"
                  src={event.imageUrl}
                  alt={event.imageAlt}
                />
              </div>
              <div className="flex flex-col w-fit md:mx-0 mx-10 rounded-t-3xl md:rounded-r-none md:w-[55%] justify-center px-8 md:ps-14 py-8 md:my-5 gap-2 bg-[#57A2D8] bg-opacity-[54%] md:rounded-s-3xl ">
                <h1 className="Poppins font-bold text-[26px] md:text-[30px] ">
                  {event.name}
                </h1>
                <p className="Poppins text-[20px] lg:text-[26px] ">
                  {event.paragraph}
                </p>
              </div>
              <div className="flex w-screen px-10 sm:px-0 justify-center items-center mb-6 md:hidden">
                <img
                  className=" w-full h-fit md:mx-0 mx-10 rounded-b-3xl"
                  src={event.imageUrl}
                  alt={event.imageAlt}
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
