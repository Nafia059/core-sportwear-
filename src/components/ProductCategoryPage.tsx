import Link from "next/link";

interface ProductCategoryPageProps {
  title: string;
  description: string;
  heroDescription: string;
  subcategories: { name: string; description: string }[];
  features: string[];
}

export default function ProductCategoryPage({ title, description, heroDescription, subcategories, features }: ProductCategoryPageProps) {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 font-semibold tracking-widest uppercase text-sm mb-3">Our Products</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-lg text-gray-300 max-w-2xl">{heroDescription}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {subcategories.map((sub) => (
              <div key={sub.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition">
                <h3 className="font-bold text-lg mb-2">{sub.name}</h3>
                <p className="text-gray-600 text-sm">{sub.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Request A Quote</Link>
              <a href="https://api.whatsapp.com/send/?phone=923328624992&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
