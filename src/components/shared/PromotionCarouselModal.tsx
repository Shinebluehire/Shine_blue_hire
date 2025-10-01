
"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogClose, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { X } from "lucide-react";
import { Button } from "../ui/button";

const productImages = [
  '/images/product/img1.jpeg',
  '/images/product/img2.jpeg',
  '/images/product/img3.jpeg',
  '/images/product/img4.jpeg',
  '/images/product/img5.jpeg',
  '/images/product/img6.jpeg',
  '/images/product/img7.jpeg',
  '/images/product/img8.jpeg',
  '/images/product/img9.jpeg'
];

export function PromotionCarouselModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Open the modal on component mount
  React.useEffect(() => {
    // Ensure this only runs on the client
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Delay opening slightly to avoid hydration issues and be less intrusive
    return () => clearTimeout(timer);
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl w-full p-2 bg-black/80 border-none">
        <DialogHeader>
          <DialogTitle className="sr-only">Product Promotions</DialogTitle>
        </DialogHeader>
        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 hover:text-white"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>
        <div className="w-full">
            <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
                loop: true,
                align: "start",
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            >
            <CarouselContent className="-ml-2">
                {productImages.map((src, index) => (
                <CarouselItem key={index} className="pl-2 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="relative aspect-square">
                    <Image
                        src={src}
                        alt={`Product Image ${index + 1}`}
                        fill
                        className="object-contain rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50" />
            </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
