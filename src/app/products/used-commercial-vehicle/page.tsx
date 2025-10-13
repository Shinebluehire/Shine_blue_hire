"use client";

import { PageContainer } from "@/components/shared/page-container";
import { SectionContainer } from "@/components/shared/section-container";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Quote, CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { LoanEnquiryModal } from "@/components/shared/LoanEnquiryModel";
export default function UsedCommercialVehicleLoanPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative h-[55vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/banner/UCV.jpg"
          alt="Used Commercial Vehicle"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold animate-fadeInSlideUp drop-shadow-lg">
            Used Commercial Vehicle Loan
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <SectionContainer
        title="Accelerate Your Logistics Business"
        subtitle="Finance for Pre-Owned Commercial Vehicles"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 animate-fadeInSlideUp">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether you're a fleet owner, delivery service provider, or starting your transport business,
              our <strong className="text-primary">Used Commercial Vehicle Loan</strong> helps you get started
              quickly with attractive terms and minimal documentation.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Loan Amount: Up to ₹15 Lakhs</li>
              <li>Tenure: Up to 36 Months</li>
              <li>Processing Fee: 2%</li>
              <li>Fast disbursal & minimal paperwork</li>
            </ul>
            <Badge className="bg-accent text-accent-foreground">No Hidden Charges</Badge>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg animate-fadeInSlideUp delay-100">
            <Image
              src="/images/banner/UCV.jpg"
              alt="Used Truck"
              width={600}
              height={400}
              className="object-cover w-full h-auto rounded-md"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Testimonials */}
      <SectionContainer title="Real Transporter Stories" subtitle="Success on the Road">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Ravi Malik",
              location: "Malik Goods Carrier, Jaipur",
              message: "I expanded my fleet with 2 used trucks. The loan was quick and the EMI is easy to manage.",
            },
            {
              name: "Kavita More",
              location: "More Logistics, Nashik",
              message: "No hidden fees and very supportive staff. Shine Blue helped me grow my small fleet efficiently.",
            },
          ].map((t, i) => (
            <Card key={i} className="animate-fadeInSlideUp">
              <CardHeader className="flex items-center gap-3">
                <Quote className="text-accent w-6 h-6" />
                <CardTitle className="text-lg">{t.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p className="italic">“{t.message}”</p>
                <span className="text-xs text-primary mt-2 block">{t.location}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Comparison Table */}
      <SectionContainer title="Secured vs. Unsecured Loan">
        <div className="overflow-x-auto animate-fadeInSlideUp">
          <table className="min-w-full text-sm text-left border-collapse shadow-md rounded-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">Secured Loan</th>
                <th className="p-3">Unsecured Loan</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                ["Collateral Required", "Yes", "No"],
                ["Interest Rate", "Lower (22%)", "Higher (30%)"],
                ["Max Loan", "₹15 Lakhs", "₹5 Lakhs"],
                ["Approval Speed", "2–4 Days", "Same Day"],
                ["Tenure", "Up to 60 Months", "Up to 36 Months"],
              ].map(([feature, secured, unsecured], index) => (
                <tr key={index} className="even:bg-muted/30">
                  <td className="p-3 font-medium text-foreground">{feature}</td>
                  <td className="p-3">{secured}</td>
                  <td className="p-3">{unsecured}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer title="Frequently Asked Questions">
        <Accordion type="single" collapsible className="animate-fadeInSlideUp space-y-2">
          {[
            {
              q: "Who can apply for this loan?",
              a: "Any self-employed person, small business owner, or transport company with valid documents and bank statements.",
            },
            {
              q: "What type of vehicles are eligible?",
              a: "Used trucks, mini trucks, commercial vans, or tippers not older than 10 years.",
            },
            {
              q: "Do I need a guarantor?",
              a: "A guarantor is not mandatory but may help in getting better terms for new applicants.",
            },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="text-center">
        <h3 className="text-xl font-semibold mb-4 text-primary">Ready to Drive Your Dreams?</h3>
        <p className="mb-6 text-muted-foreground">
          Apply now for a Used Commercial Vehicle Loan and get disbursal in just a few days.
        </p>
        <LoanEnquiryModal />
      </SectionContainer>
    </PageContainer>
  );
}
