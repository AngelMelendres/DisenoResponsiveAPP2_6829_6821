import React from "react";
import { Carousel } from "@material-tailwind/react";

const Main = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        {/* CARRUSEL */}
        <div>
          <Carousel className="rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-96 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-96 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-96 w-full object-cover"
            />
          </Carousel>
          <div className="text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Explore
            </button>
          </div>
        </div>

        <div className="uppercase text-center mt-5 mb-10">
          <h1>Discover the magic country</h1>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="shadow rounded overflow-hidden">
            <img
              className="w-full"
              src="https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705622400&semt=ais"
              alt="Image 1"
            />
          </div>
          <div className="shadow rounded overflow-hidden">
            <img
              className="w-full"
              src="https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705622400&semt=ais"
              alt="Image 2"
            />
          </div>
          <div className="shadow rounded overflow-hidden">
            <img
              className="w-full"
              src="https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705622400&semt=ais"
              alt="Image 3"
            />
          </div>
          <div className="shadow rounded overflow-hidden">
            <img
              className="w-full"
              src="https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705622400&semt=ais"
              alt="Image 4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
