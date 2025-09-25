
import Image from 'next/image';
import { PageContainer } from '@/components/shared/page-container';
import { SectionContainer } from '@/components/shared/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Scale, Building, Milestone, Heart } from 'lucide-react';

const timelineEvents = [
  { year: '1990', event: 'Company Inception: Shine Blue Hire Purchase Private Limited incorporated on 18th September 1990. Registered with the Registrar of Companies, Chandigarh.' },
  { year: '2005', event: 'Expansion into MSME Lending: Diversified portfolio to support small and medium enterprises.' },
  { year: '2015', event: 'Digital Transformation: Launched digital platforms for easier loan application and management.' },
  { year: '2019', event: 'New Management & Operations Relaunch: Operations were launched under the current management on 18th September 2019, renewing focus on growth and inclusivity under the leadership of Mr. Surender Kumar Kandoi and Mr. Girish Kandoi.' },
  { year: '2023', event: 'Rural Outreach Milestone: Reached 100+ rural touchpoints, significantly expanding financial inclusion.' },
];

const coreValues = [
  {
    icon: Scale,
    title: 'Equality',
    description: "We know the difference between right and wrong and choose to do what's right - for our employees & customers. We seek out diverse perspectives, communicate openly and honestly, and treat others with respect."
  },
  {
    icon: Target,
    title: 'Result Driven',
    description: 'Functional changes in the system to smooth line the system and to achieve the company vision.'
  },
  {
    icon: Heart,
    title: 'Customer Centricity',
    description: 'We focus our energies into creating satisfactory customer experience.'
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'We work together, trusting each other to share knowledge openly and engage collaboratively to deliver our best work as a team.'
  }
];

export default function AboutUsPage() {
  return (
    <PageContainer>
      <SectionContainer title="About Shine Blue Hire Purchase Pvt. Ltd." subtitle="Our Story, Mission, and Values" className="pt-0 md:pt-0">
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Company office or team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                  data-ai-hint="modern office"
                />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-semibold text-primary mb-4">Company Introduction</h3>
                <p className="text-muted-foreground mb-3">
                  Shine Blue Hire Purchase Private Limited was originally incorporated as “Shine Blue Hire Purchase Private Limited” on 18th September, 1990 vide Certificate of Incorporation No. 06-13554 of 1990-1991 issued by the Registrar of Companies, Punjab, Himachal Pradesh & Chandigarh at Jalandhar.
                </p>
                <p className="text-muted-foreground mb-3">
                  The company holds a Certificate of Registration No. B-06.00165 dated 10th April 2000, issued by the Reserve Bank of India to carry on the business of Non-Banking Financial Institution without accepting public deposits under Section 45 IA of the Reserve Bank of India Act, 1934.
                </p>
                <p className="text-muted-foreground mb-3">
                  In the year 2019, the company was taken over by the current management under the leadership of Mr. Surender Kumar Kandoi and Mr. Girish Kandoi, who envisioned building an organization focused on growth and financial inclusivity.
                </p>
                <p className="text-muted-foreground">
                  We are primarily engaged in the business of providing vehicle loans (Wheeler, Wheels - Commercial Vehicle, Cars), Tractor loans, and MSME (SBL) loans to customers belonging to lower and middle-income segments in semi-urban and rural areas. Our key focus areas are simple processes, minimal documentation, flexible repayment options, and a hassle-free and efficient sanctioning process.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </SectionContainer>

      <SectionContainer title="Our Journey" subtitle="Milestone Highlights" className="bg-secondary/30">
        <div className="space-y-8">
          {timelineEvents.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                {item.year}
              </div>
              <div>
                <h4 className="font-semibold text-lg text-primary-700 mb-1">{item.event.split(':')[0]}</h4>
                <p className="text-muted-foreground">{item.event.split(': ').slice(1).join(': ')}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Vision & Mission">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Target className="h-8 w-8 text-accent mr-3" />
                <CardTitle className="font-headline text-xl text-primary">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                (English) We believe in equality we want to create one platform for every customer to fulfill every small & big financial need so we can proud as a financiers.
              </p>
              <p className="text-muted-foreground">
                (Hindi) हम समानता में विश्वास करते हैं, हम प्रत्येक ग्राहक के लिए हर छोटी और बड़ी वित्तीय ज़रूरत को पूरा करने के लिए एक मंच बनाना चाहते हैं ताकि हम एक फाइनेंसर के रूप में गर्व कर सकें।
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Building className="h-8 w-8 text-accent mr-3" />
                <CardTitle className="font-headline text-xl text-primary">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>To increase our presence in rural and Semi-urban areas to reach out the target customer to provide them with financial support.</li>
                <li>Make functional changes in the system to smooth line the system and to achieve the company vision.</li>
                <li>To bring stable changes in customer lives to uplift their life style and to generate employment to support economics of the country.</li>
                <li>To promote entrepreneurship, and to fund them to develop their dreams.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      <SectionContainer title="Company Philosophy & Values" subtitle="Guiding Our Actions" className="bg-secondary/30">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value) => (
            <Card key={value.title} className="text-center shadow-md">
              <CardHeader className="items-center">
                <div className="p-3 bg-accent/10 rounded-full mb-2">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline text-lg text-primary">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
