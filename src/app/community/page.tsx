"use client"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Globe,
  Target,
  MessageSquare,
  Calendar,
  BookOpen,
  Award,
  TrendingUp,
  Zap,
} from "lucide-react"
import { motion } from 'framer-motion'
import Image from "next/image"
import useMediaQuery from "../hooks/useMediaQuery"

export default function ClimateInnovationCommunity() {
  const isMobile=useMediaQuery('(max-width:768px)')

  const handleJoinCommunity = () => {
    window.open("mailto:support@netzerothink.com?subject=New Service Request from [Name]&body=Name: [Name]%0APhone: [WhatsApp Number]%0AOrganistion: [Your Org]%0ADesignation: [Your Designation]%0ALinkedIn: [Link]%0ADescription: [Why do you want to Join?]")
  }

  const communityStats = [
    { icon: Users, label: "Active Members", value: "500+" },
    { icon: Globe, label: "Countries", value: "30+" },
    { icon: Target, label: "CO₂ Reduced (tons)", value: "1.2M+" },
  ]

  const benefits = [
    {
      icon: MessageSquare,
      title: "Expert Network",
      description: "Connect with climate scientists, entrepreneurs, and sustainability leaders worldwide",
    },
    {
      icon: BookOpen,
      title: "Knowledge Hub",
      description: "Access cutting-edge research, case studies, and best practices in climate innovation",
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Join webinars, workshops, and conferences with industry pioneers",
    },
    {
      icon: Award,
      title: "Innovation Challenges",
      description: "Participate in hackathons and competitions to solve climate problems",
    },
    {
      icon: TrendingUp,
      title: "Funding Opportunities",
      description: "Get access to grants, investors, and funding for your climate projects",
    },
    {
      icon: Zap,
      title: "Collaboration Tools",
      description: "Use our platform to find partners and collaborate on breakthrough solutions",
    },
  ]

  const academia_card=[
    {
      title:"upcoming Course",
      pic:"/bg-cover/corp.png"
    },
    
  ]

  const Event_card=[
    {
      title:"Climate Innovation summit 2025",
      description:"A global gathering of climate leaders, innovators, and changemakers."
    }
  ]

  const Posts=[
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7342056302522572802?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7345749609735929858?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7292953380983881728?collapsed=1"
  ]

  return (
    <div className="relative min-h-screen w-full  overflow-hidden bg-[url('/bg-cover/climate.png')] bg-fixed bg-cover bg-no-repeat">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center  text-blue-800 overflow-hidden mt-30 sm:mt-50">
        <div className="relative max-w-6xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center max-w-6xl mx-auto" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Climate Innovation Community
          </motion.h1>

          <div className="w-full bg-white/10 backdrop-blur-xl rounded-2xl text-white font-bold p-3">
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed pt-5 ">
              Climate Innovation Community
              Connecting Global Minds for Local and Global Climate Impact.
            </p>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed ">The Climate Innovation Community is a social initiative of Net Zero Think conneting over 500 professionals from 30+ countries, united by a shared purpose—to drive real, sustainable change in business, the environment, society, and people’s lives.</p>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed ">The community brings together like-minded experts, innovators, entrepreneurs, policy professionals, financiers, insurers, and development practitioners who are passionate about advancing climate and sustainability solutions.</p>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">Be a part of the movement, Connect, Collaborate, Co-create a sustainable tomorrow. To join the community send the expression of interest.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-5">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg"
              onClick={handleJoinCommunity}
            >
                  Join Climate Innovation Community

            </Button>
          </div>

          {/* Community Stats */}
          <div className="flex items-center justify-center gap-10 max-w-4xl mx-auto text-green-500">
            {communityStats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-xl rounded-lg p-4">
                <stat.icon className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xl opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* What We Do Section */}
        <section className="mb-20">
          <div className="text-center mb-12 bg-white/50 backdrop-blur-xl rounded-2xl">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">What Makes Us Different</h2>
            <p className="text-xl text- max-w-3xl mx-auto text-blue-800">
              We&apos;re not just another network. We&apos;re a catalyst for climate action, bringing together the brightest minds
              to solve humanity&apos;s greatest challenge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-white bg-green-500">
                <CardHeader>
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-blue-800 font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-800 leading-relaxed">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Projects Section */}
        
        {/* Academia Section */}
        <section className="mb-20">
          <div className="text-center w-full bg-white/50 backdrop-blur-xl rounded-2xl">
            <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 w-full text-white bg-green-500 rounded-2xl text-center " 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Academia
          </motion.h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academia_card.map((item,idx)=>(
              <Card key={idx} className="hover:shadow-[0px_0px_10px_5px] shadow-black/50 transition-shadow  bg-white/50 backdrop-blur-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800 font-bold capitalize underline">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="">
                <Image src={item.pic} alt={item.pic} width={200} height={200}  className="rounded self-center justify-self-center w-full" />
                <Button variant={"default"} className="self-center justify-self-center w-full mt-5 bg-green-500 cursor-pointer">Learn More</Button>
              </CardContent>
            </Card>))}
          </div>
        </section>

        {/* Events Section */}
        <section className="mb-20">
          <div className="text-center mb-12 bg-white/50 backdrop-blur-xl rounded-2xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 pb-2 text-white bg-green-500 rounded-2xl text-center " 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Upcoming Events
          </motion.h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Event_card.map((item,idx)=>(
              <Card key={idx} className="hover:shadow-lg transition-shadow bg-white/30 backdrop-blur-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800 font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-800 leading-relaxed mb-4">
                  {item.description}
                </CardDescription>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  Learn More
                </Button>
              </CardContent>
            </Card>))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-20">
          <div className="text-center mb-12 bg-white/50 backdrop-blur-xl rounded-2xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center  " 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            News Letter
          </motion.h1>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            {Posts.map((Post,idx)=>(<iframe key={idx} className="rounded-xl" src={Post} height="636" width={isMobile?300:"504px"}  title="Embedded post"></iframe>))}
          </div>
        </section>
      </div>
    </div>
  )
}
