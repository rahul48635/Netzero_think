"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, MessageCircle} from "lucide-react"
import { motion } from 'framer-motion'
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    solution: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your NET ZERO solutions. Please get back to me.")
    window.open(`https://wa.me/+918240615694?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen min-w-screen bg-[url('/bg-cover/meeting.png')] bg-center bg-fixed bg-cover bg-no-repeat">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-blue-800 mt-30 sm:mt-50">
        <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Contact Us
        </motion.h1>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            “If Reaching ‘NET ZERO’ Is Your Ultimate Goal, We’re There To Make This Journey Memorable And Remarkable”.
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-lg opacity-90 text-black">
              Tell us about your business requirements, we will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Get In Touch</CardTitle>
                <CardDescription className="text-blue-800 font-bold">
                  Share your business requirements and let&apos;s start your NET ZERO journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        required
                        className="placeholder:text-blue-800"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        required
                        className="placeholder:text-blue-800"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className="placeholder:text-blue-800"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enter your company name"
                        className="placeholder:text-blue-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>FOR QUESTIONS OR QUOTES - Select a solution</Label>
                    <Select
                      value={formData.solution}
                      onValueChange={(value) => setFormData({ ...formData, solution: value })}
                    >
                      <SelectTrigger className="text-blue-800" >
                        <SelectValue placeholder="Choose a solution" />
                      </SelectTrigger>
                      <SelectContent className="text-blue-800">
                        <SelectItem value="carbon-footprint">Carbon Footprint Assessment</SelectItem>
                        <SelectItem value="renewable-energy">Renewable Energy Solutions</SelectItem>
                        <SelectItem value="sustainability-consulting">Sustainability Consulting</SelectItem>
                        <SelectItem value="net-zero-strategy">NET ZERO Strategy Development</SelectItem>
                        <SelectItem value="green-technology">Green Technology Implementation</SelectItem>
                        <SelectItem value="environmental-compliance">Environmental Compliance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Business Requirements *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business requirements and NET ZERO goals..."
                      className="min-h-[120px] placeholder:text-blue-800"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* WhatsApp Section */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-800">Quick Response via WhatsApp</h3>
                    <p className="text-green-600 text-sm">Get instant support and quick quotes</p>
                  </div>
                  <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600">
                    Message us on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Company Info and Map */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700">NET ZERO THINK PVT. LTD</CardTitle>
                <CardDescription className="text-blue-800">Your Climate Solution Partner</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3 ">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-800">Office Address</h4>
                    <p className="text-blue-800 leading-relaxed">
                      Kokarya Business Synergy Centre,
                      <br />
                      Nagananda Commercial Complex, No.07/3,
                      <br />
                      15/1, Second Floor, 18th Main Road,
                      <br />
                      Jayanagar 9 Block,
                      <br />
                      Bengaluru - 560041, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-800">Phone</h4>
                    <p className="text-blue-800">+91 82406 15694</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-800">Email</h4>
                    <p className="text-blue-800">For Solutions & Services - support@netzerothink.com</p>
                    <p className="text-blue-800">For Training & Capacity Building - academia@netzerothink.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-800">Find Us</CardTitle>
                <CardDescription className="text-blue-800">Visit our office in Jayanagar, Bengaluru</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-80 rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=Net%20Zero%20Think%20Bengaluru%2C%20Karnataka&t=m&z=14&output=embed&iwloc=near"
                    width="120%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NET ZERO THINK PVT. LTD Office Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <section className=" text-blue-800 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your NET ZERO Journey?</h2>
          <p className="text-xl mb-8 opacity-90 text-black">
            Let&apos;s work together to create a sustainable future for your business and our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="cursor-pointer text-green-500 hover:bg-gray-300 hover:text-blue-500 bg-gray-200" onClick={handleWhatsApp}>
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-blue-800 bg-gray-200 border-white hover:bg-gray-300 hover:text-blue-500 cursor-pointer"
              onClick={()=>window.open('mailto:support@netzerothink.com')}
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
