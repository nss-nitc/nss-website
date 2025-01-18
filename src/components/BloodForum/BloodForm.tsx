import Link from "next/link";
import DonateItems from "./DonateItems";
import Form from "./Form";

export default function BloodForm() {
  return (
    <div className="flex flex-col overflow-hidden">
      <nav className="flex w-screen justify-center h-40 bg-[#C67979] ">
        <div className="md:flex w-[20%] hidden "></div>
        <div className="flex items-center justify-center w-screen md:w-[60%] px-5">
          <img width={120} height={120} src="images/NSS-LOGO.png" alt="logo" />
          <div className="flex flex-col justify-center px-2 md:px-5">
            <h1 className="flex text-wrap uppercase text-white text-sm md:text-xl font-bold">
              NSS NIT CALICUT
            </h1>
            <h1 className="flex text-wrap uppercase text-white text-2xl md:text-5xl font-bold">
              Blood Forum
            </h1>
          </div>
        </div>
        <div className="md:flex items-center justify-end w-[20%] px-10  hidden">
          <Link
            className="px-5 py-1 rounded-md bg-[#8D5555] hover:bg-[#623b3b] text-white "
            href={"/login"}
          >
            login
          </Link>
        </div>
      </nav>
      <div className="flex flex-col w-screen items-center py-20 gap-10 md:gap-20 bg-[#F9F3E6]">
        <div className="flex w-[80%] md:w-[60%] lg:w-[40%] rounded-2xl bg-[#C67979] shadow-2xl">
          <Form />
        </div>
        <div className="flex flex-col w-[80%] py-10 h-fit items-center  rounded-2xl bg-[#FFFF] shadow-2xl">
          <h1 className="flex pb-4 w-full md:pb-10 text-3xl lg:text-5xl justify-center text-[#8D5555] Poppins font-bold">
            Why Donate Blood?
          </h1>
          <div className="flex flex-col lg:flex-row w-full Poppins font-bold text-xl text-[#8D5555] ">
            <div className="flex justify-center">
              <DonateItems
                item={{
                  imgUrl: "./images/icon-one.svg",
                  imgAlt: "item",
                  para: " One donation can save up to three lives.",
                }}
              />
            </div>
            <div className="justify-center flex">
              <DonateItems
                item={{
                  imgUrl: "./images/icon-two.svg",
                  imgAlt: "item",
                  para: "Increases cardio vascular health",
                }}
              />
            </div>
            <div className="justify-center flex">
              <DonateItems
                item={{
                  imgUrl: "./images/icon-three.svg",
                  imgAlt: "item",
                  para: "  Free Health Checkup",
                }}
              />
            </div>
            <div className="justify-center flex">
              <DonateItems
                item={{
                  imgUrl: "./images/icon-four.svg",
                  imgAlt: "item",
                  para: " Stimulates Blood Cell Production",
                }}
              />
            </div>
            <div className="justify-center flex">
              <DonateItems
                item={{
                  imgUrl: "./images/icon-five.svg",
                  imgAlt: "item",
                  para: " Community Contribution",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-[80%] py-10 px-10 h-fit lg:justify-between items-center rounded-2xl bg-[#D49B9B] shadow-2xl ">
          <h1 className="  text-white text-3xl md:text-5xl font-bold pb-4 md:pb-10 w-full lg:w-[15%] flex lg:hidden">
            Who can donate?
          </h1>
          <ul className="list-disc Poppins font-bold text-xl md:text-2xl text-white w-[95%] md:w-[80%]">
            <li className="pb-2">
              ⁠Healthy individuals aged 18-65 years with a minimum weight of
              50kg weight
            </li>
            <li className="pb-2">⁠Haemoglobin level of 12.5 g/dL or higher</li>
            <li className="pb-2">
              ⁠No recent illness, infection, or chronic conditions
            </li>
            <li>⁠No alcohol consumption in the past 24 hours</li>
          </ul>
          <h1 className="text-white text-5xl font-bold w-[15%] hidden lg:flex">
            Who can donate?
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-[80%] py-10 px-10 h-fit justify-between items-center rounded-2xl bg-[#8D5555] shadow-2xl ">
          <h1 className="text-white text-3xl lg:text-5xl font-bold pb-4 md:pb-10 w-full  lg:w-[15%]">
            Who Can’t Donate?
          </h1>
          <ul className="list-disc Poppins font-bold text-xl md:text-2xl text-white w-[95%] md:w-[80%]">
            <li className="pb-2">
              People with chronic illness (like cancer, heart disease or
              anemia)and blood borne diseases
            </li>
            <li className="pb-2">Pregnant or breastfeeding women</li>
            <li className="pb-2">
              Women during the time of menstruation are not encouraged
            </li>
            <li className="pb-2">
              Individuals who have undergone surgeries or have received blood
              transfusions in the last 6 months
            </li>
            <li>Received tattoos or piercings within the past 6 months</li>
          </ul>
        </div>
      </div>
      <footer className="flex flex-col w-screen h-fit gap-20 bg-[#E4C6C6] py-10">
        <h1 className="flex justify-center font-bold text-3xl md:text-5xl text-black">
          Our Collaborators
        </h1>
        <div className="flex flex-wrap md:flex-row justify-center px-10 md:px-20 gap-5 md:gap-10">
          <img src="images/collaborators.svg" alt="collaborators" />
          <img src="images/collaborators.svg" alt="collaborators" />
          <img src="images/collaborators.svg" alt="collaborators" />
          <img src="images/collaborators.svg" alt="collaborators" />
        </div>
      </footer>
    </div>
  );
}
