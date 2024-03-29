import React from "react";
import Work from "./work/Work";
import mNotes from "../assets/mNotes.png";
import e_shop from "../assets/e_shop.png";
import imageGallery from "../assets/image-gallery.png";
import burger from "../assets/burger.png";
import portfolio from "../assets/portfolio.png";

function Works() {
  return (
    <section id="portfolio" className="border-b-2 ">
      <div className='flex flex-col items-center pt-20 text-center'>
        <h1 className="text-2xl font-bold text-blue-400 ">Portfolio</h1>

        <div className="flex flex-wrap justify-center py-16 mx-auto md:py-20 md:max-w-6xl">
          <div className="flex flex-col pb-20 my-5 space-y-2 rounded md:py-10 md:my-12 md:max-w-xl hover:shadow-2xl">
            <Work
              image={e_shop}
              title="e-Shop"
              para="A simple e-commerce web application."
              live="https://e-shop-tawny.vercel.app/"
              github="https://github.com/Sparrow48/e-shop"
            />
            <div>
              <ul className="flex items-center px-6 space-x-5 ">
                <li className="px-2 py-1 bg-gray-200 rounded">React</li>
                <li className="px-2 py-1 bg-gray-200 rounded">Tailwind</li>
                <li className="px-2 py-1 bg-gray-200 rounded">Varcel</li>
                <li className="px-2 py-1 bg-gray-200 rounded">Firebase</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col pb-20 my-5 space-y-2 rounded md:py-10 md:my-12 md:max-w-xl hover:shadow-2xl">
            <Work
              image={mNotes}
              title="mNotes"
              para="A web application that shows features of an android app called m-notes."
              live="https://mnote-55ba0.web.app/"
              github="https://github.com/Sparrow48/m_notes"
            />
            <div>
              <ul className="flex items-center px-6 space-x-5 ">
                <li className="px-2 py-1 bg-gray-200 rounded">React</li>
                <li className="px-2 py-1 bg-gray-200 rounded">Tailwind</li>
                <li className="px-2 py-1 bg-gray-200 rounded">Firebase</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col pb-20 my-5 space-y-2 rounded md:py-10 md:my-12 md:max-w-xl hover:shadow-2xl">
            <Work
              image={imageGallery}
              title="Image Gallery"
              para="A web application where you can search images."
              live="https://image-gallery-dfc47.web.app/"
              github="https://github.com/Sparrow48/image-gallery"
            />
            <div>
              <ul className="flex items-center px-6 space-x-5 ">
                <li className="px-2 py-1 bg-gray-200 rounded">React</li>
                <li className="px-2 py-1 bg-gray-200 rounded">Tailwind</li>
                <li className="px-2 py-1 bg-gray-200 rounded">Firebase</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col pb-20 my-5 space-y-2 rounded md:py-10 md:my-12 md:max-w-xl hover:shadow-2xl">
            <Work
              image={burger}
              title="Burger Builder"
              para="A web application where users can build burgers and they can order it."
              live="https://my-burger-476a5.web.app/"
              github="https://github.com/Sparrow48/burger-builder"
            />
            <div>
              <ul className="flex items-center px-6 space-x-5 ">
                <li className="px-2 py-1 bg-gray-200 rounded">React</li>
                <li className="px-2 py-1 bg-gray-200 rounded">CSS</li>
                <li className="px-2 py-1 bg-gray-200 rounded">Firebase</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col pb-20 my-5 space-y-2 rounded md:py-10 md:my-12 md:max-w-xl hover:shadow-2xl hover:rounded">
            <Work
              image={portfolio}
              title="Portfolio"
              para="My personal portfolio website."
              live="https://nasib-portfolio.vercel.app/"
              github="https://github.com/Sparrow48/nasib-portfolio"
            />
            <div>
              <ul className="flex items-center px-6 space-x-5 ">
                <li className="px-2 py-1 bg-gray-200 rounded">React</li>
                <li className="px-2 py-1 bg-gray-200 rounded">Tailwind</li>
                <li className="px-2 py-1 bg-gray-200 rounded">Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
