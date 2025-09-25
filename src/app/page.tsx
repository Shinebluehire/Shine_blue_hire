
"use client";
import Image from 'next/image';
import Link from 'next/link';
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageContainer } from '@/components/shared/page-container';
import { SectionContainer } from '@/components/shared/section-container';
import { ProductCard } from '@/components/shared/product-card';
import { CheckCircle, Users, Newspaper, Handshake, TrendingUp, Car, Tractor, Store, Building } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ValueCard } from "@/components/shared/value-card";
import { LoanEnquiryModal } from "@/components/shared/LoanEnquiryModel";

import { Lightbulb, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

const values = [
  {
    title: 'Equality',
    icon: Users,
    description:
      'We know the difference between right and wrong and choose to do what’s right – for our employees & customers. We seek out diverse perspectives, communicate openly and honestly, and treat others with respect.',
  },
  {
    title: 'Result Driven',
    icon: Target,
    description:
      'Functional changes in the system to smooth line the system and to achieve the company vision.',
  },
  {
    title: 'Customer Centricity',
    icon: Users,
    description:
      'We focus our energies into creating satisfactory customer experience.',
  },
  {
    title: 'Teamwork',
    icon: Lightbulb,
    description:
      'We work together, trusting each other to share knowledge openly and engage collaboratively to deliver our best work as a team.',
  },
];



const loanProducts = [
  {
    icon: Car,
    title: 'Used Commercial Vehicle',
    description: 'Finance for pre-owned commercial vehicles to support your logistics and transport business.',
    detailsLink: '/products/used-commercial-vehicle',
    ticketSize: 'Up to ₹15 Lakhs',
    interestRate: '22%',
    tenure: 'Up to 36 Months',
    features: ['Quick processing', 'Flexible documentation', 'Easy repayment'],
  },
  {
    icon: Store,
    title: 'MSME Secured Loan',
    description: 'Secured working capital loans for MSMEs with attractive ROI and long tenure.',
    detailsLink: '/products/msme-secured-loan',
    ticketSize: 'Up to ₹10 Lakhs',
    interestRate: '23%',
    tenure: 'Up to 60 Months',
    features: ['Collateral-based financing', 'Lower interest rate', 'Longer repayment tenure'],
  },
  {
    icon: Tractor,
    title: 'MSME Unsecured Loan',
    description: 'Unsecured loans designed for small enterprises needing fast, collateral-free capital.',
    detailsLink: '/products/msme-unsecured-loan',
    ticketSize: 'Up to ₹5 Lakhs',
    interestRate: '30%',
    tenure: 'Up to 36 Months',
    features: ['No collateral required', 'Fast processing', 'Ideal for startups'],
  },
  {
    icon: Users,
    title: 'Two-Wheeler Loan',
    description: 'Affordable loan solutions to help you own your dream two-wheeler with ease.',
    detailsLink: '/products/two-wheeler-loan',
    ticketSize: 'Up to ₹2.5 Lakhs',
    interestRate: '24%',
    tenure: 'Up to 30 Months',
    features: ['Low down payment', 'Fast approval', 'Flexible EMI options'],
  },
];

const keyPoints = [
  {
    icon: CheckCircle,
    title: 'Hassle-Free Processing',
    description: 'Quick and transparent loan application and disbursal process.',
  },
  {
    icon: Building,
    title: 'Rural Outreach',
    description: 'Deep penetration in rural and semi-urban areas to serve diverse needs.',
  },
  {
    icon: Handshake,
    title: 'Trusted Since 1990',
    description: 'Decades of experience in providing reliable financial solutions.',
  },
];

const heroBanners = [
  { src: '/images/banner/hero-banner-1.jpeg', alt: 'Promotional Banner 1', dataAiHint: 'promotional banner' },
  { src: '/images/banner/hero-banner-2.jpeg', alt: 'Promotional Banner 2', dataAiHint: 'promotional banner' },
  { src: '/images/banner/hero-banner-3.jpeg', alt: 'Promotional Banner 3', dataAiHint: 'promotional banner' },
  { src: '/images/banner/hero-banner-4.jpeg', alt: 'Promotional Banner 4', dataAiHint: 'promotional banner' },
  { src: '/images/banner/hero-banner-5.jpeg', alt: 'Promotional Banner 5', dataAiHint: 'promotional banner' },
  { src: '/images/banner/hero-banner-6.jpeg', alt: 'Promotional Banner 6', dataAiHint: 'promotional banner' },
];

export default function HomePage() {
  const plugin = React.useRef(
    Autoplay({ delay: 1800, stopOnInteraction: true })
  )

  return (
    <PageContainer className="py-0 md:py-0"> {/* Remove default PageContainer padding for full-width hero */}
      {/* Hero Section */}
      <SectionContainer noSpacing
        className="bg-gradient-to-br from-primary/80 via-primary to-blue-700 text-primary-foreground py-20 md:py-20 relative overflow-hidden h-[60vh] md:h-[75vh] flex items-center justify-center"
        contentClassName="container mx-auto px-4 sm:px-6 lg:px-8 h-full"
      >
        <div className="absolute inset-0">
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-full"
            opts={{
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-0 h-full"> {/* Ensure CarouselContent takes full height */}
              {heroBanners.map((banner, index) => (
                <CarouselItem key={index} className="pl-0 relative h-full"> {/* Ensure CarouselItem takes full height */}
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    className="object-cover"
                    fill
                    // Prioritize loading the first image
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Optional: Add Previous/Next buttons if needed, styled to be visible on banners */}
            {/* <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-none" /> */}
            {/* <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-none" /> */}
          </Carousel>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Financial Solutions for a Brighter Future
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-primary-foreground/90 font-body drop-shadow-md">
            Shine Blue Hire Purchase: Your trusted partner in achieving your financial goals with tailored loan products and services.
          </p>
          <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
            <LoanEnquiryModal />
            <Button size="lg" variant="outline" asChild className="border-accent-foreground text-accent-foreground bg-accent hover:bg-accent-foreground hover:text-accent transition-all duration-300">
              <Link href="/products">Explore Loans</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
      
      {/* Full-Width Responsive Banner Section */}
      <SectionContainer noSpacing className="w-full p-0">
        <div className="relative w-full overflow-hidden">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{ loop: true }}
          >
            <CarouselContent className="w-full">
              {[
                { src: '/images/banner/hero-banner-1.jpeg', alt: 'Promotional Banner 1', dataAiHint: 'promotional banner' },
                { src: '/images/banner/hero-banner-2.jpeg', alt: 'Promotional Banner 2', dataAiHint: 'promotional banner' },
                { src: '/images/banner/hero-banner-3.jpeg', alt: 'Promotional Banner 3', dataAiHint: 'promotional banner' },
                { src: '/images/banner/hero-banner-4.jpeg', alt: 'Promotional Banner 4', dataAiHint: 'promotional banner' },
                { src: '/images/banner/hero-banner-5.jpeg', alt: 'Promotional Banner 5', dataAiHint: 'promotional banner' },
                { src: '/images/banner/hero-banner-6.jpeg', alt: 'Promotional Banner 6', dataAiHint: 'promotional banner' },
              ].map((img, idx) => (
                <CarouselItem key={idx} className="pl-0">
                  <div className="relative w-full aspect-[16/7] ">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1920}
                      height={800}
                      className="w-full h-auto object-contain"
                      priority={idx === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary rounded-full shadow" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary rounded-full shadow" />
          </Carousel>
        </div>
      </SectionContainer>

      {/* Brief Intro Section */}
      <SectionContainer noSpacing
        title="Welcome to Shine Blue Hire Purchase"
        subtitle="Your Partner in Progress"
        contentClassName="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto animate-fadeInSlideUp delay-100">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-all duration-700 ease-in-out">
            For over three decades, <span className="font-semibold text-primary">Shine Blue Hire Purchase</span> has been committed to providing accessible and reliable financial services. We specialize in empowering individuals and businesses in rural and semi-urban areas, helping them turn aspirations into reality.
          </p>
    
          <Button
            asChild
            variant="link"
            className="text-accent text-lg hover:text-accent/80 transition-all duration-300 hover:underline underline-offset-4"
          >
            <Link href="/about-us" className="group inline-flex items-center gap-1">
              Learn More About Us
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Featured Loan Products Section */}
      <SectionContainer noSpacing
        title="Our Core Loan Offerings"
        subtitle="Tailored Financial Solutions"
        className="bg-secondary/50"
        contentClassName="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="overflow-x-auto">
          <div className="flex space-x-6 md:space-x-8 overflow-x-scroll pb-4 px-1 snap-x snap-mandatory scroll-smooth">
            {loanProducts.map((product, index) => (
              <div
                key={product.title}
                className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] snap-start transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-fadeInSlideUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105"
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Key Points Section */}
      <SectionContainer title="Our Values" subtitle="What We Stand For">
        <div className="grid gap-8">
          {values.map((val, i) => (
            <ValueCard
              key={val.title}
              icon={val.icon}
              title={val.title}
              description={val.description}
              index={i}
              hoverable // Enables optional hover effect
            />
          ))}
        </div>
      </SectionContainer>


      {/* Media/News Link Section */}
      <SectionContainer
        noSpacing
        className="bg-muted/30"
        contentClassName="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center py-16 animate-fadeInSlideUp transition-all duration-700">
          <div className="inline-flex items-center justify-center bg-accent/20 rounded-full p-4 mb-6 shadow-sm hover:scale-105 transition-transform duration-300">
            <Newspaper className="h-12 w-12 text-accent" />
          </div>
          <h3 className="text-3xl font-bold text-primary mb-3 tracking-tight">Stay Updated</h3>
          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Discover our latest news, events, achievements, and media coverage. Stay connected with Shine Blue Hire Purchase Pvt. Ltd.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 px-6 py-2 text-lg font-medium rounded-md"
          >
            <Link href="/media" className="inline-flex items-center gap-2">
              Visit Our Media Section
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* CTA Banners Section */}
      <SectionContainer
        noSpacing
        title="Get Involved"
        subtitle="Partner with Us"
        contentClassName="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-12 w-12 text-primary mx-auto mb-4" />,
              title: "Become a Partner",
              description: "Collaborate with us to expand financial inclusion.",
              button: (
                <Button
                  asChild
                  variant="outline"
                  className="border-accent-foreground text-accent-foreground bg-accent hover:bg-accent-foreground hover:text-accent transition-all duration-300"
                >
                  <Link href="/contact-us?subject=Partnership">Enquire Now</Link>
                </Button>
              ),
              style: "bg-white text-gray-900",
            },
            {
              icon: <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />,
              title: "Join as Investor",
              description: "Explore investment opportunities with a growing NBFC.",
              button: (
                <Button
                  asChild
                  variant="outline"
                  className="border-accent-foreground text-accent-foreground bg-accent hover:bg-accent-foreground hover:text-accent transition-all duration-300"
                >
                  <Link href="/investors">Investor Relations</Link>
                </Button>
              ),
              style: "bg-white text-gray-900",
            },
            {
              icon: <CheckCircle className="h-12 w-12 text-accent-foreground mx-auto mb-4" />,
              title: "Apply for a Loan",
              description: "Ready to take the next step? Start your application today.",
              button: (
                <Button
                  asChild
                  variant="outline"
                  className="border-accent-foreground text-accent-foreground bg-accent hover:bg-accent-foreground hover:text-accent transition-all duration-300"
                >
                  <Link href="/products">Apply Now</Link>
                </Button>
              ),
              style: "bg-accent text-accent-foreground",
            },
          ].map((cta, i) => (
            <div
              key={cta.title}
              className={`text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fadeInSlideUp`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {cta.icon}
              <h4 className="font-headline text-xl font-semibold mb-2">{cta.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{cta.description}</p>
              {cta.button}
            </div>
          ))}
        </div>
      </SectionContainer>
    </PageContainer>  
  );
}
