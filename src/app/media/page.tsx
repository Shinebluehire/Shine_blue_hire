import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '@/components/shared/page-container';
import { SectionContainer } from '@/components/shared/section-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, Image as ImageIcon, Video, Download } from 'lucide-react';

const newsArticles = [
  { title: 'Shine Blue Hire Expands to New Regions', date: '2024-03-15', source: 'Financial Times (Dummy)', link: '#', summary: 'Furthering its commitment to financial inclusion, Shine Blue Hire today announced expansion into three new rural districts.' },
  { title: 'NBFC Sector Growth Outlook Positive', date: '2024-02-28', source: 'Business Standard (Dummy)', link: '#', summary: 'Experts predict a strong growth trajectory for NBFCs focusing on underserved markets in the coming fiscal year.' },
  { title: 'Shine Blue Awarded for Excellence in Rural Finance', date: '2024-01-10', source: 'Rural India Conclave (Dummy)', link: '#', summary: 'Recognized for its significant contributions to empowering rural communities through accessible financial products.' },
];

const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Company event', dataAiHint: 'corporate event' },
  { src: 'https://placehold.co/600x400.png', alt: 'New branch opening', dataAiHint: 'branch opening' },
  { src: 'https://placehold.co/600x400.png', alt: 'Community outreach program', dataAiHint: 'community outreach' },
  { src: 'https://placehold.co/600x400.png', alt: 'Team building activity', dataAiHint: 'team building' },
];

const downloads = [
  { name: 'Company Brochure 2024', link: '/downloads/brochure.pdf', type: 'PDF' },
  { name: 'Annual Report 2023 (Summary)', link: '/downloads/annual-report-summary.pdf', type: 'PDF' },
  { name: 'Product Catalog', link: '/downloads/product-catalog.pdf', type: 'PDF' },
];

export default function MediaPage() {
  return (
    <PageContainer>
      <SectionContainer title="Media & Resources" subtitle="Stay Informed About Shine Blue Hire" className="pt-0 md:pt-0">
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Explore our latest news, press releases, event gallery, and downloadable resources to learn more about our activities and impact.
        </p>
      </SectionContainer>

      <SectionContainer title="News & Press Releases" subtitle="Latest Updates">
        <div className="space-y-6">
          {newsArticles.map((article, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">{article.title}</CardTitle>
                <CardDescription>
                  {article.date} - <span className="italic">{article.source}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{article.summary}</p>
                <Button variant="link" asChild className="p-0 h-auto text-accent hover:text-accent/80">
                  <Link href={article.link}>Read More &rarr;</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Gallery" subtitle="Moments from Shine Blue Hire" className="bg-secondary/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden shadow-md">
              <div className="aspect-video relative">
                <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" data-ai-hint={image.dataAiHint} />
              </div>
              <CardContent className="p-3 text-center">
                <p className="text-sm text-muted-foreground">{image.alt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>
      
      <SectionContainer title="Videos (Optional)" subtitle="Visual Stories">
         <div className="text-center text-muted-foreground">
            <Video className="h-12 w-12 mx-auto mb-4 text-primary" />
            <p>Video content will be featured here. Check back soon for updates.</p>
            {/* Example placeholder for an embedded video
            <div className="aspect-video max-w-2xl mx-auto mt-6 bg-muted rounded-lg shadow-md">
              <Image src="https://placehold.co/600x338/E0E0E0/B0B0B0?text=Video+Placeholder" alt="Video placeholder" width={600} height={338} className="rounded-lg" data-ai-hint="corporate video"/>
            </div>
            */}
        </div>
      </SectionContainer>

      <SectionContainer title="Downloads" subtitle="Brochures & Reports" className="bg-secondary/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((doc, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-1">
                    <Download className="h-5 w-5 mr-2 text-accent" />
                    <h4 className="font-semibold text-primary">{doc.name}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">Type: {doc.type}</p>
                </div>
                <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href={doc.link} target="_blank" rel="noopener noreferrer">Download</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
