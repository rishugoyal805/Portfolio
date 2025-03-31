"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Resend } from "resend"
import emailjs from "@emailjs/browser";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })


  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);  // Prevent multiple submissions
  
    try {
      const response = await emailjs.send(
        serviceID!,
        templateID!,
        { name: formData.name, email: formData.email, subject: formData.subject, message: formData.message },
        publicKey!
      );
  
      console.log("Email sent successfully", response);
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });  // Reset form
    } catch (error) {
      console.error("Error sending email", error);
      alert("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "rishugoyal16800@gmail.com",
      link: "mailto:rishugoyal16800@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 8059870163",
      link: "tel:+918059870163",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Noida, Uttar Pradesh, India",
      link: "https://maps.google.com/?q=Noida,UttarPradesh,India",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions, opportunities, or just to say hello. I'll get back to you as
            soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row lg:flex-col items-center text-center sm:text-left lg:text-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.details}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        disabled={isSubmitting}
                      />
                      <label htmlFor="name">Enter your full name</label>
                    </div>

                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        disabled={isSubmitting}
                      />
                      <label htmlFor="email">Enter your email address</label>
                    </div>
                  </div>

                  <div className="relative">
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      disabled={isSubmitting}
                    />
                    <label htmlFor="subject">What's your message about?</label>
                  </div>

                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      rows={5}
                      required
                      disabled={isSubmitting}
                    />
                    <label htmlFor="message">Type your message here...</label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}