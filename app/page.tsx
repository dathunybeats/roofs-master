"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaTools, FaWrench, FaRedo, FaSearch, FaWater, FaBolt, FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const services = [
  { title: "Roof Installation", desc: "Expert installation of new roofs using quality materials and skilled craftsmanship." },
  { title: "Roof Repair", desc: "Quick and reliable repairs for leaks, storm damage, and wear." },
  { title: "Inspection & Maintenance", desc: "Comprehensive inspections and regular maintenance to extend your roof’s life." },
  { title: "Gutter Services", desc: "Installation and cleaning of gutters to protect your property." },
  { title: "Emergency Services", desc: "24/7 emergency roofing repairs for urgent needs." },
];

const faqs = [
  { q: "What areas do you serve?", a: "We serve the entire local region and surrounding areas. Contact us to see if we cover your location." },
  { q: "How long does a roof replacement take?", a: "Most residential roof replacements are completed within 2-3 days." },
  { q: "Are you licensed and insured?", a: "Yes, we are fully licensed and insured for your peace of mind." },
  { q: "Do you offer free estimates?", a: "Absolutely! Contact us for a no-obligation, free estimate." },
  { q: "What types of roofing materials do you use?", a: "We work with asphalt shingles, metal, tile, and more—tailored to your needs." },
];

const serviceList = [
  {
    title: "New Roofs",
    icon: <FaTools className="text-3xl text-gray-700" />,
    image: "/what-happens-during-a-roof-installation-01.jpg",
    desc: "Professional installation of new roofs for residential and commercial properties across Brisbane and Sunshine Coast."
  },
  {
    title: "Roof Repairs",
    icon: <FaWrench className="text-3xl text-gray-700" />,
    image: "/leaking-roof-repair-scaled-1703x1703.jpg",
    desc: "Quick and reliable roof repairs for leaks, storm damage, and general wear throughout Brisbane and Sunshine Coast."
  },
  {
    title: "Reroofs",
    icon: <FaRedo className="text-3xl text-gray-700" />,
    image: "/Re-Roofing-Or-Roof-Replacement.jpg",
    desc: "Complete reroofing services to give your property a fresh start with quality materials and expert installation."
  },
  {
    title: "Roof Maintenance",
    icon: <FaSearch className="text-3xl text-gray-700" />,
    image: "/services/extension.jpg",
    desc: "Regular maintenance services to extend your roof's lifespan and prevent costly repairs."
  },
  {
    title: "Gutter Services",
    icon: <FaWater className="text-3xl text-gray-700" />,
    image: "/services/restoration.jpg",
    desc: "Professional gutter installation and cleaning services to protect your Brisbane and Sunshine Coast property."
  },
  {
    title: "Emergency Roofing",
    icon: <FaBolt className="text-3xl text-gray-700" />,
    image: "/services/external.jpg",
    desc: "24/7 emergency roofing services for urgent repairs across Brisbane and Sunshine Coast areas."
  },
];

function ServicesSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const selected = openIdx === null ? 0 : openIdx;
  return (
    <section className="w-full min-w-full max-w-6xl mx-auto py-20 px-2 md:px-4" id="services">
      <div className="flex flex-col items-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center w-full"
        >
          <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full mb-4 font-semibold">Services</span>
          <h2 className="text-5xl font-bold mb-2 text-center">What we do</h2>
          <p className="text-lg text-gray-600 text-center">Find out which one of our services fit the needs of your project</p>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
        {/* Left: Service Image */}
        <motion.div
          className="flex-1 flex items-center justify-center min-h-0"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="w-full h-full aspect-square max-w-lg rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
            <img
              src={serviceList[selected].image}
              alt={serviceList[selected].title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        {/* Right: Service List */}
        <motion.div
          className="flex-1 w-full max-w-xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <ul className="divide-y divide-gray-200">
            {serviceList.map((service, idx) => (
              <li key={service.title}>
                <button
                  className="w-full flex items-center justify-between py-6 px-2 text-left focus:outline-none hover:bg-gray-50 transition"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                  aria-controls={`service-desc-${idx}`}
                  type="button"
                >
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <span className="text-xl font-semibold">{service.title}</span>
                  </div>
                  <span className="text-2xl font-light">{openIdx === idx ? "×" : "+"}</span>
                </button>
                <div
                  id={`service-desc-${idx}`}
                  className={`transition-all duration-500 ease-in-out overflow-hidden pl-16 pr-4 ${openIdx === idx ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}`}
                  style={{
                    transitionProperty: 'max-height, opacity, padding-bottom',
                  }}
                  aria-hidden={openIdx !== idx}
                >
                  <div className="text-gray-700 text-base">
                    {service.desc}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "What types of roofing materials do you offer?",
      a: "We work with asphalt shingles, metal roofing, tile, flat roofs, and more. We'll recommend the best option for your property and budget."
    },
    {
      q: "How long does a roof replacement take?",
      a: "Most residential roof replacements are completed within 1-3 days, depending on the size and complexity of the project."
    },
    {
      q: "Are you licensed and insured for roofing?",
      a: "Yes, Highpoint Vista Roofing is fully licensed and insured for all roofing work. Your property is in safe hands."
    },
    {
      q: "Do you offer emergency roof repairs?",
      a: "Absolutely! We provide 24/7 emergency roofing services for urgent leaks and storm damage."
    },
    {
      q: "How do I know if my roof needs replacing?",
      a: "Common signs include missing shingles, leaks, sagging, and visible wear. We offer free inspections to assess your roof's condition."
    },
    {
      q: "Do you provide free roofing estimates?",
      a: "Yes, we offer free, no-obligation estimates for all roofing projects. Contact us to schedule yours."
    },
    {
      q: "What areas do you serve?",
      a: "We proudly serve Brisbane, Sunshine Coast, and surrounding areas throughout Queensland. Contact us to confirm coverage for your location."
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="w-full min-w-full max-w-3xl mx-auto py-12 px-2" id="faq">
      <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
        {/* Left column */}
        <motion.div
          className="flex-1 min-w-[180px] flex flex-col items-start md:items-start max-w-xs"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block bg-gray-900 text-white text-xs px-2 py-0.5 rounded-full mb-2 font-semibold">FAQs</span>
          <h2 className="text-3xl font-bold mb-2 leading-tight">Answering your questions</h2>
          <p className="text-base text-gray-500 mb-4">Got more questions? Send us your enquiry below</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-5 py-2.5 rounded-full text-base transition">
            Get in touch
            <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-900 text-white rounded-full">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </span>
          </a>
        </motion.div>
        {/* Right column: FAQ Accordions */}
        <motion.div
          className="flex-1 w-full max-w-md space-y-3"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="bg-gray-50 rounded-xl shadow p-0">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left text-lg font-medium focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-desc-${idx}`}
                type="button"
              >
                <span>{faq.q}</span>
                <span
                  className={`text-2xl font-light inline-block transition-transform duration-300 ease-in-out ${openIdx === idx ? 'rotate-45' : 'rotate-0'}`}
                  style={{ display: 'inline-block' }}
                >
                  +
                </span>
              </button>
              <div
                id={`faq-desc-${idx}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden px-5 ${openIdx === idx ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'}`}
                style={{
                  transitionProperty: 'max-height, opacity, padding-bottom',
                }}
                aria-hidden={openIdx !== idx}
              >
                <div className="text-gray-500 text-base">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="w-full min-w-full flex justify-center items-center py-16 px-1 bg-transparent" id="contact">
      <div className="w-full min-w-full max-w-7xl bg-[rgba(16,16,20,1)] rounded-lg md:rounded-2xl flex flex-col md:flex-row p-4 md:p-12 gap-6 md:gap-12 shadow-lg mx-auto">
        {/* Left: Contact Info */}
        <div className="flex-1 text-white flex flex-col justify-between min-w-[260px]">
          <div>
            <span className="inline-block bg-gray-700 text-white text-xs px-3 py-1 rounded-full mb-4 font-semibold">Contact</span>
            <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
            <p className="text-lg text-gray-300 mb-8">For any inquiries or to explore your vision further, we invite you to contact our professional team using the details provided below.</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-base mb-6">
              <div className="font-semibold">Service Areas</div>
              <div>Brisbane & Sunshine Coast, QLD</div>
              <div className="font-semibold">Email</div>
              <div>highpointvistaroofing@gmail.com</div>
              <div className="font-semibold">Telephone</div>
              <div>0433 954 545</div>
            </div>
            <hr className="border-gray-700 my-4" />
            <div className="mt-4">
              <div className="font-semibold mb-2">Follow us</div>
              <div className="flex gap-4 text-2xl">
                <a href="https://instagram.com/highpointvistaroofing_" aria-label="Instagram" className="hover:text-gray-300">{/* Instagram */}
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" aria-label="TikTok" className="hover:text-gray-300">{/* TikTok */}
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17a4 4 0 1 1 0-8h1V7h2v2h2v2h-2v2h-1a2 2 0 1 0 0 4h1v2h-2v-2H9z"/></svg>
                </a>
                <a href="#" aria-label="X" className="hover:text-gray-300">{/* X (Twitter) */}
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.5 6.5l-11 11M6.5 6.5l11 11"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 p-8" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)' }}>
            <h2 className="text-2xl font-bold mb-1 text-gray-900">Get Your Free Estimate</h2>
            <p className="text-gray-600 mb-6">Fill out the form below and we'll contact you within 24 hours</p>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input id="firstName" name="firstName" type="text" required placeholder="First Name" className="w-full p-3 pl-10 rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
                </div>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input id="lastName" name="lastName" type="text" required placeholder="Last Name" className="w-full p-3 pl-10 rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
                </div>
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input id="email" name="email" type="email" required placeholder="Email Address" className="w-full p-3 pl-10 rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
              </div>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input id="phone" name="phone" type="tel" placeholder="Phone Number" className="w-full p-3 pl-10 rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
              </div>
              <div className="relative">
                <FaComment className="absolute left-3 top-3 text-gray-400 text-sm" />
                <textarea id="message" name="message" required placeholder="Tell us about your roofing needs..." rows={4} className="w-full p-3 pl-10 rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
              </div>
              <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-light py-3 rounded-lg text-lg transition mt-2">Get Free Estimate</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="w-full min-w-full bg-[rgba(16,16,20,255)] rounded-t-lg md:rounded-t-2xl pt-12 pb-6 px-2 md:px-6 mt-8">
      <div className="w-full min-w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* Left: Logo */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="text-4xl font-bold text-white mb-2">Highpoint Vista Roofing</div>
        </div>
        {/* Center/Right: Quick Links */}
        <div className="flex-1 flex flex-col md:items-end">
          <div className="text-white font-semibold mb-4 text-lg">Quick links</div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-300 text-base">
            <a href="#about" className="hover:text-white transition">About us</a>
            <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
            <a href="#projects" className="hover:text-white transition">Our work</a>
            <a href="#faq" className="hover:text-white transition">FAQs</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
      <hr className="border-gray-700 my-8" />
      <div className="w-full min-w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-2">
        <div>&copy; {new Date().getFullYear()} Highpoint Vista Roofing. All rights reserved.</div>
        {/* Optional: Made in Framer badge or similar can go here if desired */}
      </div>
    </footer>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      text: "Highpoint Vista Roofing replaced our leaking roof and the results are fantastic. The crew was professional, efficient, and left our property spotless. Highly recommended!",
      name: "James Richardson",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "We needed emergency repairs after a storm and Highpoint Vista Roofing responded immediately. They fixed the damage and gave us peace of mind. Great service!",
      name: "Sophie Williams",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "Our new roof looks amazing and has made our home much more energy efficient. The team was friendly and the workmanship is top-notch.",
      name: "Daniel Foster",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      text: "From the first consultation to the final inspection, Roofit delivered on every promise. Our roof replacement was smooth and stress-free!",
      name: "Charlotte Harris",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      text: "Fantastic workmanship! Highpoint Vista Roofing repaired our gutters and fixed a persistent leak. Everything was explained clearly and done on time.",
      name: "Oliver Bennett",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      text: "Highpoint Vista Roofing did an incredible job on our commercial flat roof. The quality is excellent and the team was a pleasure to work with.",
      name: "Emily Carter",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

  // Split testimonials for two rows
  const topRow = testimonials.slice(0, 4);
  const bottomRow = testimonials.slice(2, 6);

  // Animation logic
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const top = topRef.current;
    const bottom = bottomRef.current;
    if (!top || !bottom) return;
    let topScroll = 0;
    let bottomScroll = 0;
    const scrollStep = 0.5; // px per frame
    const interval = 16; // ms
    let topWidth = top.scrollWidth / 2;
    let bottomWidth = bottom.scrollWidth / 2;
    let topAnim: NodeJS.Timeout;
    let bottomAnim: NodeJS.Timeout;
    function animateTop() {
      if (!top) return;
      if (top.scrollLeft >= topWidth) {
        top.scrollLeft = 0;
        topScroll = 0;
      } else {
        top.scrollLeft += scrollStep;
        topScroll += scrollStep;
      }
      topAnim = setTimeout(animateTop, interval);
    }
    function animateBottom() {
      if (!bottom) return;
      if (bottom.scrollLeft <= 0) {
        bottom.scrollLeft = bottomWidth;
        bottomScroll = bottomWidth;
      } else {
        bottom.scrollLeft -= scrollStep;
        bottomScroll -= scrollStep;
      }
      bottomAnim = setTimeout(animateBottom, interval);
    }
    animateTop();
    animateBottom();
    return () => {
      clearTimeout(topAnim);
      clearTimeout(bottomAnim);
    };
  }, []);

  function TestimonialCard({ t, alt }: { t: typeof testimonials[0]; alt?: boolean }) {
    return (
      <div
        className={`rounded-3xl shadow p-6 flex flex-col h-full min-w-[320px] max-w-[340px] mx-2 ${alt ? 'bg-gray-50' : 'bg-white/80'} transition-colors`}
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.04)' }}
      >
        <div className="flex gap-1 mb-3 text-xl text-black">
          {Array(5).fill(0).map((_, idx) => (
            <span key={idx}>★</span>
          ))}
        </div>
        <p className="mb-6 text-gray-800 flex-1">{t.text}</p>
        <div className="flex items-center gap-3 mt-auto">
          <img src={t.img} alt={t.name} className="w-8 h-8 rounded-full object-cover border border-gray-300" />
          <span className="font-medium text-gray-700">{t.name}</span>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full min-w-full max-w-7xl mx-auto py-20 px-2 md:px-4" id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center mb-10"
      >
        <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full mb-4 font-semibold">Testimonials</span>
        <h2 className="text-5xl font-bold mb-2 text-center">Hear from our clients</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl">Hear from our happy clients about their experience working with Highpoint Vista Roofing and the quality of our craftsmanship.</p>
      </motion.div>
      {/* Top row: scrolls right */}
      <motion.div
        ref={topRef}
        className="overflow-x-auto scrollbar-hide flex w-full mb-8 pb-8 relative"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex items-end">
          {[...topRow, ...topRow].map((t, i) => (
            <TestimonialCard key={i} t={t} alt={i % 2 === 1} />
          ))}
        </div>
      </motion.div>
      {/* Bottom row: scrolls left */}
      <motion.div
        ref={bottomRef}
        className="overflow-x-auto scrollbar-hide flex w-full pb-8 relative"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
      >
        <div className="flex items-end">
          {[...bottomRow, ...bottomRow].map((t, i) => (
            <TestimonialCard key={i} t={t} alt={i % 2 === 0} />
          ))}
        </div>
      </motion.div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

// Our Work Section (roofing-specific)
function OurWorkSection() {
  const projects = [
    {
      image: "/Untitled-1tg.jpg",
      title: "Residential Roof Replacement",
      desc:
        "We replaced an aging roof with high-quality asphalt shingles, improving both the appearance and protection of the home. The project included new underlayment, flashing, and ridge vent installation for long-lasting results.",
      tags: ["Roof Replacement", "1 week"],
      testimonial:
        "Highpoint Vista Roofing replaced our old roof quickly and professionally. The team was friendly and left everything tidy. Highly recommend!",
      author: {
        name: "Laura Davies",
        img: "https://randomuser.me/api/portraits/women/55.jpg",
      },
    },
    {
      image: "/industrial-roof-installation-guide.jpeg",
      title: "Commercial Flat Roof Installation",
      desc:
        "Our team installed a durable flat roofing system for a local business, using high-performance materials to ensure weather resistance and energy efficiency. The project was completed on time and within budget.",
      tags: ["Flat Roof", "2 weeks"],
      testimonial:
        "Highpoint Vista Roofing delivered a top-quality flat roof for our business. The installation was smooth and the results are excellent.",
      author: {
        name: "Emily Carter",
        img: "https://randomuser.me/api/portraits/women/22.jpg",
      },
    },
    {
      image: "/48ee1e8a0a8f50dce4f8cb9ab418e211_XL.jpg",
      title: "Storm Damage Roof Repair",
      desc:
        "After a severe storm, we repaired damaged shingles and flashing, preventing leaks and further issues. Our prompt response and expert repairs restored the roof's integrity and gave the homeowner peace of mind.",
      tags: ["Roof Repair", "2 days"],
      testimonial:
        "After a storm, Highpoint Vista Roofing repaired our roof and prevented further leaks. Great service and communication!",
      author: {
        name: "Daniel Foster",
        img: "https://randomuser.me/api/portraits/men/65.jpg",
      },
    },
  ];

  return (
    <section className="w-full min-w-full max-w-7xl mx-auto py-24 px-2 md:px-4 flex flex-col items-center" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center w-full"
      >
        {/* Pill label */}
        <span className="inline-block bg-gray-900 text-white text-xs px-4 py-1 rounded-full mb-6 font-semibold">Our work</span>
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-4 text-center">Get inspired by our work</h2>
        {/* Subtitle */}
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl">
          See how we’ve transformed homes with our expert craftsmanship and attention to detail.
        </p>
      </motion.div>
      <div className="flex flex-col gap-32 w-full items-center">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="w-full flex flex-col md:flex-row items-center bg-gray-100 rounded-3xl shadow-lg p-8 md:p-16 gap-8 md:gap-12 max-w-5xl"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            {/* Image */}
            <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
              <div className="w-full max-w-xl h-[28rem] md:h-[32rem] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={project.title === "Residential Roof Replacement" ? { objectPosition: "left center" } : {}}
                />
              </div>
            </div>
            {/* Project Details */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
              <p className="text-lg text-gray-700 mb-6">{project.desc}</p>
              {/* Tags */}
              <div className="flex gap-3 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full font-semibold">{tag}</span>
                ))}
              </div>
              {/* Testimonial */}
              <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl text-gray-400">“</span>
                  <span className="text-gray-700 text-base flex-1">{project.testimonial}</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <img src={project.author.img} alt={project.author.name} className="w-8 h-8 rounded-full object-cover border border-gray-300" />
                  <span className="font-medium text-gray-700">{project.author.name}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Auto-scrolling gallery component
function AutoScrollGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const images = [
    '/high-angle-beautiful-roof-wooden-house.jpg',
    '/long-shot-man-working-roof.jpg',
    '/man-working-roof-medium-shot.jpg',
    '/medium-shot-man-working-with-protection-helmet.jpg',
    '/full-shot-man-working-roof-with-hammer.jpg',
  ];
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const scrollStep = 1; // px per interval
    const interval = 20; // ms
    let animation: NodeJS.Timeout;
    function autoScroll() {
      if (!gallery) return;
      // The width of one set of images
      const singleSetWidth = gallery.scrollWidth / 2;
      if (gallery.scrollLeft >= singleSetWidth) {
        // Instantly reset to the start of the first set
        gallery.scrollLeft = 0;
      } else {
        gallery.scrollLeft += scrollStep;
      }
      animation = setTimeout(autoScroll, interval);
    }
    autoScroll();
    return () => {
      if (animation) clearTimeout(animation);
    };
  }, []);
  return (
    <div
      ref={galleryRef}
      className="overflow-x-auto pb-4 mb-12 scrollbar-hide"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="flex gap-6 min-w-[900px]" style={{scrollSnapType: 'x mandatory'}}>
        {[...images, ...images].map((src, i) => (
          <div key={i} className="flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden shadow-lg bg-gray-100" style={{scrollSnapAlign: 'start'}}>
            <Image
              src={src}
              alt={`About project ${i + 1}`}
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutStats() {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, amount: 0.5 });
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
    >
      <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold mb-2">
            <AnimatedNumber value={12} inView={inView} />
          </div>
          <div className="font-semibold mb-1">Years roofing experience</div>
          <div className="text-gray-500 text-sm">Providing expert roofing services for over a decade</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">
            <AnimatedNumber value={350} inView={inView} />
          </div>
          <div className="font-semibold mb-1">Roofs installed</div>
          <div className="text-gray-500 text-sm">Hundreds of roofs installed and repaired</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">
            <AnimatedNumber value={24} inView={inView} />
          </div>
          <div className="font-semibold mb-1">Emergency repairs</div>
          <div className="text-gray-500 text-sm">24/7 emergency roofing repairs completed</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">
            <AnimatedNumber value={100} suffix="%" inView={inView} />
          </div>
          <div className="font-semibold mb-1">Client satisfaction</div>
          <div className="text-gray-500 text-sm">All of our clients are satisfied with our roofing work</div>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedNumber({ value, duration = 900, suffix = "", inView = false }: { value: number; duration?: number; suffix?: string; inView?: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) {
      setDisplay(0);
      return;
    }
    let start = 0;
    let startTime: number | null = null;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    }
    requestAnimationFrame(animate);
  }, [value, duration, inView]);
  return <span>{display}{suffix}</span>;
}

export default function Home() {
  const [openService, setOpenService] = useState<number | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500; // 1.5 seconds for slower scroll
      let start: number | null = null;

      function animation(currentTime: number) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900 w-full min-w-full">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full min-w-full" style={{ background: 'rgba(16,16,20,1)' }}>
        <nav className="w-full min-w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">
          <a href="#" className="text-2xl font-bold tracking-tight text-white">Highpoint Vista Roofing</a>
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
            <li><a href="#" className="hover:text-gray-300 text-white">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300 text-white">About</a></li>
            <li><a href="#services" className="hover:text-gray-300 text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-gray-300 text-white">Projects</a></li>
            <li><a href="#faq" className="hover:text-gray-300 text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-gray-300 text-white">Contact</a></li>
            {/* Get a Quote button for md screens (tablet) */}
            <li className="block lg:hidden ml-4">
              <button
                onClick={() => smoothScrollTo('contact')}
                className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
              >
                Get a Quote
              </button>
            </li>
          </ul>
          {/* Get a Quote and Call buttons for lg+ screens (desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0433954545"
              className="inline-flex items-center bg-white text-black font-semibold px-5 py-2 rounded hover:bg-gray-200 transition"
              style={{ minWidth: 'fit-content' }}
            >
              <FaPhoneAlt className="mr-2" />
              0433 954 545
            </a>
            <button
              onClick={() => smoothScrollTo('contact')}
              className="inline-block bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
            >
              Get a Quote
            </button>
          </div>
          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden flex items-center justify-center text-white focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
          {/* Get a Quote button for lg+ screens (desktop) */}
          {/*
          <a
            href="tel:07716534984"
            className="hidden lg:inline-flex items-center bg-green-600 text-white font-semibold px-5 py-2 rounded mr-2 hover:bg-green-700 transition"
            style={{ minWidth: 'fit-content' }}
          >
            <FaPhoneAlt className="mr-2" />
            07716 534984
          </a>
          <a
            href="#contact"
            className="hidden lg:inline-block bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            Get a Quote
          </a>
          */}
          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 z-50 bg-black/80 flex flex-col items-start px-8 py-8" 
              style={{backdropFilter: 'blur(2px)'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex w-full items-center justify-between mb-12"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="text-2xl font-bold tracking-tight text-white">Highpoint Vista Roofing</div>
                <button
                  className="text-white text-3xl focus:outline-none"
                  aria-label="Close menu"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </svg>
                </button>
              </motion.div>
              <motion.ul 
                className="flex flex-col gap-8 text-white text-xl font-medium w-full"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.li initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}>
                  <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">About</a>
                </motion.li>
                <motion.li initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.35 }}>
                  <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">Services</a>
                </motion.li>
                <motion.li initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }}>
                  <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">Our work</a>
                </motion.li>
                <motion.li initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.45 }}>
                  <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">FAQs</a>
                </motion.li>
                <motion.li initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }}>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">Contact</a>
                </motion.li>
                {/* Get a Quote button in mobile menu */}
                <motion.li 
                  className="mt-8"
                  initial={{ x: -50, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <button
                    onClick={() => { smoothScrollTo('contact'); setMobileMenuOpen(false); }}
                    className="w-full block bg-white text-black font-semibold px-6 py-3 rounded-lg text-center text-lg hover:bg-gray-200 transition"
                  >
                    Get a Quote
                  </button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <div className="w-full min-w-full px-2 md:px-0 pt-6 md:pt-0 pb-6 md:pb-0" style={{ backgroundColor: 'rgba(16,16,20,1)' }}>
        <section
          className="relative h-auto min-h-[400px] w-full min-w-full flex flex-col md:flex-row items-center md:items-stretch gap-12 px-2 md:px-4 text-white py-8 md:py-16 rounded-2xl md:rounded-none overflow-hidden before:absolute before:inset-0 before:bg-[url(/yyYhQHFqAUi9h1nO5lH9iqGVY7o.png)] before:bg-cover before:bg-center before:bg-no-repeat before:[filter:brightness(0.7)] before:md:hidden"
        style={{ 
          background: 'rgba(16,16,20,1)'
        }}
      >
        {/* Remove background image on desktop */}
        <div className="absolute inset-0 bg-[rgba(16,16,20,1)] hidden md:block"></div>
        <div className="relative z-10 w-full min-w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-12 px-0">
          {/* Left: Text Content */}
          <motion.div
            className="flex-[0.8] flex flex-col justify-center items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Pill Badge */}
            <span className="inline-block bg-white text-black font-bold px-3 py-0.5 rounded-full mb-3 text-xs border border-gray-200">Premier Roofing Services Brisbane & Sunshine Coast</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Quality Roofing, Reroofs, New Roofs & Maintenance</h1>
            <p className="mb-6 text-lg">Expert roofing services across Brisbane and Sunshine Coast. Specializing in new roofs, reroofs, and comprehensive maintenance solutions.</p>
            <button
              onClick={() => smoothScrollTo('contact')}
              className="bg-white text-black font-semibold px-8 py-3 rounded shadow hover:bg-gray-200 transition"
            >
              Get a Free Quote
            </button>
          </motion.div>
          {/* Right: Image Placeholder - Hidden on mobile */}
          <motion.div
            className="hidden md:flex flex-[1.2] justify-center items-center relative"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="w-full max-w-xl lg:max-w-[700px] h-[540px] rounded-2xl overflow-hidden flex items-center justify-center relative" style={{ backgroundColor: 'rgba(16,16,20,1)' }}>
              <Image
                 src="/yyYhQHFqAUi9h1nO5lH9iqGVY7o.png"
                 alt="House with new roof"
                 fill
                 className="object-cover"
                 priority
                 sizes="700px"
               />
              {/* Form Overlay */}
              <form
                className="bg-white bg-opacity-95 rounded-xl shadow-2xl border border-gray-100 p-9 flex flex-col gap-4 max-w-[27rem] z-10 absolute"
                style={{ backdropFilter: 'blur(8px)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)' }}
              >
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-1">Get Free Estimate</h3>
                  <p className="text-gray-600 text-center text-sm">We'll contact you within 24 hours</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <FaUser className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                    <input id="hero-firstName" name="firstName" type="text" required placeholder="First Name" className="w-full p-2.5 pl-8 text-sm rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
                  </div>
                  <div className="relative">
                    <FaUser className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                    <input id="hero-lastName" name="lastName" type="text" required placeholder="Last Name" className="w-full p-2.5 pl-8 text-sm rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
                  </div>
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                  <input id="hero-email" name="email" type="email" required placeholder="Email Address" className="w-full p-2.5 pl-8 text-sm rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
                </div>
                <div className="relative">
                  <FaPhone className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                  <input id="hero-phone" name="phone" type="tel" placeholder="Phone Number" className="w-full p-2.5 pl-8 text-sm rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
                </div>
                <div className="relative">
                  <FaComment className="absolute left-2.5 top-2.5 text-gray-400 text-xs" />
                  <textarea id="hero-message" name="message" required placeholder="Tell us about your roofing needs..." rows={3} className="w-full p-2.5 pl-8 text-sm rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light resize-none" />
                </div>
                <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2.5 rounded text-sm transition">Get Free Estimate</button>
              </form>
            </div>
          </motion.div>
          
          {/* Mobile Form - Only visible below md breakpoint */}
          <motion.div
            className="md:hidden w-full flex justify-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <form
              className="bg-white bg-opacity-95 rounded-xl shadow-2xl border border-gray-100 p-6 flex flex-col gap-4 w-full max-w-md"
              style={{ backdropFilter: 'blur(8px)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)' }}
            >
              <div className="mb-2">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Get Free Estimate</h3>
                <p className="text-gray-600 text-center text-sm">We'll contact you within 24 hours</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <FaUser className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                  <input id="hero-mobile-firstName" name="firstName" type="text" required placeholder="First Name" className="w-full p-2.5 pl-8 text-sm rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
                </div>
                <div className="relative">
                  <FaUser className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                  <input id="hero-mobile-lastName" name="lastName" type="text" required placeholder="Last Name" className="w-full p-2.5 pl-8 text-sm rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
                </div>
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                <input id="hero-mobile-email" name="email" type="email" required placeholder="Email Address" className="w-full p-2.5 pl-8 text-sm rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
              </div>
              <div className="relative">
                <FaPhone className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                <input id="hero-mobile-phone" name="phone" type="tel" placeholder="Phone Number" className="w-full p-2.5 pl-8 text-sm rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light" />
              </div>
              <div className="relative">
                <FaComment className="absolute left-2.5 top-2.5 text-gray-400 text-xs" />
                <textarea id="hero-mobile-message" name="message" required placeholder="Tell us about your roofing needs..." rows={3} className="w-full p-2.5 pl-8 text-sm rounded border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-light resize-none" />
              </div>
              <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-light py-2.5 rounded text-sm transition">Get Free Estimate</button>
            </form>
          </motion.div>
        </div>
      </section>
      </div>

      {/* About Section (roofing-specific) */}
      <section className="w-full min-w-full max-w-7xl mx-auto py-20 px-2 md:px-4" id="about">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">
          <motion.div
            className="flex-1 min-w-[250px]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full mb-4 font-semibold">About us</span>
            <h2 className="text-4xl font-bold leading-tight mb-2">Roofing<br/>Specialists</h2>
          </motion.div>
          <motion.div
            className="flex-1 min-w-[250px] text-lg text-gray-700"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            Welcome to Highpoint Vista Roofing, your premier roofing specialists serving Brisbane and the Sunshine Coast. We specialize in comprehensive roofing solutions including new roofs, reroofs, and professional maintenance services. Our experienced team delivers exceptional craftsmanship and reliable service across Queensland, ensuring your property is protected with quality roofing solutions that stand the test of time.
          </motion.div>
        </div>
        {/* Scrolling Image Gallery with Auto-scroll */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <AutoScrollGallery />
        </motion.div>
        {/* Stats (roofing-specific) */}
        <AboutStats />
      </section>

      {/* Services Section (Accordion) */}
      <ServicesSection />

      {/* Our Work Section (new) */}
      <OurWorkSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section (Accordion) */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
