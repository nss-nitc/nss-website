import Link from "next/link";

interface sectionsProps {
  title: string;
  url: string;
}

const sections: sectionsProps[] = [
  { title: "HOME", url: "#home" },
  { title: "ABOUT US", url: "#about" },
  { title: "EVENTS", url: "#events" },
  { title: "SERVICES", url: "#services" },
  { title: "CONTACT", url: "#contact" },
];

export default function NavBar() {
  return (
    <>
      <nav className="p-3 hidden md:flex flex-row justify-center items-center">
        <ul className="flex justify-center items-center gap-4">
          {sections.map((section) => (
            <Link className="px-2 py-1" href={section.url}>
              {section.title}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
