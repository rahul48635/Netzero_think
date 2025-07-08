// app/about/page.tsx or components/AboutPage.jsx

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target, Eye, Heart, Lightbulb, Shield} from "lucide-react"

export default function AboutPage() {
  const values = [
    { icon: <Lightbulb className="h-8 w-8" />, title: "Innovation", description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions." },
    { icon: <Heart className="h-8 w-8" />, title: "Integrity", description: "We maintain the highest ethical standards in all our business practices and relationships." },
    { icon: <Users className="h-8 w-8" />, title: "Collaboration", description: "We believe in the power of teamwork and foster an inclusive environment for all." },
    { icon: <Shield className="h-8 w-8" />, title: "Excellence", description: "We strive for perfection in everything we do and never settle for mediocrity." },
  ]

  const teamMembers = [
    { name: "Sarah Johnson", role: "CEO & Founder", image: "/placeholder.svg", bio: "10+ years of experience in tech leadership and startup ecosystem." },
    { name: "Michael Chen", role: "CTO", image: "/placeholder.svg", bio: "Former senior engineer at Google with expertise in scalable systems." },
    { name: "Emily Rodriguez", role: "Head of Product", image: "/placeholder.svg", bio: "Product strategist with a track record of successful product launches." },
    { name: "David Kim", role: "Head of Engineering", image: "/placeholder.svg", bio: "Full-stack developer passionate about clean code and architecture." },
  ]

  const advisors = [
    { name: "Dr. Priya Sharma", role: "Strategic Advisor", image: "/placeholder.svg", bio: "Former VP at Microsoft, expert in enterprise solutions and market expansion." },
    { name: "James Wilson", role: "Technology Advisor", image: "/placeholder.svg", bio: "Serial entrepreneur and angel investor with 3 successful exits." },
    { name: "Lisa Chang", role: "Business Advisor", image: "/placeholder.svg", bio: "McKinsey partner specializing in digital transformation and growth strategy." },
  ]

  const awards = [
    { title: "Best Startup of the Year 2023", organization: "Tech Innovation Awards", image: "/placeholder.svg" },
    { title: "Excellence in Product Design", organization: "Design Excellence Awards", image: "/placeholder.svg" },
    { title: "Top 50 Emerging Companies", organization: "Business Today", image: "/placeholder.svg" },
    { title: "Innovation Leadership Award", organization: "Industry Leaders Forum", image: "/placeholder.svg" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 mt-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
          About Our Company
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We are a forward-thinking technology company creating innovative solutions that transform lives.
        </p>
      </section>

      {/* Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-8 w-8 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Our Vision</h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">To be the global leader in innovative technology solutions.</p>
            <p className="text-muted-foreground">We envision a world where technology integrates with human potential for growth and impact.</p>
          </div>
          <Image src="/placeholder.svg" alt="Vision" width={600} height={400} className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Image src="/placeholder.svg" alt="Mission" width={600} height={400} className="rounded-lg shadow-lg w-full max-w-md mx-auto order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Our Mission</h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">To deliver exceptional tech solutions that drive innovation and value.</p>
            <p className="text-muted-foreground">We are committed to excellence, integrity, and continuous learning.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The principles that guide our decisions and shape our culture</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Our Core Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Meet the passionate individuals driving our mission forward</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <Card key={i} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
              <Image src={member.image} alt={member.name} width={300} height={300} className="w-full h-64 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">Our Advisors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Industry experts guiding our strategic direction</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map((advisor, i) => (
            <Card key={i} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
              <Image src={advisor.image} alt={advisor.name} width={300} height={300} className="w-full h-64 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{advisor.name}</h3>
                <Badge variant="outline" className="mb-3">{advisor.role}</Badge>
                <p className="text-muted-foreground text-sm">{advisor.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <div className="flex justify-center gap-3 mb-4 items-center">
            <Award className="h-8 w-8 text-yellow-600" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Awards & Recognition</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our achievements and recognition from industry leaders</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <Card key={i} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
              <Image src={award.image} alt={award.title} width={300} height={200} className="w-full h-40 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
                <p className="text-muted-foreground text-sm">{award.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
