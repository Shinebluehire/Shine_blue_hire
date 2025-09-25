// /app/products/msme-secured-loan/page.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { PageContainer } from '@/components/shared/page-container';
import { SectionContainer } from '@/components/shared/section-container';
import { Landmark } from 'lucide-react';
import { LoanEnquiryModal } from '@/components/shared/LoanEnquiryModel';

export default function MSMESecuredLoanPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <PageContainer>
      {/* Hero Section */}
      <SectionContainer className="relative overflow-hidden bg-gradient-to-r from-primary to-blue-700 text-white py-16 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInSlideUp">
          <Landmark className="mx-auto mb-4 h-12 w-12 text-accent" />
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            MSME Secured Loan
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Unlock your MSME’s growth potential with secured loans offering better interest rates and higher limits.
          </p>
          <div className="mt-8">
            <LoanEnquiryModal />
          </div>
        </div>
      </SectionContainer>

      {/* Banner Image */}
      <div className="relative w-full h-[300px] sm:h-[450px] overflow-hidden">
        <Image
          src="/images/banner/msme.jpg"
          alt="MSME Loan"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover grayscale-[0.2] brightness-[0.95]"
        />
      </div>

      {/* Loan Details */}
      <SectionContainer
        title="Product Highlights"
        subtitle="Empowering Small Businesses"
        className="bg-secondary/50"
      >
        <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-base text-muted-foreground animate-fadeInSlideUp">
          <li><strong>Loan Amount:</strong> Up to ₹10 Lakhs</li>
          <li><strong>Tenure:</strong> Up to 60 Months</li>
          <li><strong>Interest Rate:</strong> 23% p.a. (ROI)</li>
          <li><strong>Processing Fee:</strong> 2.5%</li>
          <li><strong>Collateral:</strong> Required (property/vehicle/assets)</li>
          <li><strong>Eligibility:</strong> Valid business registration, 2+ years operation</li>
        </ul>
      </SectionContainer>

      {/* Testimonials */}
      <SectionContainer title="Business Success Stories" subtitle="Real Impact, Real Growth">
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-white p-6 shadow rounded-md border-l-4 border-accent transition-all duration-300 hover:shadow-lg">
            <p className="text-lg italic">"We expanded our factory and upgraded machines thanks to this secured loan. The process was professional and quick."</p>
            <footer className="mt-4 text-sm text-muted-foreground">– Ramesh Verma, Textile Manufacturer</footer>
          </blockquote>
          <blockquote className="bg-white p-6 shadow rounded-md border-l-4 border-accent transition-all duration-300 hover:shadow-lg">
            <p className="text-lg italic">"The interest rate was competitive and documentation was manageable. It truly helped in scaling my business."</p>
            <footer className="mt-4 text-sm text-muted-foreground">– Meera Desai, Packaging Unit Owner</footer>
          </blockquote>
        </div>
      </SectionContainer>

      {/* Comparison Table */}
      <SectionContainer title="Compare Loan Types" subtitle="Choose What Suits You Best">
        <div className="overflow-x-auto max-w-5xl mx-auto">
          <table className="w-full border text-sm text-left bg-white shadow-md rounded-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2">Secured Loan</th>
                <th className="px-4 py-2">Unsecured Loan</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t">
                <td className="px-4 py-3">Collateral</td>
                <td className="px-4 py-3">Required</td>
                <td className="px-4 py-3">Not Required</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Interest Rate</td>
                <td className="px-4 py-3">Lower (23%)</td>
                <td className="px-4 py-3">Higher (30%)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Loan Limit</td>
                <td className="px-4 py-3">Higher (₹10 Lakhs)</td>
                <td className="px-4 py-3">Lower (₹5 Lakhs)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Tenure</td>
                <td className="px-4 py-3">Up to 60 Months</td>
                <td className="px-4 py-3">Up to 36 Months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer title="Frequently Asked Questions" subtitle="Need Help? We’ve Got Answers">
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-2">
          <AccordionItem value="q1">
            <AccordionTrigger>Who can apply for MSME Secured Loans?</AccordionTrigger>
            <AccordionContent>
              Registered Micro, Small, and Medium Enterprises operating for at least 2 years with valid financials.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>What documents are needed?</AccordionTrigger>
            <AccordionContent>
              Business registration proof, address proof, bank statements, PAN, ITRs, and collateral documents.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Is collateral mandatory?</AccordionTrigger>
            <AccordionContent>
              Yes. This loan is secured against an asset such as property, machinery, or vehicles.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionContainer>
    </PageContainer>
  );
}
