import React, { useEffect, useRef } from "react";
import logo from "../assets/Logo.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

import img2650 from "../assets/IMG_2650.jpg";
import img3245 from "../assets/IMG_3245.jpg";
import img3250 from "../assets/IMG_3250.jpg";
import img3259 from "../assets/IMG_3259.jpg";
import img3263 from "../assets/IMG_3263.jpg";
import img5092 from "../assets/IMG_5092.jpg";
import img6487 from "../assets/IMG_6487.jpg";
import img6871 from "../assets/IMG_6871.jpg";
import img6874 from "../assets/IMG_6874.jpg";
import img6875 from "../assets/IMG_6875.jpg";
import img6877 from "../assets/IMG_6877.jpg";

const galleryItems = [
  { type: "image", src: img2650, alt: "Workshop photo IMG_2650" },
  { type: "image", src: img3245, alt: "Workshop photo IMG_3245" },
  { type: "image", src: img3250, alt: "Workshop photo IMG_3250" },
  { type: "image", src: img3259, alt: "Workshop photo IMG_3259" },
  { type: "image", src: img3263, alt: "Workshop photo IMG_3263" },
  { type: "image", src: img5092, alt: "Workshop photo IMG_5092" },
  { type: "image", src: img6487, alt: "Workshop photo IMG_6487" },
  { type: "image", src: img6871, alt: "Workshop photo IMG_6871" },
  { type: "image", src: img6874, alt: "Workshop photo IMG_6874" },
  { type: "image", src: img6875, alt: "Workshop photo IMG_6875" },
  { type: "image", src: img6877, alt: "Workshop photo IMG_6877" },
];


const GallerySection = () => {
  const carouselApi = useRef(null);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (!carouselApi.current) return;
    const api = carouselApi.current;
    const interval = setInterval(() => {
      if (api && api.scrollNext) api.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselApi.current]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white border-t border-b border-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Logo" className="w-16 h-16 mb-4 drop-shadow-lg rounded-full bg-white p-2 border border-primary/20" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2 text-center">Gallery</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto text-base">A look back at our hands-on workshops and events.</p>
        </div>
        <div className="relative">
          <div className="relative w-full flex justify-center">
            <div className="relative max-w-6xl w-full">
              <Carousel
                opts={{ align: "start", slidesToScroll: 3, loop: true }}
                setApi={(api) => (carouselApi.current = api)}
                className="w-full"
              >
                <CarouselContent>
                  {galleryItems.map((item, idx) => (
                    <CarouselItem key={idx} className="basis-1/3 px-2">
                      <div className="rounded-2xl overflow-hidden bg-white shadow-xl border border-border flex items-center justify-center transition-transform hover:scale-[1.02]">
                        {item.type === "image" ? (
                          <img src={item.src} alt={item.alt} className="w-full h-64 object-cover transition-transform duration-200" />
                        ) : (
                          <video controls className="w-full h-64 object-cover">
                            <source src={item.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-8 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="-right-8 top-1/2 -translate-y-1/2 z-10" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
