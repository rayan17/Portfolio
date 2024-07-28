import Image from "next/image";

const LeftColumn = (props: any) => {
  const {item} = props;
  return (
    <div className="w-1/3 h-screen bg-white shadow-md p-4">
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <Image
        width={500}
        height={400}
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover mb 10"
      />
      <p className="text-1xl italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
};

export default LeftColumn;