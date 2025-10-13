
"use client";

import Image from 'next/image';
import * as React from 'react';
import Autoplay from "embla-carousel-autoplay";

import { PageContainer } from '@/components/shared/page-container';
import { SectionContainer } from '@/components/shared/section-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle, Briefcase, Users } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


const boardOfDirectors = [
  {
    name: 'Hari Parsad Sharma',
    title: 'MD & CEO',
    photo: '/images/director/hari.jpeg',
    bio: 'He is Graduate by qualification with over 20 years of rich experience in the field of finance, sales, collections, operations, credit, legal, Debt Management and business development. He was previously Associated with Dev Finance as Business Owner from 2003 & also engaged in Three-wheeler dealership of Kerala & Baxy. He has developed a strategic presence of the company in high yielding - pre-owned vehicle financing with expertise in loan origination and collection.',
    dataAiHint: 'professional headshot'
  },
  {
    name: 'Mr. Ashish Nagwan',
    title: 'Executive Director',
    photo: '/images/director/Ashish.jpeg',
    bio: 'He is Post Graduate & CA intern (IPCC 2012) by qualification with over 5 years of experience in the field of finance and accounts, Debt Management. He is previously Associated with Dev Finance as accountant from 2018 & also engaged teaching in collage. Complete Article ship from Somani Associate from 2012 to 2015. he is so energetic by nature and always work for growth of company.',
    dataAiHint: 'corporate portrait'
  },
  {
    name: 'Mrs. Rekha Sharma',
    title: 'Executive Director',
    photo: '/images/director/rekha.jpeg',
    bio: 'She is Graduate by qualification with over 5 years of rich experience in the Management and development. she is also engaged in proprietorship farm of three-wheeler business by name of Dev automobile. She is engaged in social working & activities.',
    dataAiHint: 'business person'
  },
];

const teamImages = [
  { src: '/images/media/img1.jpeg', alt: 'Team Celebration Image 1', dataAiHint: 'team celebration' },
  { src: '/images/media/img2.jpeg', alt: 'Team Celebration Image 2', dataAiHint: 'team meeting' },
  { src: '/images/media/img3.jpeg', alt: 'Team Celebration Image 3', dataAiHint: 'office event' },
  { src: '/images/media/img4.jpeg', alt: 'Team Celebration Image 4', dataAiHint: 'team outing' },
  { src: '/images/media/img5.jpeg', alt: 'Team Celebration Image 5', dataAiHint: 'group photo' },
];

export default function OurTeamPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <PageContainer>
      <SectionContainer title="Our Leadership" subtitle="Meet the Driving Force Behind Shine Blue Hire" className="pt-0 md:pt-0">
      </SectionContainer>

      {/* Board of Directors */}
      <SectionContainer title="Board of Directors" subtitle="Guiding Our Vision">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardOfDirectors.map((director, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInSlideUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mt-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-md">
                  <Image
                    src={director.photo}
                    alt={director.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="font-headline text-xl text-primary">{director.name}</CardTitle>
                <CardDescription>{director.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{director.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Team Celebration" subtitle="Our Moments Together">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
          opts={{
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {teamImages.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        data-ai-hint={image.dataAiHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
        </Carousel>
      </SectionContainer>
      
      <SectionContainer title="Organizational Chart" subtitle="Our Structure">
        <div className="text-center">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">An overview of our company's organizational structure will be displayed here.</p>
          <div className="aspect-video max-w-3xl mx-auto bg-muted rounded-lg shadow-md flex items-center justify-center">
            <Image src="https://placehold.co/800x450.png" alt="Organizational Chart Placeholder" width={800} height={450} className="rounded-lg" data-ai-hint="organization chart"/>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
