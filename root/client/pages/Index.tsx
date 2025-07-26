import React, { useState } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { MovingCards } from "@/components/ui/moving-cards";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { PartyPopper } from "@/components/ui/party-popper";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ColorfulText } from "@/components/ui/colorful-text";
import HassanLamp from "@/components/hassan-lamp";
import { motion } from "framer-motion";
import { 
  FaGem, 
  FaRing, 
  FaCrown, 
  FaHeart,
  FaShippingFast,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaCertificate,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from "react-icons/fa";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Collections", link: "#collections" },
    { name: "Contact", link: "#contact" },
  ];

  const collections = [
    {
      title: "Diamond Rings",
      description: "Exquisite diamond rings crafted with precision and elegance for your special moments.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Gold Necklaces",
      description: "Traditional and contemporary gold necklace designs that showcase timeless beauty.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Wedding Collections",
      description: "Complete bridal jewelry sets designed to make your wedding day truly memorable.",
      image: "https://images.unsplash.com/photo-1596944924591-79b9a2c2c77e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Precious Gemstones",
      description: "Rare and beautiful gemstone jewelry featuring sapphires, emeralds, and rubies.",
      image: "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      designation: "Bride",
      content: "Hassan Jewellers made my wedding day absolutely magical with their stunning bridal collection. The quality and craftsmanship are unmatched!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612e829?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Raj Patel",
      designation: "Business Owner",
      content: "I've been a customer for over 10 years. Their collection keeps getting better, and the service is always exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Anita Desai",
      designation: "Fashion Designer",
      content: "The attention to detail in every piece is remarkable. Hassan Jewellers understands luxury like no other.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Vikram Singh",
      designation: "Groom",
      content: "Found the perfect engagement ring here. The staff was incredibly helpful and the quality exceeded expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Meera Gupta",
      designation: "Collector",
      content: "Their heritage collection is absolutely breathtaking. Each piece tells a beautiful story of craftsmanship.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1586863072829-7c9b24035d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
        <div className="relative min-h-screen bg-luxury-pearl dark:bg-luxury-rich-black">
      <FloatingNav navItems={navItems} />
      <ThemeToggle />
      <WhatsAppButton />

      {/* Hassan Jewellers Lamp Section */}
      <HassanLamp />

      {/* Enhanced Hero Section with Aurora */}
      <AuroraBackground className="relative">
        <div className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <ColorfulText
                className="text-4xl md:text-6xl lg:text-8xl font-bold"
                animationType="glow"
              >
                Hassan Jewellers
              </ColorfulText>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Crafting timeless elegance with exquisite jewelry pieces that celebrate life's precious moments. 
              Experience luxury, tradition, and unmatched craftsmanship.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <AnimatedButton variant="primary">
                Explore Collections
              </AnimatedButton>
              
              <AnimatedButton variant="outline">
                View Gallery
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-luxury-rich-black relative">
        <BackgroundBeams />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <ColorfulText animationType="rainbow">
                  About Hassan Jewellers
                </ColorfulText>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                For over three decades, Hassan Jewellers has been synonymous with exceptional craftsmanship, 
                timeless designs, and unparalleled quality. Our master artisans blend traditional techniques 
                with contemporary aesthetics to create jewelry that tells your unique story.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                From engagement rings that symbolize eternal love to heritage pieces that celebrate tradition, 
                every creation at Hassan Jewellers is crafted with passion, precision, and an unwavering 
                commitment to excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <CardSpotlight className="text-center p-4">
                  <div className="text-3xl font-bold text-gold-600">30+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </CardSpotlight>
                <CardSpotlight className="text-center p-4">
                  <div className="text-3xl font-bold text-gold-600">50K+</div>
                  <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
                </CardSpotlight>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <CardSpotlight>
                <img 
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Jewellery craftsmanship"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </CardSpotlight>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-gold-400 to-maroon-500 rounded-full flex items-center justify-center">
                <FaCrown className="text-white text-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Pan India Delivery Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-luxury-pearl to-white dark:from-luxury-rich-black dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <ColorfulText animationType="wave">
                Pan India Delivery
              </ColorfulText>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the convenience of having exquisite jewelry delivered right to your doorstep, 
              anywhere across India with our secure and reliable delivery service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaShippingFast className="text-4xl text-gold-500" />,
                title: "Free Shipping",
                description: "Complimentary delivery on orders above ₹10,000",
                tooltip: "Enjoy free shipping on all orders above ₹10,000"
              },
              {
                icon: <FaShieldAlt className="text-4xl text-gold-500" />,
                title: "Secure Packaging",
                description: "Insurance covered with tamper-proof packaging",
                tooltip: "Your jewelry is protected with full insurance coverage"
              },
              {
                icon: <FaHandHoldingHeart className="text-4xl text-gold-500" />,
                title: "Easy Returns",
                description: "30-day hassle-free return and exchange policy",
                tooltip: "30-day return policy for complete peace of mind"
              },
              {
                icon: <FaCertificate className="text-4xl text-gold-500" />,
                title: "Certified Quality",
                description: "All jewelry comes with authenticity certificates",
                tooltip: "Every piece comes with official authenticity certificates"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedTooltip content={feature.tooltip}>
                  <CardSpotlight className="text-center p-8 h-full">
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardSpotlight>
                </AnimatedTooltip>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Collections Section */}
      <section id="collections" className="py-20 px-4 bg-white dark:bg-luxury-rich-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <ColorfulText animationType="rainbow">
                Our Collections
              </ColorfulText>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our curated collection of fine jewelry, each piece telling a story of 
              elegance, tradition, and exceptional craftsmanship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: <FaRing />, title: "Rings", count: "200+" },
              { icon: <FaHeart />, title: "Necklaces", count: "150+" },
              { icon: <FaGem />, title: "Earrings", count: "180+" },
              { icon: <FaCrown />, title: "Bracelets", count: "120+" }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="text-center p-8 cursor-pointer group">
                  <div className="text-4xl text-gold-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-gold-600 font-medium">{category.count} Designs</p>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MovingCards items={collections} direction="left" speed="slow" />
          </motion.div>
        </div>
      </section>

      {/* New Reviews Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-luxury-pearl to-white dark:from-luxury-rich-black dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <ColorfulText animationType="glow">
                Customer Reviews
              </ColorfulText>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Hear what our valued customers say about their experience with Hassan Jewellers. 
              Your satisfaction is our greatest achievement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedTestimonials testimonials={testimonials} />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="py-20 px-4 bg-white dark:bg-luxury-rich-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <ColorfulText animationType="wave">
                Our Showroom
              </ColorfulText>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Step into our elegant showroom where luxury meets tradition. Experience our 
              collections in a sophisticated environment designed for your comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="relative overflow-hidden p-0 group cursor-pointer">
                  <img 
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-luxury-pearl to-white dark:from-luxury-rich-black dark:to-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <ColorfulText animationType="rainbow">
                Get In Touch
              </ColorfulText>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CardSpotlight className="h-full">
                <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <FaMapMarkerAlt className="text-gold-500 text-xl mt-1" />,
                      title: "Address",
                      content: "123 Jewelry Street, Diamond District\nMumbai, Maharashtra 400001"
                    },
                    {
                      icon: <FaPhone className="text-gold-500 text-xl mt-1" />,
                      title: "Phone",
                      content: "+91 98765 43210"
                    },
                    {
                      icon: <FaEnvelope className="text-gold-500 text-xl mt-1" />,
                      title: "Email",
                      content: "info@hassanjewellers.com"
                    },
                    {
                      icon: <FaClock className="text-gold-500 text-xl mt-1" />,
                      title: "Hours",
                      content: "Monday - Saturday: 10:00 AM - 8:00 PM\nSunday: 11:00 AM - 7:00 PM"
                    }
                  ].map((item, index) => (
                    <AnimatedTooltip key={index} content={`Contact us via ${item.title.toLowerCase()}`}>
                      <div className="flex items-start space-x-4 cursor-pointer">
                        {item.icon}
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </AnimatedTooltip>
                  ))}
                </div>
              </CardSpotlight>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CardSpotlight>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gold-300 dark:border-gold-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                      suppressHydrationWarning
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gold-300 dark:border-gold-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                      suppressHydrationWarning
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gold-300 dark:border-gold-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                      required
                    />
                  </div>

                  <AnimatedButton variant="primary" className="w-full">
                    Send Message
                  </AnimatedButton>
                </form>
              </CardSpotlight>
            </motion.div>
          </div>
        </div>
        
        <PartyPopper />
      </section>
    </div>
  );
}
