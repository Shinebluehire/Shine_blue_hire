
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

import { PageContainer } from "@/components/shared/page-container";
import { SectionContainer } from "@/components/shared/section-container";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Link as LinkIcon,
  Loader2,
  Users,
  ThumbsUp,
  Briefcase,
  MapPin,
  Info,
} from "lucide-react";

const jobOpenings = [
  { title: "Loan Officer", location: "Mumbai, MH", applyLink: "#" },
  { title: "Branch Manager", location: "Pune, MH", applyLink: "#" },
  { title: "Customer Service Executive", location: "Nagpur, MH", applyLink: "#" },
  { title: "Collections Specialist", location: "Remote/Field", applyLink: "#" },
];

const companyValues = [
  {
    icon: Users,
    name: "Collaboration",
    description: "We believe in teamwork and mutual support to achieve common goals.",
  },
  {
    icon: ThumbsUp,
    name: "Growth",
    description: "We foster an environment for personal and professional development.",
  },
  {
    icon: Briefcase,
    name: "Impact",
    description: "Join us to make a real difference in people's lives through financial inclusion.",
  },
];

const applicationFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, "Please enter a valid phone number."),
  resume: z.string().url({ message: "Please enter a valid Google Drive link." }).min(1, "Resume link is required."),
  coverLetter: z.string().optional(),
});

export default function CareerPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof applicationFormSchema>>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof applicationFormSchema>) => {
    setIsLoading(true);

    try {
      const templateParams = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        coverLetter: values.coverLetter || "Not provided",
        resume_link: values.resume,
      };

      await emailjs.send(
        "service_qchflq5",
        "template_6rgx9if",
        templateParams,
        "gHn8Rn7L1ogeEOLLE"
      );

      toast({
        title: "Application Submitted!",
        description:
          "Thank you! We've received your application and will be in touch if there's a good fit.",
      });

      form.reset();
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: `There was a problem sending your application. Error: ${error?.text || 'Please try again later.'}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      {/* Hero Banner */}
      <SectionContainer
        title="Join Our Team"
        subtitle="Grow With Shine Blue Hire"
        className="pt-0 md:pt-0"
      >
        <div className="relative mb-12 overflow-hidden rounded-lg shadow-xl aspect-[16/7]">
          <Image
            src="/images/img_join.jpeg"
            alt="Diverse team working collaboratively"
            layout="fill"
            objectFit="cover"
            className="object-cover"
            data-ai-hint="team collaboration"
          />
        </div>

        {/* Company Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {companyValues.map((value, i) => (
            <Card key={i} className="text-center shadow-md">
              <CardHeader className="items-center">
                <div className="p-3 bg-accent/10 rounded-full mb-3">
                  <value.icon className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-xl text-primary">{value.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Application Form */}
      <SectionContainer title="General Application" subtitle="Don’t See a Fit? We Still Want to Hear From You!">
        <Card className="shadow-xl max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Submit Your Profile</CardTitle>
            <CardDescription>We’ll reach out when we have a match for your skills.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl><Input placeholder="Your Name" {...field} disabled={isLoading} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl><Input type="email" placeholder="you@example.com" {...field} disabled={isLoading} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl><Input type="tel" placeholder="+91 XXXXX XXXXX" {...field} disabled={isLoading} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormLabel>Resume Link (Public Google Drive)</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p className="font-bold mb-2">How to get a public link:</p>
                              <ol className="list-decimal list-inside space-y-1 text-xs">
                                <li>Upload your resume to Google Drive.</li>
                                <li>Right-click the file and select "Share".</li>
                                <li>Change "General access" to "Anyone with the link".</li>
                                <li>Click "Copy link" and paste it here.</li>
                              </ol>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="url"
                            placeholder="https://docs.google.com/document/d/..."
                            {...field}
                            disabled={isLoading}
                          />
                          <LinkIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="coverLetter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cover Letter (Optional)</FormLabel>
                      <FormControl><Textarea rows={4} placeholder="Tell us about yourself..." {...field} disabled={isLoading} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent text-white hover:bg-accent/90" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Submit Application
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
}
