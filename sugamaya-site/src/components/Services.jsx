import { useState } from 'react'

const items = [
  { title: 'Website Development', desc: "We create responsive, customized websites tailored to your business needs.", icon: '💻' },
  { title: 'MVP Development', desc: "We rapidly build Minimum Viable Products to validate your business ideas.", icon: '⚡' },
  { title: 'Mobile Apps', desc: "We design and develop scalable mobile applications for iOS and Android.", icon: '📱' },
  { title: 'Custom Software', desc: "We deliver bespoke software solutions to streamline your operations.", icon: '🧩' },
  { title: 'Product Design', desc: "We craft user-centric product designs that enhance user experience.", icon: '🎯' },
  { title: 'Cloud Solutions', desc: "We provide secure and scalable cloud services for your business growth.", icon: '☁️' },
]

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy text-center">Services</h1>
        <p className="mt-2 text-center text-gray-600 font-serif">
        Your Thought, Our Effort, Global Use
        </p>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, idx) => (
            <button
              key={s.title}
              onClick={() => setActive(idx)}
              className="group relative text-left focus-ring rounded-2xl bg-ash p-[2px] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              aria-haspopup="dialog"
              aria-controls="service-dialog"
            >
              {/* Animated tricolor border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-[1px] transition-opacity duration-700"
                style={{
                  background:
                    'linear-gradient(90deg, #E67300, #ffffff, #138808, #FF9933)',
                  backgroundSize: '400% 400%',
                  animation: 'borderFlow 5s linear infinite',
                  zIndex: 0,
                }}
              />

              {/* Card content */}
              <div className="relative z-10 rounded-2xl bg-ash p-6 transition-all duration-500">
                <div className="h-12 w-12 grid place-content-center rounded-full bg-white shadow">
                  <span aria-hidden>{s.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Popup dialog */}
        {active !== null && (
          <div
            role="dialog"
            id="service-dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 grid place-items-center p-4"
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setActive(null)} />
            <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <div className="h-10 w-10 grid place-content-center rounded-full bg-ash">
                    <span aria-hidden>{items[active].icon}</span>
                  </div>
                  <h4 className="mt-3 text-xl font-bold text-navy">{items[active].title}</h4>
                </div>
                <button
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border"
                  aria-label="Close"
                  onClick={() => setActive(null)}
                >
                  ×
                </button>
              </div>
              <p className="mt-3 text-gray-700">
                {items[active].desc} Engage with our team to tailor a roadmap for your use case.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Gradient border animation */}
      <style jsx>{`
        @keyframes borderFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  )
}
