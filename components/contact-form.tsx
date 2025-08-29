"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
})

type ContactFormData = z.infer<typeof contactFormSchema>



export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      agreeToTerms: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      
      console.log("Form data:", data)
      
      // Show success message
      toast.success("Message sent successfully! I&apos;ll get back to you soon.", {
        description: "Thank you for reaching out about your project.",
      })
      
      setIsSubmitted(true)
      reset()
    } catch {
      toast.error("Failed to send message. Please try again.", {
        description: "There was an error sending your message.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground mb-6">
              Thank you for reaching out. I&apos;ll review your project details and get back to you within 24 hours.
            </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-primary hover:bg-primary/90 btn-animate"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto contact-form-animate">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <Card className="contact-info-animate">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm text-muted-foreground">sabinatimilsina@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-muted-foreground">Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-3">Available for:</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• CAD Design & Modeling</li>
                  <li>• Thermal Analysis</li>
                  <li>• Mechanical Design</li>
                  <li>• Engineering Consultation</li>
                  <li>• Project Management</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <Card className="contact-info-animate">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Contact Me</CardTitle>
              <p className="text-muted-foreground text-sm sm:text-base">
                Send me a message and I&apos;ll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4 form-field-animate">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Your full name"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your.email@example.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 form-field-animate">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="+977 9803216073"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2 form-field-animate">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Terms Agreement */}
                <div className="space-y-4 form-field-animate">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={watch("agreeToTerms")}
                      onCheckedChange={(checked) => setValue("agreeToTerms", checked as boolean)}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the terms and conditions *
                      </Label>
                      {errors.agreeToTerms && (
                        <p className="text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.agreeToTerms.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground form-field-animate btn-animate"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
