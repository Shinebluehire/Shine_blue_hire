"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function LoanEnquiryModal() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_qchflq5",         // Your Service ID
        "template_n6jjiar",        // Your Template ID
        formRef.current!,          // Form ref
        "gHn8Rn7L1ogeEOLLE"        // Your Public Key
      );

      toast({
        title: "Enquiry Sent!",
        description: "We’ve received your enquiry. Our team will contact you shortly.",
      });

      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="border-accent-foreground text-accent-foreground bg-accent hover:bg-accent-foreground hover:text-accent transition-all duration-300"
        >
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Loan Enquiry</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] w-full">
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
            <Input placeholder="Full Name" {...register("name", { required: true })} />
            <Input placeholder="Email Address" type="email" {...register("email", { required: true })} />
            <Input placeholder="Phone Number" type="tel" {...register("phone", { required: true })} />
            <Input placeholder="City / Location" {...register("location", { required: true })} />
            <Input placeholder="Loan Type (e.g., Used Commercial Vehicle)" {...register("loanType", { required: true })} />
            <Input placeholder="Loan Amount (in ₹)" type="number" {...register("loanAmount", { required: true })} />
            <Input placeholder="Employment Type (Salaried / Self-employed)" {...register("employmentType", { required: true })} />
            <Input placeholder="Monthly Income (in ₹)" type="number" {...register("monthlyIncome", { required: true })} />
            <Textarea placeholder="Additional message (optional)" {...register("message")} />

            <Button type="submit" className="w-full bg-primary text-white" disabled={loading}>
              {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Submit Enquiry
            </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
