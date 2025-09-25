"use client";

import { PageContainer } from "@/components/shared/page-container";
import { SectionContainer } from "@/components/shared/section-container";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Quote, TrendingUp } from "lucide-react";
import Image from "next/image";
import { LoanEnquiryModal } from "@/components/shared/LoanEnquiryModel";
export default function MSMEUnsecuredLoanPage() {
  return (
    <PageContainer>
      {/* Hero Banner */}
      <section className="relative h-[55vh] md:h-[70vh] w-full overflow-hidden mb-16">
        <Image
          src="/images/banner/msme2.jpg"
          alt="MSME Unsecured Loan"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-md animate-fadeInSlideUp">
            MSME Unsecured Loan
          </h1>
        </div>
      </section>

      {/* Loan Overview */}
      <SectionContainer title="Collateral-Free MSME Financing" subtitle="Empowering Small Businesses with Quick Capital">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 animate-fadeInSlideUp">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our <strong className="text-primary">MSME Unsecured Loan</strong> is crafted for micro, small, and medium
              businesses that need fast access to working capital without pledging any collateral.
            </p>
            <ul className="list-disc list-inside text-muted-foreground text-sm">
              <li>Loan Amount: Up to ₹5 Lakhs</li>
              <li>ROI: 30%</li>
              <li>Tenure: Up to 36 Months</li>
              <li>Processing Fee: 3%</li>
              <li>Quick approvals with minimal paperwork</li>
            </ul>
            <Badge className="bg-yellow-400 text-black">No Collateral Required</Badge>
          </div>
          <div className="rounded-md overflow-hidden shadow-md animate-fadeInSlideUp delay-100">
            <Image
              src="/images/banner/msme2.jpg"
              alt="MSME entrepreneur"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Testimonials */}
      <SectionContainer title="MSME Success Stories" subtitle="Real Business Growth">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Anita Verma",
              location: "Anita Boutique, Jhansi",
              message: "Shine Blue's unsecured MSME loan helped me expand my tailoring unit with zero collateral. Process was quick and efficient.",
            },
            {
              name: "Rohit Desai",
              location: "Desai Tech Solutions, Surat",
              message: "I needed working capital for a new project. The loan was approved in just 3 days. Highly recommend their service!",
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
      <SectionContainer title="Compare: Secured vs. Unsecured Loan">
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
                ["Collateral", "Required", "Not Required"],
                ["Max Loan", "₹10 Lakhs", "₹5 Lakhs"],
                ["ROI", "22–23%", "30%"],
                ["Processing Speed", "Moderate", "Fast (1–3 days)"],
                ["Ideal For", "Established MSMEs", "Growing MSMEs / Startups"],
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
              q: "What are the basic eligibility criteria?",
              a: "Any MSME with 6+ months of operations and basic KYC documents can apply.",
            },
            {
              q: "Do I need audited financials?",
              a: "Not mandatory. Recent bank statements and GST returns are sufficient for most cases.",
            },
            {
              q: "Can I prepay my loan?",
              a: "Yes, prepayment is allowed after 6 months. Minimal charges may apply.",
            },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="text-center">
        <h3 className="text-xl font-semibold mb-4 text-primary">Get Fast, Flexible Financing</h3>
        <p className="mb-6 text-muted-foreground">
          Apply now for an MSME Unsecured Loan and get hassle-free funding to take your business to the next level.
        </p>
        <LoanEnquiryModal />
      </SectionContainer>
    </PageContainer>
  );
}
