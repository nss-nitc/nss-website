export default function Hero() {
  return (
    <div className="bg-[#F9F3E6]">
      <div className="flex flex-col bg-[#F9F3E6] h-[80vh] relative">
        <img
          className="absolute bottom-0 right-0 max-w-1/2"
          src="images/HeroImage.svg"
          alt="Hero"
        />
        <div className="bg-[#1F293E] w-1/3 absolute h-[80vh] "></div>
        <div className="text-[15rem] font-black font-mom text-[#F9F3E6] z-10 leading-none absolute bottom-0 ">
          <h1 className="-mb-9">
            "NOT <span className="text-[#1F293E] ">ME </span>
          </h1>
          <h1 className="-mb-9">
            &nbsp; BUT
            <span className="text-[#1F293E] [text-shadow:_0px_0px_25px_rgb(249_243_238/_1)]">
              {" "}
              YOU"
            </span>
          </h1>
        </div>
      </div>
      <div className="flex h-[40vh] font-mom">
        <div className="w-1/3 relative group overflow-hidden">
          <img
            src="images/LetsTeachLink.svg"
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-10 left-5 text-4xl font-semibold text-white z-10">
            <img src="images/book icon.svg" className="my-7"></img>
            Lets Teach
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="w-1/3 relative group overflow-hidden">
          <img
            src="images/BloodForumLink.svg"
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-[#E0202B] bg-opacity-30"></div>
          <div className="absolute bottom-10 left-5 text-4xl font-semibold text-white z-10">
            <img src="images/blood icon.svg" className="my-7"></img>
            Blood Forum
          </div>
        </div>
        <div className="w-1/3 relative group overflow-hidden">
          <img
            src="images/EventsLink.svg"
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute bottom-10 left-5 text-4xl font-semibold text-white z-10">
            our events
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full font-poppins">
        <div className="w-[85vw] bg-[#1F293E] text-white px-16 py-8 rounded-3xl my-10">
          <h1 className="text-center text-6xl font-semibold mb-5">About Us</h1>
          <p className="text-3xl ">
            The National Service Scheme (NSS) is a vibrant community of student
            volunteers at NIT Calicut, committed to addressing societal needs
            and making a meaningful difference in the lives of those who need it
            most.
          </p>
        </div>
        <div className=" w-[85vw]  bg-[#C0C9DB] text-black px-16 py-8 rounded-3xl ">
          <h1 className="text-center text-6xl font-semibold mb-5">
            What we do
          </h1>
          <p className="text-3xl ">
            Our mission is to foster a culture of social responsibility,
            empathy, and community engagement among our students, empowering
            them to become active contributors to society.
          </p>
        </div>
      </div>
    </div>
  );
}