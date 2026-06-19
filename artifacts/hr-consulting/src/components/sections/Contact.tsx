import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().min(2, "Company must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      service: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("dharapatel165@outlook.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Form Origin": "Quark Talent Enquiry",
          "Client Name": values.name,
          "Company": values.company,
          "Client Email": values.email,
          "Requested Service": values.service,
          "Message Details": values.message
        })
      });

      if (response.ok) {
        toast({
          title: "Request Received",
          description: "A Quark Talent partner will contact you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error("Form delivery failed");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem delivering your message. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Initiate a Partnership</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-md">
              Whether you need to secure transformative leadership or architect a scalable HR framework, our partners are ready to advise.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-lg mb-2">New Jersey</h4>
                <p className="text-muted-foreground">Newport, NJ</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Toronto</h4>
                <p className="text-muted-foreground">Toronto, ON</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Contact</h4>
                <p className="text-muted-foreground">
                  <a href="mailto:partner@quarktalent.com" className="hover:text-foreground transition-colors">partner@quarktalent.com</a>
                  <br />Tel: +1 (917) 654-7106
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 md:p-10 rounded-2xl shadow-sm border"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Corporate Email</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
<FormField
  control={form.control}
  name="phone"
  render={({ field }) => (
    <FormItem className="mt-4">
      <FormLabel>Phone Number</FormLabel>
      <FormControl>
        <Input placeholder="" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="recruitment">Recruitment Needs</SelectItem>
                          <SelectItem value="strategy">Talent Strategy</SelectItem>
                          <SelectItem value="hris">HRIS Implementation</SelectItem>
                          <SelectItem value="interim">Leadership Advisory</SelectItem>
                          <SelectItem value="other">Other Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message / Context</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Briefly describe your current organizational needs..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white" data-testid="contact-submit">
                  Submit Inquiry
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
