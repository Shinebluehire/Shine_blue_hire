
import Image from 'next/image';
import { PageContainer } from '@/components/shared/page-container';
import { SectionContainer } from '@/components/shared/section-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Building, MessageSquare } from 'lucide-react';

const lenders = [
  { name: 'National Bank for Agriculture and Rural Development (NABARD)', logo: 'https://placehold.co/200x100.png', role: 'Providing refinance facilities for agricultural and rural development lending.', dataAiHint: 'bank logo' },
  { name: 'Small Industries Development Bank of India (SIDBI)', logo: 'https://placehold.co/200x100.png', role: 'Supporting MSME financing and development initiatives.', dataAiHint: 'financial institution' },
  { name: 'Major Public Sector Bank', logo: 'https://placehold.co/200x100.png', role: 'Term loans and working capital facilities.', dataAiHint: 'bank logo' },
  { name: 'Leading Private Sector Bank', logo: 'https://placehold.co/200x100.png', role: 'Collaborating on co-lending opportunities and specialized financial products.', dataAiHint: 'bank emblem' },
];

const partnerQuotes = [
    { quote: "Shine Blue Hire's commitment to rural finance aligns perfectly with our mission. We are proud to partner with them.", source: "Senior Official, NABARD (Dummy)", dataAiHint: "person portrait" },
    { quote: "Their deep understanding of the MSME sector makes Shine Blue Hire a valuable partner in driving economic growth.", source: "Manager, SIDBI (Dummy)", dataAiHint: "professional headshot" },
];

export default function OurLendersPage() {
  return (
    <PageContainer>
      <SectionContainer title="Our Esteemed Lenders & Partners" subtitle="Fueling Our Growth and Reach" className="pt-0 md:pt-0">
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          We are proud to collaborate with leading financial institutions and banks who share our vision of empowering communities. Their support is instrumental in our ability to provide accessible finance across India.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lenders.map((lender, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="w-full h-24 relative mb-4 bg-muted flex items-center justify-center rounded-t-lg">
                  <Image src={lender.logo} alt={`${lender.name} logo`} width={150} height={75} objectFit="contain" data-ai-hint={lender.dataAiHint} />
                </div>
                <CardTitle className="font-headline text-xl text-primary">{lender.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h4 className="font-semibold text-sm text-accent mb-1">Role:</h4>
                <p className="text-sm text-muted-foreground">{lender.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Partner Testimonials" subtitle="Voices of Collaboration" className="bg-secondary/30">
         {partnerQuotes.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {partnerQuotes.map((item, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6">
                  <MessageSquare className="h-8 w-8 text-accent mb-4" />
                  <p className="text-muted-foreground italic mb-4">"{item.quote}"</p>
                  <p className="text-sm font-semibold text-primary text-right">- {item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Partner testimonials will be featured here soon.</p>
        )}
      </SectionContainer>
    </PageContainer>
  );
}
