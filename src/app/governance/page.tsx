
import { PageContainer } from '@/components/shared/page-container';
import { SectionContainer } from '@/components/shared/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, FileText, Landmark, Gavel } from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const policies = [
  { id: 'kyc', title: 'KYC and AML Policy', description: 'Our Know Your Customer policy ensures compliance and security.' },
  { id: 'aml', title: 'AML Policy', description: 'Our Anti-Money Laundering policy outlines procedures to prevent financial crimes.' },
  { id: 'privacy', title: 'Privacy Policy', description: 'How we collect, use, and protect your personal information.' },
  { id: 'grievance', title: 'Grievance Redressal', description: 'Procedure for addressing customer complaints and concerns.' },
];

export default function GovernancePage() {
  return (
    <PageContainer>
      <SectionContainer title="Corporate Governance" subtitle="Commitment to Ethical Practices" className="pt-0 md:pt-0">
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center mb-4">
              <Gavel className="h-10 w-10 text-primary mr-4" />
              <div>
                <h3 className="font-headline text-2xl font-semibold text-primary">Our Governance Framework</h3>
                <p className="text-muted-foreground">
                  Shine Blue Hire Purchase is committed to upholding the highest standards of corporate governance, ensuring transparency, accountability, and ethical conduct in all our operations.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mt-2">
              Our governance framework is designed to protect the interests of our stakeholders, including customers, employees, investors, and the wider community. We adhere strictly to all regulatory requirements and strive for best practices in corporate citizenship.
            </p>
          </CardContent>
        </Card>
      </SectionContainer>

      <SectionContainer title="Regulatory Compliance" subtitle="Adhering to Standards" className="bg-secondary/30">
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center">
              <Landmark className="h-8 w-8 text-accent mr-3" />
              <CardTitle className="font-headline text-xl text-primary">RBI Registration & Compliance</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">
              Shine Blue Hire Purchase Pvt. Ltd. is a Non-Banking Financial Company (NBFC) duly registered with the Reserve Bank of India (RBI). Our Certificate of Registration (CoR) number is B-06.00131, and the date of this registration is December 3rd, 2021.
            </p>
            <p className="text-muted-foreground">
              Our Corporate Identification Number (CIN) is U65921PB1990PTC010691. We operate in full compliance with all applicable RBI guidelines, regulations, and directives. This includes adherence to prudential norms, fair practices code, KYC/AML guidelines, and reporting requirements.
            </p>
          </CardContent>
        </Card>
      </SectionContainer>

      <SectionContainer title="Important Policies" subtitle="Our Operational Guidelines" id="policies">
        <Accordion type="single" collapsible className="w-full">
          {policies.map((policy, index) => (
            <AccordionItem value={`item-${index}`} key={policy.id}>
              <AccordionTrigger className="font-headline text-left hover:no-underline text-primary">
                <FileText className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                {policy.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {policy.description} Detailed policy document can be accessed <Link href={`/policies/${policy.id}.pdf`} target="_blank" className="text-accent hover:underline">here (PDF placeholder)</Link>.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
         <p className="mt-8 text-center text-muted-foreground">
          For detailed information on any of our policies, please <Link href="/contact-us" className="text-accent hover:underline">contact us</Link>.
        </p>
      </SectionContainer>

      <SectionContainer title="Investor Grievance Redressal" subtitle="Addressing Investor Concerns" className="bg-secondary/30">
        <Card className="shadow-md">
          <CardHeader>
             <div className="flex items-center">
                <ShieldCheck className="h-8 w-8 text-accent mr-3" />
                <CardTitle className="font-headline text-xl text-primary">Contact for Investor Grievances</CardTitle>
              </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">
              [Name of Compliance Officer/Investor Relations Officer]<br/>
              [Designation]<br/>
              Email: <a href="mailto:investors@shinebluehire.com" className="text-accent hover:underline">investors@shinebluehire.com</a><br/>
              Phone: [Placeholder: Investor Relations Phone Number]
            </p>
            <p className="text-muted-foreground">
              We are committed to promptly and effectively addressing any concerns or grievances from our valued investors.
            </p>
          </CardContent>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
}
