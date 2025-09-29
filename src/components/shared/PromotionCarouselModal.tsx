
"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
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
  '/images_product/img9.jpeg'
];

// Group images into pairs
const imagePairs: (string | null)[][] = [];
for (let i = 0; i < productImages.length; i += 2) {
  imagePairs.push([productImages[i], productImages[i + 1] || null]);
}

export function PromotionCarouselModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Open the modal on component mount
  React.useEffect(() => {
    setIsOpen(true);
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl w-full p-2 bg-black/80 border-none">
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
        
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {imagePairs.map((pair, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative aspect-square">
                    <Image
                      src={pair[0]!}
                      alt={`Product Image ${index * 2 + 1}`}
                      fill
                      className="object-contain rounded-md"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  {pair[1] && (
                    <div className="relative aspect-square">
                      <Image
                        src={pair[1]}
                        alt={`Product Image ${index * 2 + 2}`}
                        fill
                        className="object-contain rounded-md"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
