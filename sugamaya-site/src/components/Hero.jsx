// export default function Hero() {
//   return (
//     <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-ash">
//       <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
//         <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-10 blur-3xl" style={{background:"conic-gradient(from 0deg, #FF9933, #ffffff, #138808)"}} />
//         <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
//       </div>

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
//         <div className="flex flex-col items-center text-center">
//           <div className="relative mb-8">
//             <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full shadow-soft bg-white grid place-content-center ring-2 ring-emerald/30">
//               {/* Animated logo float */}
//               <img src="/image.png" alt="Sugamaya logo" className="h-16 w-16 object-contain animate-bounce [animation-duration:3s]" />
//             </div>
//             <div className="absolute inset-0 rounded-full blur-2xl opacity-40 -z-10" style={{background:"radial-gradient(closest-side, rgba(19,136,8,0.3), transparent)"}}/>
//           </div>

//           <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tight text-navy">
//             SUGAMAYA GOVERNANCE
//           </h1>
//           <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-700">
//           Transform your ideas into powerful digital products with our expert development team. Fast, reliable, and scalable solutions for startups and businesses.
//           </p>

//           <div className="mt-8 flex flex-wrap justify-center gap-3">
//             <a href="#services" className="focus-ring inline-flex items-center rounded-full bg-primary text-white px-6 py-3 text-sm font-semibold shadow-soft hover:bg-primary-600">
//               Start Your Project
//             </a>
//             <a href="#projects" className="focus-ring inline-flex items-center rounded-full border border-gray-300 bg-white text-navy px-6 py-3 text-sm font-semibold hover:border-navy">
//               View Our Work
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )}


import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white to-ash"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-10 blur-3xl"
          style={{
            background: "conic-gradient(from 0deg, #FF9933, #138808)",
          }}
        />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          <div className="relative mb-8">
            <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full shadow-soft bg-white grid place-content-center ring-2 ring-emerald/30">
              <img
                src="/image.png"
                alt="Sugamaya logo"
                className="h-16 w-16 object-contain animate-bounce [animation-duration:3s]"
              />
            </div>
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-40 -z-10"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(19,136,8,0.3), transparent)",
              }}
            />
          </div>

          {/* Title with dark saffron-green gradient */}
          <h1
            ref={titleRef}
            className={`font-heading text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text transition-all duration-[1200ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FF8000 0%, #FF9933 25%, #138808 100%)",
            }}
          >
            SUGAMAYA GOVERNANCE
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-4 max-w-2xl text-base sm:text-lg text-gray-700 transition-opacity duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            Transform your ideas into powerful digital products with our expert development team. Fast, reliable, and scalable solutions for startups and businesses.
          </p>

          {/* Buttons */}
          <div
            className={`mt-8 flex flex-wrap justify-center gap-3 transition-opacity duration-700 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href="#services"
              className="focus-ring inline-flex items-center rounded-full bg-[#E40000] text-white px-6 py-3 text-sm font-semibold shadow-soft hover:bg-[#c30000] transition-all duration-200"
            >
              Start Your Project
            </a>
            <a
              href="#projects"
              className="focus-ring inline-flex items-center rounded-full border border-gray-300 bg-white text-navy px-6 py-3 text-sm font-semibold hover:border-[#E40000]"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
