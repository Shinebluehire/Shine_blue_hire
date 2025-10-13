import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  detailsLink: string;
  features?: string[];
  ticketSize?: string;
  interestRate?: string;
  tenure?: string;
  image?: string;
}


export function ProductCard({
  icon: Icon,
  title,
  description,
  detailsLink,
  features,
  ticketSize,
  interestRate,
  tenure,
  image,
}: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      {image && (
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={`${title} banner`}
            fill
            className="object-cover rounded-t-lg"
            priority
          />
        </div>
      )}
      <CardHeader className="items-center text-center">
        <div className="p-3 bg-accent/10 rounded-full mb-3">
          <Icon className="h-10 w-10 text-accent" />
        </div>
        <CardTitle className="font-headline text-xl text-primary">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {ticketSize && <p className="text-sm mb-1"><span className="font-semibold">Ticket Size:</span> {ticketSize}</p>}
        {tenure && <p className="text-sm mb-3"><span className="font-semibold">Tenure:</span> {tenure}</p>}
        {features && features.length > 0 && (
          <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href={detailsLink}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
