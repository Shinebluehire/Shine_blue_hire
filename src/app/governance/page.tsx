
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
  { 
    id: 'kyc-aml', 
    title: 'KYC and AML Policy', 
    description: 'Our Know Your Customer and Anti-Money Laundering policy ensures compliance, security, and the prevention of financial crimes.',
    link: 'https://drive.google.com/file/d/1fx5gacHFsyqZXLr0xH8Mpapox-SnaSvf/view?usp=sharing'
  },
  { 
    id: 'security', 
    title: 'Security Policy', 
    description: 'Outlining our measures to protect customer data and our operational systems from threats and unauthorized access.',
    link: 'https://drive.google.com/file/d/1liFz0ZjPPo23a1CJFcWhRwXrNSiTg9S2/view?usp=sharing'
  },
  { 
    id: 'risk-compliance', 
    title: 'Risk and Compliance Policy', 
    description: 'Our framework for identifying, assessing, and managing risks, ensuring adherence to all regulatory standards.',
    link: 'https://drive.google.com/file/d/1v_0hQUn_dBy0EmHKZao_38alClz2C6bG/view?usp=sharing'
  },
  { 
    id: 'board-of-directors', 
    title: 'Board of Directors', 
    description: 'Information regarding the composition, roles, and responsibilities of our Board of Directors for effective governance.',
    link: 'https://drive.google.com/file/d/1PgTG8IZRgddlI8Tp9ZZ8-htY9iEwz0Re/view?usp=sharing'
  },
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
                {policy.description} Detailed policy document can be accessed <Link href={policy.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">here</Link>.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
         <p className="mt-8 text-center text-muted-foreground">
          For detailed information on any of our policies, please <Link href="/contact-us" className="text-accent hover:underline">contact us</Link>.
        </p>
      </SectionContainer>

    </PageContainer>
  );
}
