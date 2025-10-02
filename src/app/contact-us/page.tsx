
import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '@/components/shared/page-container';
import { SectionContainer } from '@/components/shared/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle, Building2, TrendingUp } from 'lucide-react';

const liveBranches = [
  "Sikar - Rajasthan",
  "Nawalgarh - Rajasthan",
  "Khatushyamji - Rajasthan",
  "Ringus - Rajasthan",
  "Jaipur - Rajasthan"
];

const expansionBranches = [
  "Ajeetgarh - Rajasthan",
  "Udaipurwati - Rajasthan",
  "Kuchamancity - Rajasthan",
  "Fathepur - Shekhawati - Rajasthan",
  "Jhunjhunu - Rajasthan",
  "Churu - Rajasthan"
];

export default function ContactUsPage() {
  return (
    <PageContainer>
      <SectionContainer title="Get In Touch" subtitle="We're Here to Help" className="pt-0 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Column */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Contact Info Column */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-1">Registered Office</h4>
                  <p className="text-muted-foreground flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" />
                    Shop no. 5, 3rd floor, City square, near Kesar petrol pump, G.T Road , Jalandhar, Jalandhar, PB 144001
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Corporate Office</h4>
                  <p className="text-muted-foreground flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" />
                    Near Thar Honda, Jaipur road, Sikar, Rajasthan 332001
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <a href="tel:01572245235" className="text-muted-foreground hover:text-primary">01572-245235</a>
                </div>
                 <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <a href="tel:9251200245" className="text-muted-foreground hover:text-primary">9251200245</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <a href="mailto:info@shinebluehire.com" className="text-muted-foreground hover:text-primary">info@shinebluehire.com</a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">Our Branches</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <Building2 className="h-5 w-5 mr-2 text-accent" />
                    <h5 className="font-semibold text-md text-primary">Live Branches</h5>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2 text-sm">
                    {liveBranches.map((branch, index) => (
                      <li key={`live-${index}`}>{branch}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                     <TrendingUp className="h-5 w-5 mr-2 text-accent" />
                    <h5 className="font-semibold text-md text-primary">Branch Expansion</h5>
                  </div>
                   <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2 text-sm">
                    {expansionBranches.map((branch, index) => (
                      <li key={`expansion-${index}`}>{branch}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
              <a href="https://wa.me/919251200245" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Support on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer title="Our Location" subtitle="Visit Us" className="bg-secondary/30">
        <Card className="shadow-lg overflow-hidden">
          <CardContent className="p-0">
            {/* Google Map Embed Placeholder */}
            <div className="aspect-video w-full bg-muted flex items-center justify-center">
               <Image
                  src="https://placehold.co/1200x600.png"
                  alt="Google Map Embed showing company location"
                  width={1200}
                  height={600}
                  className="object-cover"
                  data-ai-hint="map location"
                />
            </div>
          </CardContent>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
}
