// import { useEffect, useRef, useState } from 'react'

// export default function About() {
//   const points = [
//     { title: 'Expert Development Team', desc: 'Seasoned engineers & designers with civic-tech experience.' },
//     { title: 'Fast Development', desc: 'Rapid MVP development with modern technologies and agile methodology for quick market entry.' },
//     { title: 'High Ownership', desc: 'We will treat your business as if we own it together. Your win is our win.' },
//     { title: 'Scalable Solutions', desc: 'Built to grow with your business using scalable architecture and cloud technologies.' },
//   ]

//   const cardRefs = useRef([])
//   const [visible, setVisible] = useState([false, false, false, false])

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const idx = Number(entry.target.getAttribute('data-index'))
//           if (entry.isIntersecting) {
//             setVisible((prev) => {
//               const next = [...prev]
//               next[idx] = true
//               return next
//             })
//           }
//         })
//       },
//       { threshold: 0.2 }
//     )

//     cardRefs.current.forEach((el) => el && observer.observe(el))
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section id="about" className="relative py-16 sm:py-24">
//       {/* Soft tricolor radial background glow */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full" style={{background:'radial-gradient(closest-side, rgba(255,153,51,0.18), transparent)'}} />
//         <div className="absolute -bottom-28 -right-28 h-[32rem] w-[32rem] rounded-full" style={{background:'radial-gradient(closest-side, rgba(22,153,10,0.16), transparent)'}} />
//       </div>

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div>
//           <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">Why Choose Us</h1>
//           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {points.map((p, idx) => {
//               const from = idx % 2 === 0 ? 'translate-x-8' : '-translate-x-8' // 1st & 3rd from right, 2nd & 4th from left
//               const base = 'opacity-0 ' + from
//               const shown = 'opacity-100 translate-x-0'
//               return (
//                 <div
//                   key={p.title}
//                   ref={(el) => (cardRefs.current[idx] = el)}
//                   data-index={idx}
//                   className={`rounded-2xl bg-white p-5 border border-gray-100 transition-all duration-700 ease-out will-change-transform ${
//                     visible[idx] ? shown : base
//                   } hover:-translate-y-1 hover:shadow-xl`}
//                 >
//                   <p className="text-lg font-semibold text-gray-900">{p.title}</p>
//                   <p className="mt-1 text-gray-600 text-sm">{p.desc}</p>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { useEffect, useRef, useState } from "react";

export default function About() {
  const points = [
    {
      title: "Expert Development Team",
      desc: "Seasoned engineers & designers with civic-tech experience.",
    },
    {
      title: "Fast Development",
      desc: "Rapid MVP development with modern technologies and agile methodology for quick market entry.",
    },
    {
      title: "High Ownership",
      desc: "We will treat your business as if we own it together. Your win is our win.",
    },
    {
      title: "Scalable Solutions",
      desc: "Built to grow with your business using scalable architecture and cloud technologies.",
    },
  ];

  const cardRefs = useRef([]);
  const [visible, setVisible] = useState([false, false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-20 sm:py-28">
      {/* Soft tricolor radial background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,153,51,0.18), transparent)",
          }}
        />
        <div
          className="absolute -bottom-28 -right-28 h-[32rem] w-[32rem] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(22,153,10,0.16), transparent)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy mb-12">
          Why Choose Us
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {points.map((p, idx) => {
            const from = idx % 2 === 0 ? "translate-x-12" : "-translate-x-12"; // alternate directions
            const base = "opacity-0 " + from;
            const shown = "opacity-100 translate-x-0";
            return (
              <div
                key={p.title}
                ref={(el) => (cardRefs.current[idx] = el)}
                data-index={idx}
                className={`rounded-2xl bg-white p-8 w-full sm:w-[90%] h-52 sm:h-56 border border-gray-100 transition-all duration-700 ease-out will-change-transform flex flex-col justify-center shadow-md ${
                  visible[idx] ? shown : base
                } hover:-translate-y-2 hover:shadow-xl`}
              >
                <p className="text-xl font-semibold text-gray-900">
                  {p.title}
                </p>
                <p className="mt-2 text-gray-600 text-base">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
