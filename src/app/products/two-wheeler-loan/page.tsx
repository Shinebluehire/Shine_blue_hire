// /app/products/msme/two-wheeler-loan/page.tsx
"use client";

import Image from "next/image";
import { PageContainer } from "@/components/shared/page-container";
import { SectionContainer } from "@/components/shared/section-container";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, ThumbsUp } from "lucide-react";
import { LoanEnquiryModal } from "@/components/shared/LoanEnquiryModel";

export default function TwoWheelerLoanPage() {
  return (
    <PageContainer>
      {/* Hero Banner */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden mb-16">
        <Image
          src="/images/banner/TWL.png"
          alt="Two-Wheeler Loan Banner"
          fill
          className="object-cover brightness-[0.7] w-full h-full animate-fadeIn"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center px-4 animate-fadeInSlideUp">
            Two-Wheeler Loan
          </h1>
        </div>
      </section>

      {/* Product Overview */}
      <SectionContainer title="Drive Your Dreams" subtitle="Affordable Loans for Your Next Ride">
        <div className="grid md:grid-cols-2 gap-8 items-center animate-fadeInSlideUp">
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Shine Blue Hire Purchase makes your dream of owning a two-wheeler a reality. Whether for daily commute or personal use, our two-wheeler loans are designed to be fast, flexible, and affordable.
            </p>
            <ul className="list-disc list-inside">
              <li>Loan Amount: Up to ₹2.5 Lakhs</li>
              <li>Interest Rate: 24% p.a.</li>
              <li>Tenure: Up to 30 Months</li>
              <li>Minimal documentation & instant approval</li>
            </ul>
            <Badge variant="outline" className="text-sm text-accent border-accent">Zero Prepayment Charges</Badge>
          </div>
          <Image
            src="/images/banner/TWL.png"
            alt="Two-wheeler finance"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
      </SectionContainer>

      {/* Testimonials */}
      <SectionContainer title="What Our Riders Say" subtitle="Customer Stories That Inspire">
        <div className="grid md:grid-cols-2 gap-8 animate-fadeInSlideUp">
          {[
            {
              name: "Arjun Deshmukh",
              feedback: "Got my bike loan approved in just one day. The process was smooth and I love my new ride!",
              business: "Student, Maharashtra",
            },
            {
              name: "Kavita Joshi",
              feedback: "Best interest rates and quick disbursal. Thank you Shine Blue Hire Purchase for making it easy.",
              business: "Sales Executive, Gujarat",
            },
          ].map((t, i) => (
            <Card key={i} className="shadow-md">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ThumbsUp className="text-primary" />
                  <CardTitle className="text-lg">{t.name}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{t.business}</p>
              </CardHeader>
              <CardContent className="italic text-sm text-muted-foreground">“{t.feedback}”</CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer title="Frequently Asked Questions">
        <Accordion type="single" collapsible className="animate-fadeInSlideUp">
          {[
            {
              q: "What is the eligibility for a two-wheeler loan?",
              a: "Indian residents above 18 years with valid KYC and income proof can apply.",
            },
            {
              q: "Is a guarantor needed?",
              a: "Not always. It depends on your credit profile and loan amount.",
            },
            {
              q: "Can I foreclose the loan early?",
              a: "Yes. There are no foreclosure charges for two-wheeler loans.",
            },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionContainer>
      <SectionContainer className="text-center">
        <h3 className="text-xl font-semibold mb-4 text-primary">Get Fast, Flexible Financing</h3>
          <p className="mb-6 text-muted-foreground">
            Apply now for an Two Wheeler Loan and get hassle-free funding to take your business to the next level.
          </p>
          <LoanEnquiryModal />
        </SectionContainer>
    </PageContainer>
  );
}
