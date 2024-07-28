import Image from "next/image";
import TileItem from "../tileItem";

const MiddleColumn = (props: any) => {
  const {portfolioItems} = props;
  return (
    <div
    className="middle-col w-1/3 p-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)] group">
      <ul className="md:justify-start [&_li]:my-8 [&_img]:max-w-none animate-infinite-scroll-up group-hover:pause">
      {portfolioItems.map((item: any) => (
        <TileItem item={item}/>
      ))}
      </ul>
      <ul className="md:justify-start [&_li]:my-8 [&_img]:max-w-none animate-infinite-scroll-up group-hover:pause" aria-hidden="true">
      {portfolioItems.map((item: any) => (
        <TileItem item={item}/>
      ))}
      </ul>
    </div>
  );
};

export default MiddleColumn;