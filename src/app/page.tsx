import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Sportswears | Custom Sportswear Manufacturer & Exporter Pakistan",
  description:
    "Core Sportswears is Pakistan's leading custom sportswear manufacturer. We produce ski & snow wear, streetwear, sportswear, bags & accessories with in-house production. No MOQ for trial samples.",
  alternates: { canonical: "https://coresportswears.com" },
};

const categories = [
  { title: "Ski & Snow Wear", description: "Custom ski jackets, snowboard pants, base layers, insulated outerwear and winter accessories.", href: "/products/ski-snow-wear", icon: "\u2744\uFE0F" },
  { title: "Streetwear", description: "Hoodies, tees, flannel shirts, jackets, joggers, sweatshirts and fashion-focused private label streetwear.", href: "/products/streetwear", icon: "\uD83D\uDD25" },
  { title: "Sportswear", description: "Basketball, soccer, baseball, rugby, cricket, cycling, fitness and teamwear built to your specs.", href: "/products/sportswear", icon: "⚽" },
  { title: "Bags", description: "Duffel bags, sports backpacks, fanny bags, tote bags and supporting accessories for full collections.", href: "/products/bags", icon: "🎒" },
  { title: "Headwear & Accessories", description: "Custom caps, beanies, headbands, patches, socks, compression sleeves and more.", href: "/products/headwear-accessories", icon: "🧢" },
];

const steps = [
  { num: "01", title: "Share Your Design", description: "Send your tech pack, logo, reference image, artwork or sample details." },
  { num: "02", title: "Confirm Materials", description: "Finalize fabric, colors, fit, branding, sizing and printing method." },
  { num: "03", title: "Sample Development", description: "A sample is prepared for approval before moving into production." },
  { num: "04", title: "Bulk Production", description: "Cutting, printing, stitching, finishing and branding are completed professionally." },
  { num: "05", title: "Quality Check", description: "Products are checked for fit, print quality, stitching and finishing standards." },
  { num: "06", title: "Packing & Shipment", description: "Orders are packed according to buyer requirements and prepared for shipment." },
];

const testimonials = [
  { quote: "We've been sourcing custom ski jackets from Core Sportswears for two seasons now. The quality is outstanding \u2014 stitching, zippers, and fabric all meet our European standards. Delivery was on time and samples were approved in just 5 days!", name: "James Whitfield", company: "SnowPeak Outerwear" },
  { quote: "Core Sportswears handled our full football kit order \u2014 jerseys, shorts, socks, and bags. Sublimation print quality was brilliant. Will definitely be placing repeat orders for our club.", name: "Sophie M\u00FCller", company: "Founder \u2014 UrbanThread Co" },
  { quote: "As a small startup, I was nervous about placing a bulk order. Core gave me a trial sample with no MOQ \u2014 quality blew me away. Now we order regularly. Highly recommend for any private label brand.", name: "Ashley Carter", company: "FitForm Activewear" },
];

const stats = [
  { value: "200+", label: "Machines" },
  { value: "5-7", label: "Days Sample" },
  { value: "15-25", label: "Days Bulk" },
  { value: "0", label: "MOQ Trial" },
];

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold tracking-widest uppercase text-sm mb-4">Private Label \u2022 Sialkot Pakistan</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Custom Sports Apparel <span className="text-red-500">Manufacturer</span> for Global Brands
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Custom ski &amp; snow wear, sportswear, streetwear and bags for brands, teams, wholesalers and private label buyers. In-house production, premium quality control, and export-ready service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Request A Quote</Link>
              <a href="https://api.whatsapp.com/send/?phone=923328624992&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp Us</a>
            </div>
            <p className="text-sm text-gray-400 mt-6">Send your tech pack, logo, artwork, measurement sheet, or reference image</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 font-semibold tracking-widest uppercase text-sm mb-3">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-left mb-6">Our Motto: &ldquo;Quality Is Everything&rdquo;</h2>
              <p className="text-gray-600 leading-relaxed mb-6">We are manufacturers and exporters of high-quality sportswear and streetwear product ranges. Our company produces custom designs and sizes according to customer requirements. We provide a full range of services, including sample making, marking, grading, stitching, and shipping. No order is too big or too small.</p>
              <p className="text-gray-600 leading-relaxed mb-6">We have a skilled stitching and development team, along with over 200 machines, including flatlock, overlock, single-needle, bar tack, trimming, cutting, embroidery, and sublimation printing machines.</p>
              <p className="text-gray-600 leading-relaxed">We have in-house screen printing, sublimation printing, computerized embroidery, artwork design, and digitizing facilities.</p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Our Capabilities</h3>
              <ul className="space-y-4">
                {["In-house Screen Printing", "Sublimation Printing", "Computerized Embroidery", "Artwork & Digitizing", "Custom Labels & Tags", "Leather Patches & PVC Logos", "Custom Poly Bag Packaging", "Technical Design & Pattern Making"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Our Core Categories</h2>
          <p className="section-subheading">From concept to delivery \u2014 we manufacture custom sport apparel across all major categories.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-red-200 transition-all duration-300">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition">{cat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                <span className="text-red-600 text-sm font-semibold flex items-center gap-1">
                  Explore Category
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">From Idea To Bulk Production</h2>
          <p className="section-subheading">Our streamlined 6-step process ensures quality at every stage.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold text-lg mb-4">{step.num}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">What They Say About Us</h2>
          <p className="section-subheading">Trusted by brands and teams across the globe.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
                <svg className="w-10 h-10 text-red-200 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div><p className="font-bold text-sm">{t.name}</p><p className="text-gray-500 text-xs">{t.company}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready To Start Your Custom Sportswear Order?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">Send us your design, tech pack, or reference image. We&apos;ll handle the rest \u2014 from sample to shipment.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">Request A Quote</Link>
            <a href="https://api.whatsapp.com/send/?phone=923328624992&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-red-600 transition">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
