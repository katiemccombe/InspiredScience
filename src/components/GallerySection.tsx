import React, { useEffect, useRef } from "react";
import logo from "../assets/Logo.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

import gallery1 from "../assets/Gallery1.jpeg";
import gallery2 from "../assets/Gallery2.jpg";
import gallery3 from "../assets/Gallery3.jpeg";
import gallery4 from "../assets/Gallery4.jpeg";
import gallery5 from "../assets/Gallery5.jpeg";
import gallery6 from "../assets/Gallery6.jpg";
import gallery7 from "../assets/Gallery7.jpg";
import gallery8 from "../assets/Gallery8.jpg";
import gallery9 from "../assets/Gallery9.jpg";
import gallery10 from "../assets/Gallery10.jpg";
import gallery11 from "../assets/Gallery11.jpg";
import gallery12 from "../assets/Gallery12.jpeg";
import gallery13 from "../assets/Gallery13.jpeg";
import gallery14 from "../assets/Gallery14.jpeg";
import gallery15 from "../assets/Gallery15.jpeg";
import gallery16 from "../assets/Gallery16.jpeg";
import gallery17 from "../assets/Gallery17.jpeg";
import gallery18 from "../assets/Gallery18.jpeg";

const galleryItems = [
  { type: "image", src: gallery1, alt: "Workshop photo Gallery 1" },
  { type: "image", src: gallery2, alt: "Workshop photo Gallery 2" },
  { type: "image", src: gallery3, alt: "Workshop photo Gallery 3" },
  { type: "image", src: gallery4, alt: "Workshop photo Gallery 4" },
  { type: "image", src: gallery5, alt: "Workshop photo Gallery 5" },
  { type: "image", src: gallery6, alt: "Workshop photo Gallery 6" },
  { type: "image", src: gallery7, alt: "Workshop photo Gallery 7" },
  { type: "image", src: gallery8, alt: "Workshop photo Gallery 8" },
  { type: "image", src: gallery9, alt: "Workshop photo Gallery 9" },
  { type: "image", src: gallery10, alt: "Workshop photo Gallery 10" },
  { type: "image", src: gallery11, alt: "Workshop photo Gallery 11" },
  { type: "image", src: gallery12, alt: "Workshop photo Gallery 12" },
  { type: "image", src: gallery13, alt: "Workshop photo Gallery 13" },
  { type: "image", src: gallery14, alt: "Workshop photo Gallery 14" },
  { type: "image", src: gallery15, alt: "Workshop photo Gallery 15" },
  { type: "image", src: gallery16, alt: "Workshop photo Gallery 16" },
  { type: "image", src: gallery17, alt: "Workshop photo Gallery 17" },
  { type: "image", src: gallery18, alt: "Workshop photo Gallery 18" },
];


const GallerySection = () => {
  const carouselApi = useRef(null);
  const autoScrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);

  const handleSetApi = React.useCallback((api) => {
    carouselApi.current = api;
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
    autoScrollInterval.current = setInterval(() => api?.scrollNext(), 3000);
  }, []);

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
                setApi={handleSetApi}
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
