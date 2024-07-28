import Image from "next/image";
import Link from "next/link";

const TileItem = (props: any) => {
  const {item} = props;
  return (
    <li
      key={item.title}
      className="bg-white p-4 rounded-lg mb-10 hover:scale-110 transition-all duration-500 cursor-pointer "
      
    >
      <Link href={"/"}>
      <div className="rounded-lg">
      <Image
        width={500}
        height={600}
        src={item.image}
        alt={item.title}
        className="w-full h-80 object-cover rounded-lg"
      />
      </div>
      
      <div className="p-4">
        <h2 className="font-sans italic text-lg font-bold">{item.title}</h2>
        <p className="text-gray-600">{item.description}</p>
        <a
          href={item.link}
          className="text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
      </Link>
    </li>
  );
};

export default TileItem;
