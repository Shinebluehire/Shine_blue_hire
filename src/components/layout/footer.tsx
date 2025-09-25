import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Landmark } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Landmark className="h-8 w-8" />
              <span className="font-headline text-xl font-semibold">Shine Blue Hire</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Providing trusted financial services since 1990. Empowering rural and semi-urban communities.
            </p>
          </div>

          <div>
            <h5 className="font-headline text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-sm hover:underline text-primary-foreground/80">About Us</Link></li>
              <li><Link href="/products" className="text-sm hover:underline text-primary-foreground/80">Our Products</Link></li>
              {/* <li><Link href="/services" className="text-sm hover:underline text-primary-foreground/80">Services</Link></li> */}
              <li><Link href="/contact-us" className="text-sm hover:underline text-primary-foreground/80">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-headline text-lg font-semibold mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><Link href="/governance#policies" className="text-sm hover:underline text-primary-foreground/80">Privacy Policy</Link></li>
              <li><Link href="/governance#policies" className="text-sm hover:underline text-primary-foreground/80">Terms & Conditions</Link></li>
              <li><Link href="/governance#kyc" className="text-sm hover:underline text-primary-foreground/80">KYC Policy</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-headline text-lg font-semibold mb-4">Connect With Us</h5>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            &copy; {currentYear} Shriram and Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
