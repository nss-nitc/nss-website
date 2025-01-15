export default function Events() {
  return (
    <section className="flex flex-col bg-[#F9F3E6]">
      <div className="flex w-screen justify-center py-10">
        <h1 className="font-extrabold text-[50px] Poppins"> Our Events</h1>
      </div>
      <div className="flex w-screen justify-between ">
        <div className="flex flex-col w-[55%] justify-center px-8 ps-14 py-8 my-5 gap-2 bg-[#57A2D8] bg-opacity-[54%] rounded-e-xl">
          <h1 className="Poppins font-bold text-[26px] ">Sneharagam</h1>
          <p className="Poppins text-[26px] ">
            Promoting Inclusivity and Diversity, Sneharagam is an initiative
            that celebrates the talents of children with special needs. We
            organize events, workshops, and activities that promote inclusivity,
            diversity, and social acceptance.
          </p>
        </div>
        <div className="flex w-[40%] justify-center items-center my-5 bg-[#57A2D8] rounded-s-xl">
          <img className="" src="" alt="event" />
        </div>
      </div>
      <div className="flex w-screen justify-between bg-[#F9F3E6] ">
        <div className="flex w-[40%] justify-center items-center my-5 bg-[#57A2D8] rounded-e-xl">
          <img src="../../public/images/event-image.svg" alt="event" />
        </div>
        <div className="flex flex-col w-[55%] justify-center px-8 ps-14 py-8 my-5 gap-2 bg-[#57A2D8] bg-opacity-[54%] rounded-s-xl">
          <h1 className="Poppins font-bold text-[26px] ">Sneharagam</h1>
          <p className="Poppins text-[26px] ">
            Promoting Inclusivity and Diversity, Sneharagam is an initiative
            that celebrates the talents of children with special needs. We
            organize events, workshops, and activities that promote inclusivity,
            diversity, and social acceptance.
          </p>
        </div>
      </div>
    </section>
  );
}
