import GifGrid from '@/components/GifGrid';
import SearchBar from '@/components/SearchBar';
import React from 'react';

const Home = () => {
    const [query, setQuery] = React.useState("Happy");

    return (
        <div className="min-h-screen py-10">
            <div className="w-full max-w-4xl mx-auto text-center space-y-8 p-6">
                <h1
                    className="
                    text-6xl font-bold text-gray-100 drop-shadow-lg mb-4 tracking-tight
                    transition duration-300 ease-in-out  hover:text-transparent hover:bg-gradient-to-r 
                    hover:from-white
                    hover:bg-clip-text
                    hover:scale-105">
                    SnapGIF
                </h1>


                <p className="text-lg text-gray-500 mb-6">
                    Instantly search and share trending GIFs!
                </p>
                <SearchBar query={query} setQuery={setQuery} />
                <GifGrid query={query} />
            </div>
        </div>
    );
};

export default Home;
