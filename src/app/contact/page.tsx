import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Core Sportswears \u2014 custom sportswear manufacturer in Sialkot, Pakistan. Request a quote, send your tech pack, or ask about our products. WhatsApp: +92 339 8624992",
  alternates: { canonical: "https://coresportswears.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 font-semibold tracking-widest uppercase text-sm mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Start Your <span className="text-red-500">Project</span></h1>
          <p className="text-lg text-gray-300 max-w-2xl">Send your tech pack, logo, artwork, measurement sheet, or reference image. We&apos;ll get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Request A Quote</h2>
              <form className="space-y-6" action="#" method="POST">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" placeholder="you@company.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" placeholder="+1 234 567 890" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input type="text" id="company" name="company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" placeholder="Your company" />
                  </div>
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Product Category *</label>
                  <select id="category" name="category" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none bg-white">
                    <option value="">Select a category</option>
                    <option value="ski-snow-wear">Ski & Snow Wear</option>
                    <option value="streetwear">Streetwear</option>
                    <option value="sportswear">Sportswear</option>
                    <option value="bags">Bags</option>
                    <option value="headwear">Headwear & Accessories</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message / Requirements *</label>
                  <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none" placeholder="Tell us about your project \u2014 design details, quantity, colors, materials, etc." />
                </div>
                <button type="submit" className="btn-primary w-full md:w-auto">Send Inquiry</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-lg mb-4">WhatsApp (Fastest)</h3>
                  <p className="text-gray-600 text-sm mb-4">For quick responses, message us directly on WhatsApp.</p>
                  <a href="https://api.whatsapp.com/send/?phone=923328624992&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-lg mb-4">Email Us</h3>
                  <a href="mailto:coresportswears@gmail.com" className="text-red-600 font-medium hover:underline">coresportswears@gmail.com</a>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-lg mb-4">Call Us</h3>
                  <a href="tel:+923398624992" className="text-gray-700 font-medium hover:text-red-600 transition">+92 339 8624992</a>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-lg mb-4">Visit Our Factory</h3>
                  <p className="text-gray-600">Sadra Badra Town, Daak Wala Stop,<br />Daska Road, Sialkot 51310, Pakistan</p>
                  <a href="https://www.google.com/maps/place/CORE+SPORTS+WEARS/@32.4586417,74.5091068,17z" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-red-600 text-sm font-semibold hover:underline">View on Google Maps \u2192</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
