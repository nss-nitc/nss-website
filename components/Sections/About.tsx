import AboutCard from "../Cards/AboutCard";

export default function About() {
  return (
    <>
      <div className="md:mx-[5%] my-4 flex flex-col">
        <h2 className="my-8 text-[7vw] md:text-[5vw] lg:text-[3vw] font-bold">
          About <span className="text-primary">Us</span>
        </h2>
        <div className="flex-grow flex flex-col gap-4">
          <div className="my-2 flex flex-col md:flex-row gap-4">
            <div className="text-secondary">
              <h3 className="text-[5vw] md:text-[3.2vw] lg:text-[1.6vw] text-nowrap">
                Welcome to
              </h3>
              <h4 className="tracking-wide text-nowrap font-bold">
                National Service Scheme
              </h4>
            </div>

            <p className="px-4 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              eveniet optio iste commodi, repudiandae obcaecati illum aliquid
              corrupti laudantium nihil fugiat corporis similique accusamus sunt
              quibusdam aliquam dolore at possimus sit vero distinctio veritatis
              consequatur excepturi dolores? Explicabo cum laboriosam quia
              necessitatibus veritatis, recusandae debitis quo deserunt corporis
              iure. Quo consequatur harum earum eius quasi optio id itaque autem
              in aperiam, dignissimos dolores maiores laborum neque, veniam
              vitae ut voluptates sunt nisi doloremque. Fuga beatae amet aperiam
              est perferendis reprehenderit esse dicta odit provident? Doloribus
              quibusdam temporibus quo? Illo velit omnis odit quae in explicabo
              necessitatibus illum, repellat laborum aut?
            </p>
          </div>
          <div className="px-4 py-2 flex-grow grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="max-w-[500px]">
              <AboutCard title="Upcoming Events" />
            </div>
            <div className="max-w-[500px]">
              <AboutCard title="Latest News" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
