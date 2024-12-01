const events = [
  { date: "21 December 2024", news: "Lorem ipsum dolor" },
  { date: "21 December 2024", news: "Lorem ipsum dolor" },
  { date: "21 December 2024", news: "Lorem ipsum dolor" },
];

interface AboutCardProps {
  title?: string;
}

export default function AboutCard({ title }: AboutCardProps) {
  return (
    <>
      <div className="border border-gray-300">
        {title && (
          <h3 className="px-3 py-2 bg-blue-900 text-[4.5vw] md:text-[3vw] lg:text-[1.5vw] text-white">
            {title}
          </h3>
        )}
        <ul className="p-4 flex flex-col gap-2">
          {events.map((event) => (
            <>
              <div>
                <p className="text-gray-500">{event.date}</p>
                <p>{event.news}</p>
              </div>
              <hr />
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
