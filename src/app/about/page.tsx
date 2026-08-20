import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Core Sportswears \u2014 a leading custom sportswear manufacturer and exporter from Sialkot, Pakistan with 200+ machines and in-house production facilities.",
  alternates: { canonical: "https://coresportswears.com/about" },
};

const values = [
  { title: "Quality Is Everything", description: "Every product passes through rigorous quality checks \u2014 from fabric selection to final stitching and packaging.", icon: "\u2713" },
  { title: "No Order Too Small", description: "Whether it's a single trial sample or a 10,000-piece bulk order, we treat every client with equal importance.", icon: "\u2605" },
  { title: "In-House Production", description: "200+ machines, screen printing, sublimation, embroidery \u2014 all under one roof for faster turnaround.", icon: "\u2699" },
  { title: "Export Ready", description: "We handle all export documentation and logistics. Ships to Europe, USA, Middle East, and worldwide.", icon: "\u2708" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Team Behind Your <span className="text-red-500">Brand</span></h1>
          <p className="text-lg text-gray-300 max-w-2xl">From Sialkot to the world \u2014 we manufacture premium custom sport apparel for brands, teams, and private label buyers across the globe.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 font-semibold tracking-widest uppercase text-sm mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built On Quality, Driven By Passion</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Core Sportswears was founded with one goal \u2014 to be the most reliable sportswear manufacturer in Pakistan. Based in Sialkot, the sporting goods capital of the world, we combine decades of manufacturing expertise with modern technology.</p>
              <p className="text-gray-600 leading-relaxed mb-6">Our team of skilled designers, pattern makers, and tailors work together to bring your vision to life. Whether you need custom ski jackets for your European brand, basketball jerseys for your local team, or streetwear for your startup \u2014 we have the capability and experience to deliver.</p>
              <p className="text-gray-600 leading-relaxed">With over 200 machines and complete in-house facilities including screen printing, sublimation, computerized embroidery, and custom packaging \u2014 we control every step of the production process.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">{v.icon}</div>
                  <h3 className="font-bold mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Our In-House Facilities</h2>
          <p className="section-subheading">Everything under one roof \u2014 from design to delivery.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "200+ Machines", desc: "Flatlock, overlock, single-needle, bar tack, trimming, and cutting machines." },
              { title: "Screen Printing", desc: "In-house screen printing for high-quality durable prints on all fabrics." },
              { title: "Sublimation Printing", desc: "Full-color sublimation for sportswear, jerseys, and team uniforms." },
              { title: "Computerized Embroidery", desc: "Precision embroidery for logos, names, and custom designs." },
              { title: "Artwork & Design", desc: "Professional design team for tech packs, patterns, and artwork digitizing." },
              { title: "Custom Labels & Tags", desc: "Woven labels, printed tags, leather patches, and PVC rubber logos." },
              { title: "Custom Packaging", desc: "Branded poly bags, tag cards, and custom packaging solutions." },
              { title: "Quality Control", desc: "Multi-stage quality checks at every step of the production process." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Build Something Great Together</h2>
          <p className="text-lg text-red-100 mb-8">Whether you&apos;re a startup or an established brand, we&apos;re ready to manufacture your next collection.</p>
          <Link href="/contact" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-block">Get In Touch</Link>
        </div>
      </section>
    </>
  );
}
