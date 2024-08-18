import AlbumItem from "./AlbumItem";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import SongItem from "./SongItem";

function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              image={item.image}
              desc={item.desc} 
              name={item.name}
              id={item.id}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Featured Charts</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              image={item.image}
              desc={item.desc}
              name={item.name}
              id={item.id}
              key={index}
            />
          ))}
        </div>
      </div>
      
    </>
  );
}
export default DisplayHome;
