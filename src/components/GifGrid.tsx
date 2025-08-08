import { fetchGifs } from "@/lib/giphy";
import React from "react";

interface Props {
  query: string;
}

const GifGrid: React.FC<Props> = ({ query }) => {
  const [gifs, setGifs] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getGifs = async () => {
      setLoading(true);

      try {
        const res = await fetchGifs(query);
        setGifs(res);
      } catch (error) {
        console.log("Error fetching GIFs", error);
      } finally {
        setLoading(false);
      }
    };

    getGifs();
  }, [query]);

  if (loading) return <p className="text-center text-lg py-8 text-gray-500">Loading GIFs...</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
      {gifs.map((gif) => (
        <div
          key={gif.id}
          className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white"
        >
          <img
            src={gif.images.fixed_height.url}
            alt={gif.title}
            className="w-full h-48 object-cover transition-transform duration-200 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default GifGrid;
