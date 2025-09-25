
import { PageContainer } from '@/components/shared/page-container';
import { SectionContainer } from '@/components/shared/section-container';
import { ProductCard } from '@/components/shared/product-card';
import { Truck, Landmark, Bike, Briefcase } from 'lucide-react';
// import { PageContainer } from '@/components/shared/page-container';
// import { SectionContainer } from '@/components/shared/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaqSuggester } from '@/components/faq-suggester';
import { ListChecks, Users, DollarSign, ShieldCheck, MessageSquare, UserCheck, Milestone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const loanProducts = [
  {
    id: 'used-commercial-vehicle',
    icon: Truck,
    title: 'Used Commercial Vehicle',
    description: 'Finance for pre-owned commercial vehicles to support your logistics and transport business.',
    detailsLink: '/products/used-commercial-vehicle',
    ticketSize: 'Up to ₹15 Lakhs',
    interestRate: '22%',
    tenure: 'Up to 36 Months',
    features: ['Processing Fee: 2%'],
    image: '/images/banner/UCV.jpg',
  },
  {
    id: 'msme-secured-loan',
    icon: Landmark,
    title: 'MSME Secured Loan',
    description: 'Secured working capital loans for MSMEs with attractive ROI and long tenure.',
    detailsLink: '/products/msme-secured-loan',
    ticketSize: 'Up to ₹10 Lakhs',
    interestRate: '23%',
    tenure: 'Up to 60 Months',
    features: ['Processing Fee: 2.5%'],
    image: '/images/banner/msme.jpg',
  },
  {
    id: 'two-wheeler-loan',
    icon: Bike,
    title: 'Two-Wheeler Loan',
    description: 'Affordable loan solutions to help you own your dream two-wheeler with ease.',
    detailsLink: '/products/two-wheeler-loan',
    ticketSize: 'Up to ₹2.5 Lakhs',
    interestRate: '24%',
    tenure: 'Up to 30 Months',
    features: ['Processing Fee: 2%'],
    image: '/images/banner/TWL.png',
  },
  {
    id: 'msme-unsecured-loan',
    icon: Briefcase,
    title: 'MSME Unsecured Loan',
    description: 'Unsecured loans designed for small enterprises needing fast, collateral-free capital.',
    detailsLink: '/products/msme-unsecured-loan',
    ticketSize: 'Up to ₹5 Lakhs',
    interestRate: '30%',
    tenure: 'Up to 36 Months',
    features: ['Processing Fee: 3%'],
    image: '/images/banner/msme2.jpg',
  },
];

const servicesOffered = [
  { icon: DollarSign, title: 'Loan Disbursal', description: 'Efficient and timely disbursal of approved loan amounts.' },
  { icon: MessageSquare, title: 'Customer Support', description: 'Dedicated support channels for queries and assistance.' },
  { icon: ShieldCheck, title: 'Financial Advisory', description: 'Basic guidance to help customers make informed financial decisions.' },
  { icon: UserCheck, title: 'Account Management', description: 'Easy access to loan account details and repayment tracking.' },
];

const customerSegments = [
  { title: 'Rural Individuals & Families', description: 'Tailored financial products for agricultural needs, personal expenses, and small businesses in rural areas.' },
  { title: 'Semi-Urban Population', description: 'Loans for small businesses, vehicle purchases, and property in developing towns and cities.' },
  { title: 'Micro, Small & Medium Enterprises (MSMEs)', description: 'Working capital, term loans, and other financial solutions for business growth.' },
  { title: 'Farmers & Agri-preneurs', description: 'Specialized loans for tractors, equipment, and other agricultural inputs.' },
];

const applicationProcessSteps = [
  { step: 1, title: 'Enquiry & Eligibility Check', description: 'Contact us or visit a branch. We will assess your needs and basic eligibility.' },
  { step: 2, title: 'Application Submission', description: 'Fill out the loan application form and submit required documents (KYC, income proof, etc.).' },
  { step: 3, title: 'Verification & Credit Appraisal', description: 'We verify your documents and assess your creditworthiness.' },
  { step: 4, title: 'Loan Sanction', description: 'If approved, you will receive a sanction letter outlining loan terms.' },
  { step: 5, title: 'Agreement & Disbursal', description: 'Sign the loan agreement, and the loan amount will be disbursed to your account.' },
];

const commonFaqs = [
  { question: "What documents are required to apply for a loan?", answer: "Common documents include KYC (Aadhaar, PAN), income proof, bank statements, and property documents for secured loans. Specific requirements vary by loan type." },
  { question: "How long does it take to get a loan approved?", answer: "Approval times vary depending on the loan type and completeness of documentation. We strive for quick processing, often within a few working days." },
  { question: "Can I prepay my loan?", answer: "Yes, prepayment options are available. Terms and conditions, including any applicable charges, will be detailed in your loan agreement." },
  { question: "How can I check my loan status or outstanding balance?", answer: "You can contact our customer support, visit a branch, or use our online portal (if available) to check your loan details." },
];


export default function ProductsPage() {
  return (
    <PageContainer>
      <SectionContainer
        title="Our Services"
        subtitle=""
        className="pt-0 md:pt-0"
      >
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          We offer specialized loan products tailored for your needs — whether it's a used vehicle, MSME expansion, or your next two-wheeler.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {loanProducts.map((product, index) => (
            <div key={product.id} id={product.id} className="scroll-mt-20 animate-fadeInSlideUp" style={{ animationDelay: `${index * 0.2}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Our Services" subtitle="Supporting Your Financial Journey" className="pt-0 md:pt-0">
              <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                At Shine Blue Hire Purchase, we provide a range of services designed to make your financial experience smooth and supportive. From loan disbursal to ongoing customer care, we are here for you.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {servicesOffered.map((service) => (
                  <Card key={service.title} className="text-center shadow-md">
                    <CardHeader className="items-center">
                      <div className="p-3 bg-primary/10 rounded-full mb-2">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="font-headline text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </SectionContainer>
      
            <SectionContainer title="Customer Segments We Serve" subtitle="Understanding Diverse Needs" className="bg-secondary/30">
              <div className="grid md:grid-cols-2 gap-8">
                {customerSegments.map((segment) => (
                  <Card key={segment.title} className="shadow-md">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <Users className="h-7 w-7 text-accent mr-3" />
                        <CardTitle className="font-headline text-xl text-primary">{segment.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{segment.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </SectionContainer>
      
            <SectionContainer title="Loan Application Process" subtitle="Simple Steps to Your Loan">
               <div className="space-y-6">
                {applicationProcessSteps.map((item) => (
                  <div key={item.step} className="flex items-start space-x-4 p-4 border rounded-lg shadow-sm bg-card">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-primary mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionContainer>
            
            <SectionContainer title="Frequently Asked Questions" subtitle="Your Queries Answered" className="bg-secondary/30">
              <Accordion type="single" collapsible className="w-full">
                {commonFaqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="font-headline text-left hover:no-underline text-primary">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </SectionContainer>
      
            <SectionContainer title="AI-Powered FAQ Suggester" subtitle="Help Us Improve Our FAQs">
              <FaqSuggester />
            </SectionContainer>
    </PageContainer>
  );
}
