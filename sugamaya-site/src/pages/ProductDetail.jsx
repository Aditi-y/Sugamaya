// import { useEffect, useRef, useState } from 'react'
// import { useParams, Link, useNavigate } from 'react-router-dom'
// import Navbar from '../components/Navbar'

// // Helper function to create slug from title
// function createSlug(title) {
//   return title.toLowerCase()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/\s+/g, '-')
//     .replace(/-+/g, '-')
// }

// // Product data - would typically come from an API or data file
// const productData = {
//   'bio-hacking-luxe': {
//     title: 'Bio Hacking Luxe',
//     img: '/biohack.png',
//     description: 'Bio Hacking Luxe is a cutting-edge health optimization platform that combines genetic testing, hormone therapy, and advanced wellness tracking to help clients achieve peak physical and mental performance. Our comprehensive approach addresses every aspect of human optimization.',
//     stats: {
//       clients: '5,000+ premium clients worldwide',
//       ageReversal: '7-10 years average age reversal',
//       improvement: 'Up to 40% improvement in biological age markers within the first year'
//     },
//     technologies: [
//       'React',
//       'Next.js',
//       'Python',
//       'FastAPI',
//       'PostgreSQL',
//       'MongoDB',
//       'AWS',
//       'Docker',
//       'LangChain',
//       'OpenAI',
//       'Tailwind CSS'
//     ],
//     achievements: [
//       '99.95% uptime',
//       'Over 1,000 health assessments processed daily',
//       'FDA recognition for innovative approach to personalized medicine',
//       'Featured in leading health and wellness publications'
//     ],
//     technicalDetails: 'Built with React and Next.js for the frontend, Python and FastAPI for data processing, and advanced machine learning algorithms for personalized recommendations. We use secure cloud infrastructure to protect sensitive health data and ensure HIPAA compliance.',
//     aiDetails: 'Our AI-powered analysis engine processes genetic data, blood work, and lifestyle factors to create personalized optimization plans. The platform integrates with wearable devices and provides real-time health monitoring and recommendations.',
//     founderMessage: {
//       personal: "Bio Hacking Luxe was born from my personal journey of discovering the power of personalized health optimization. After years of struggling with conventional medicine, I realized that one-size-fits-all approaches don't work for complex human biology.",
//       mission: "Our mission is to democratize access to advanced health optimization techniques that were previously only available to the ultra-wealthy. We believe everyone deserves to live their healthiest, most vibrant life possible.",
//       innovation: "The platform represents years of research, collaboration with leading scientists, and continuous innovation in the field of personalized medicine. We're constantly pushing the boundaries of what's possible in human optimization.",
//       future: "Looking ahead, we're excited about the potential of AI and machine learning to make personalized health optimization even more accessible and effective for people worldwide."
//     }
//   },
//   'first-rate-mortgage-inc-frmi': {
//     title: 'First Rate Mortgage Inc. (FRMI)',
//     img: '/FRM.png',
//     description: 'First Rate Mortgage Inc. (FRMI) is a California-based firm providing comprehensive mortgage solutions and real estate services. We specialize in residential and commercial loans, refinancing options, and complete real estate assistance for clients across California.',
//     stats: {
//       clients: 'Over 2,000 clients annually',
//       volume: '$500 million in mortgage loans processed',
//       satisfaction: '98% client satisfaction rate'
//     },
//     technologies: [
//       'React',
//       'Next.js',
//       'Node.js',
//       'Express',
//       'PostgreSQL',
//       'AWS',
//       'Docker',
//       'Tailwind CSS',
//       'Framer Motion'
//     ],
//     achievements: [
//       '99.9% uptime',
//       'Over 1,000 loan applications processed monthly',
//       'Licensed by the California Department of Real Estate',
//       '15+ years of experience in mortgage services'
//     ],
//     technicalDetails: 'Built with modern web technologies including React and Next.js for the frontend, Node.js and Express for backend services, and PostgreSQL for secure financial data storage. We use AWS for cloud infrastructure and integrate with major lending institutions for real-time rate updates.',
//     aiDetails: 'Our proprietary mortgage calculator and pre-qualification system helps clients understand their borrowing capacity and find the best loan products. The platform includes document management, application tracking, and real-time communication with loan officers.',
//     founderMessage: {
//       personal: "First Rate Mortgage Inc. was founded with the vision of making homeownership accessible and transparent for everyone. Having worked in the mortgage industry for over two decades, I saw the need for a more client-focused approach to lending.",
//       mission: "Our mission is to simplify the mortgage process and provide personalized service that puts our clients' needs first. We believe that buying a home should be exciting, not stressful, and we work tirelessly to make that vision a reality.",
//       innovation: "The platform represents our commitment to using technology to enhance the human touch in mortgage lending. We've built tools that make the process transparent and efficient while maintaining the personal relationships that matter most to our clients.",
//       future: "As the real estate market continues to evolve, we're excited to be at the forefront of innovation in mortgage technology while maintaining our core values of integrity, transparency, and exceptional customer service."
//     }
//   },
//   'complaint-management-software': {
//     title: 'Complaint Management Software',
//     img: '/CM.png',
//     description: 'A comprehensive system to register, track, and resolve customer complaints efficiently with automated workflows. Built to streamline complaint handling processes and improve customer satisfaction across organizations.',
//     stats: {
//       businesses: '500+ businesses served',
//       complaints: '10,000+ complaints processed monthly',
//       resolution: '95% resolution rate within 48 hours'
//     },
//     technologies: [
//       'React',
//       'Next.js',
//       'Node.js',
//       'Express',
//       'PostgreSQL',
//       'AWS',
//       'Docker',
//       'Tailwind CSS',
//       'Framer Motion'
//     ],
//     achievements: [
//       '99.8% uptime',
//       'Automated workflow processing',
//       'Real-time notification system',
//       'Comprehensive reporting and analytics'
//     ],
//     technicalDetails: 'Built with React and Next.js for an intuitive user interface, Node.js and Express for robust backend services, and PostgreSQL for reliable data storage. The system uses AWS cloud infrastructure for scalability and Docker for containerization.',
//     aiDetails: 'Our intelligent complaint routing system automatically assigns complaints to appropriate teams based on category, priority, and workload. The platform includes automated escalation, status tracking, and customer communication tools.',
//     founderMessage: {
//       personal: "Having managed customer service teams, I understood the challenges of tracking and resolving complaints efficiently. This software was born from the need to create a centralized system that empowers teams to serve customers better.",
//       mission: "Our mission is to help businesses transform customer complaints into opportunities for improvement and relationship building. We believe that every complaint is a chance to exceed expectations.",
//       innovation: "The platform combines automation with human insight, ensuring complaints are handled efficiently while maintaining the personal touch that customers value. We've integrated smart routing and analytics to make complaint management proactive rather than reactive.",
//       future: "We're continuously evolving the platform with AI-powered sentiment analysis and predictive insights to help businesses identify issues before they escalate and improve overall customer experience."
//     }
//   },
//   'tappytoes-preschool-india': {
//     title: 'TappyToes Preschool India',
//     img: '/TTP.png',
//     description: 'TappyToes Preschool India is a comprehensive early childhood education platform designed to nurture young minds through innovative learning experiences. Located in Kandivali West, Mumbai, we provide a safe, engaging environment where children aged 2-6 years can explore, learn, and grow.',
//     stats: {
//       children: 'Over 200 children served annually',
//       satisfaction: '98% parent satisfaction rate',
//       skills: 'Holistic development through play-based learning'
//     },
//     technologies: [
//       'React',
//       'Next.js',
//       'Node.js',
//       'Express',
//       'PostgreSQL',
//       'AWS',
//       'Docker',
//       'Tailwind CSS',
//       'Framer Motion'
//     ],
//     achievements: [
//       '99.8% uptime',
//       'Over 500 daily interactions processed',
//       'Recognition from Maharashtra State Education Board',
//       'Real-time parent communication system'
//     ],
//     technicalDetails: 'Built with modern web technologies including React and Next.js for the parent portal, Node.js and Express for backend services, and PostgreSQL for student data management. We use AWS for cloud infrastructure and integrate with educational assessment tools for progress tracking.',
//     aiDetails: 'Our digital platform includes parent communication tools, daily activity reports, photo galleries, and progress tracking. The system features automated attendance tracking, meal planning, and event management to streamline preschool operations.',
//     founderMessage: {
//       personal: "TappyToes Preschool was born from my passion for early childhood education and the belief that every child deserves a strong foundation for learning. Having worked in education for over 15 years, I saw the need for a more holistic approach to preschool education.",
//       mission: "Our mission is to create a nurturing environment where children can learn through play, exploration, and discovery. We believe that the early years are crucial for developing a love of learning that will last a lifetime.",
//       innovation: "The platform represents our commitment to combining traditional teaching methods with modern technology. We've created tools that help parents stay connected with their child's learning journey while maintaining the personal touch that makes preschool special.",
//       future: "As we continue to grow, we're excited to expand our reach and help more children across India develop the skills and confidence they need to succeed in school and life."
//     }
//   },
//   'appointment-management-software': {
//     title: 'Appointment Management Software',
//     img: '/AM.png',
//     description: 'Our Appointment Management Software is a comprehensive scheduling solution designed to streamline appointment booking and management for service-based businesses. Built with user experience in mind, it eliminates scheduling conflicts and improves operational efficiency.',
//     stats: {
//       businesses: 'Over 15,000 businesses served',
//       appointments: '50,000+ appointments processed monthly',
//       efficiency: '60% increase in booking efficiency'
//     },
//     technologies: [
//       'React',
//       'Next.js',
//       'Node.js',
//       'Express',
//       'PostgreSQL',
//       'AWS',
//       'Docker',
//       'Tailwind CSS',
//       'Framer Motion'
//     ],
//     achievements: [
//       '99.8% uptime',
//       '35% reduction in no-show rates',
//       'Handles 2,000+ concurrent users',
//       'Multiple industry awards for innovation'
//     ],
//     technicalDetails: 'Built using React and Next.js for the frontend, Node.js and Express for the backend, and PostgreSQL for data storage. We use Redis for caching and real-time updates, ensuring fast and responsive user experience across all devices.',
//     aiDetails: 'Our intelligent scheduling algorithm automatically finds optimal time slots based on availability, preferences, and business rules. The system integrates with popular calendar applications and sends automated reminders to reduce no-shows.',
//     founderMessage: {
//       personal: "The idea for our Appointment Management Software came from my own frustrating experiences trying to book appointments with various service providers. The endless back-and-forth calls, double bookings, and missed appointments were problems that needed solving.",
//       mission: "We spent months researching the pain points of both service providers and customers, then built a solution that addresses every aspect of the appointment booking process. Our goal was to make scheduling as simple as ordering food online.",
//       innovation: "Today, I'm proud to see how our platform has transformed the way businesses handle appointments. From small local businesses to large healthcare networks, we've made scheduling efficient and stress-free for everyone involved.",
//       future: "The future of appointment management is exciting. We're working on AI-powered scheduling optimization and predictive analytics to help businesses better understand their booking patterns and customer preferences."
//     }
//   },
//   'dealerspot-car-management-software': {
//     title: 'DealerSpot – Car Management Software',
//     img: '/DCM.png',
//     description: 'DealerSpot is a comprehensive car dealership management platform that streamlines inventory management, sales processes, and customer relationships. Built specifically for the automotive industry, it addresses the unique challenges faced by car dealerships.',
//     stats: {
//       dealerships: 'Over 500 dealerships nationwide',
//       vehicles: '100,000+ vehicles managed',
//       efficiency: '45% increase in sales efficiency'
//     },
//     technologies: [
//       'React',
//       'Next.js',
//       'Node.js',
//       'Express',
//       'MongoDB',
//       'AWS',
//       'Docker',
//       'Tailwind CSS',
//       'Framer Motion'
//     ],
//     achievements: [
//       '99.9% uptime',
//       'Over 10,000 daily transactions processed',
//       '70% reduction in inventory management time',
//       'Recognition from major automotive industry associations'
//     ],
//     technicalDetails: 'Built with React and Next.js for the frontend, Node.js and Express for the backend, and MongoDB for flexible data storage. We use AWS for cloud infrastructure and integrate with various automotive data providers for real-time vehicle information.',
//     aiDetails: 'Our advanced inventory management system automatically tracks vehicle status, pricing, and availability. The platform includes CRM functionality, sales tracking, and financial reporting tools specifically designed for automotive businesses.',
//     founderMessage: {
//       personal: "DealerSpot was born from my experience working in the automotive industry and seeing firsthand how outdated most dealership management systems were. The lack of integration between different departments and manual processes were holding back the industry.",
//       mission: "Our mission is to modernize car dealership operations through technology. We believe that with the right tools, dealerships can provide better customer experiences while improving their own operational efficiency.",
//       innovation: "The platform represents years of understanding the automotive industry's unique needs and challenges. We've worked closely with dealership owners and staff to ensure our solution addresses real-world problems.",
//       future: "As the automotive industry continues to evolve with electric vehicles and online sales, we're excited to be at the forefront of technology that helps dealerships adapt and thrive in this changing landscape."
//     }
//   }
// }

// export default function ProductDetail() {
//   const { slug } = useParams()
//   const navigate = useNavigate()
//   const product = productData[slug]
//   const [visible, setVisible] = useState({
//     banner: false,
//     introduction: false,
//     technologies: false,
//     founder: false
//   })

//   const introRef = useRef(null)
//   const techRef = useRef(null)
//   const founderRef = useRef(null)

//   useEffect(() => {
//     if (!product) {
//       navigate('/')
//       return
//     }

//     const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const section = entry.target.getAttribute('data-section')
//           setVisible((prev) => ({ ...prev, [section]: true }))
//         }
//       })
//     }, observerOptions)

//     // Observe banner immediately
//     setVisible((prev) => ({ ...prev, banner: true }))

//     // Observe sections
//     if (introRef.current) observer.observe(introRef.current)
//     if (techRef.current) observer.observe(techRef.current)
//     if (founderRef.current) observer.observe(founderRef.current)

//     return () => observer.disconnect()
//   }, [slug, navigate, product])

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       const offset = 100 // Navbar height offset
//       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
//       window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
//     }
//   }

//   if (!product) return null

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-1">
//         {/* Breadcrumb */}
//         <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
//             <nav className="flex items-center gap-2 text-sm">
//               <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
//               <span className="text-gray-400">/</span>
//               <Link to="/" className="text-gray-600 hover:text-primary">Products</Link>
//               <span className="text-gray-400">/</span>
//               <span className="text-gray-900 font-medium">{product.title}</span>
//             </nav>
//           </div>
//         </div>

//         {/* Back Button */}
//         <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
//             <button
//               onClick={() => {
//                 navigate('/')
//                 setTimeout(() => {
//                   const element = document.getElementById('projects')
//                   if (element) {
//                     const offset = 100
//                     const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
//                     window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
//                   }
//                 }, 100)
//               }}
//               className="inline-flex items-center gap-2 text-primary font-semibold hover:underline focus-ring"
//             >
//               ← Back to Products
//             </button>
//           </div>
//         </div>

//         {/* Banner Section */}
//         <section className={`relative overflow-hidden transition-opacity duration-1000 ${visible.banner ? 'opacity-100' : 'opacity-0'}`}>
//           <div className="aspect-[16/6] bg-gradient-to-br from-saffron/20 via-white to-emerald/20 relative">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <img
//                 src={product.img}
//                 alt={product.title}
//                 className={`max-w-4xl w-full h-full object-contain transition-transform duration-1000 ${visible.banner ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
//               />
//             </div>
//           </div>
//           <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
//               <h1 className={`font-heading text-4xl sm:text-5xl font-extrabold text-navy text-center transition-transform duration-1000 ${visible.banner ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//                 {product.title}
//               </h1>
//             </div>
//           </div>
//         </section>

//         {/* Main Content Layout */}
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* Left Sidebar */}
//             <aside className="lg:col-span-1">
//               <div className="sticky top-24">
//                 <nav className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
//                   <h2 className="font-semibold text-gray-900 mb-4">Quick Navigation</h2>
//                   <ul className="space-y-3">
//                     <li>
//                       <button
//                         onClick={() => scrollToSection('introduction')}
//                         className="w-full text-left text-gray-700 hover:text-primary focus-ring py-2 px-3 rounded-lg hover:bg-ash transition-colors"
//                       >
//                         Introduction
//                       </button>
//                     </li>
//                     <li>
//                       <button
//                         onClick={() => scrollToSection('technologies')}
//                         className="w-full text-left text-gray-700 hover:text-primary focus-ring py-2 px-3 rounded-lg hover:bg-ash transition-colors"
//                       >
//                         Technologies
//                       </button>
//                     </li>
//                     <li>
//                       <button
//                         onClick={() => scrollToSection('founder-message')}
//                         className="w-full text-left text-gray-700 hover:text-primary focus-ring py-2 px-3 rounded-lg hover:bg-ash transition-colors"
//                       >
//                         Founder Message
//                       </button>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </aside>

//             {/* Right Main Content */}
//             <div className="lg:col-span-3 space-y-12">
//               {/* Introduction Section */}
//               <section
//                 id="introduction"
//                 ref={introRef}
//                 data-section="introduction"
//                 className={`transition-all duration-1000 ${visible.introduction ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
//               >
//                 <h2 className="font-heading text-3xl font-extrabold text-navy mb-6">Introduction</h2>
//                 <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 space-y-6">
//                   <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
                  
//                   {product.stats && (
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//                       {Object.entries(product.stats).slice(0, 3).map(([key, value], idx) => {
//                         const labels = {
//                           clients: 'Premium clients served',
//                           ageReversal: 'Average age reversal',
//                           improvement: 'Biological age improvement',
//                           volume: 'Loan volume processed',
//                           satisfaction: 'Client satisfaction rate',
//                           businesses: 'Businesses served',
//                           complaints: 'Complaints processed monthly',
//                           resolution: 'Resolution rate',
//                           children: 'Children served annually',
//                           skills: 'Skills development focus',
//                           appointments: 'Appointments processed monthly',
//                           efficiency: 'Efficiency improvement',
//                           dealerships: 'Dealerships served',
//                           vehicles: 'Vehicles managed'
//                         }
//                         return (
//                           <div key={idx} className="bg-ash rounded-xl p-6">
//                             <p className="font-semibold text-navy mb-2">{value}</p>
//                             <p className="text-sm text-gray-600">{labels[key] || key}</p>
//                           </div>
//                         )
//                       })}
//                     </div>
//                   )}

//                   <div className="mt-8">
//                     <h3 className="font-semibold text-xl text-gray-900 mb-4">Technical Architecture</h3>
//                     <p className="text-gray-700 leading-relaxed">{product.technicalDetails}</p>
//                   </div>

//                   <div className="mt-6">
//                     <h3 className="font-semibold text-xl text-gray-900 mb-4">AI-Powered Analysis</h3>
//                     <p className="text-gray-700 leading-relaxed">{product.aiDetails}</p>
//                   </div>

//                   <div className="mt-8">
//                     <h3 className="font-semibold text-xl text-gray-900 mb-4">Key Achievements</h3>
//                     <ul className="space-y-2">
//                       {product.achievements.map((achievement, idx) => (
//                         <li key={idx} className="flex items-start gap-3">
//                           <span className="text-emerald mt-1">✓</span>
//                           <span className="text-gray-700">{achievement}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </section>

//               {/* Technologies Section */}
//               <section
//                 id="technologies"
//                 ref={techRef}
//                 data-section="technologies"
//                 className={`transition-all duration-1000 ${visible.technologies ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
//               >
//                 <h2 className="font-heading text-3xl font-extrabold text-navy mb-6">Technologies / Frameworks Used</h2>
//                 <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
//                   <div className="flex flex-wrap gap-3">
//                     {product.technologies.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm border border-primary/20 hover:bg-primary/20 transition-colors"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </section>

//               {/* Founder Message Section */}
//               <section
//                 id="founder-message"
//                 ref={founderRef}
//                 data-section="founder"
//                 className={`transition-all duration-1000 ${visible.founder ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
//               >
//                 <h2 className="font-heading text-3xl font-extrabold text-navy mb-6">Message From the Founder</h2>
//                 <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 space-y-6">
//                   <div>
//                     <h3 className="font-semibold text-lg text-gray-900 mb-3">Personal Journey</h3>
//                     <p className="text-gray-700 leading-relaxed">{product.founderMessage.personal}</p>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg text-gray-900 mb-3">Our Mission</h3>
//                     <p className="text-gray-700 leading-relaxed">{product.founderMessage.mission}</p>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg text-gray-900 mb-3">Innovation & Research</h3>
//                     <p className="text-gray-700 leading-relaxed">{product.founderMessage.innovation}</p>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg text-gray-900 mb-3">Looking Ahead</h3>
//                     <p className="text-gray-700 leading-relaxed">{product.founderMessage.future}</p>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }


import { useEffect, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function createSlug(title) {
  return title.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const productData = {
  'bio-hacking-luxe': {
    title: 'Bio Hacking Luxe',
    img: '/biohack.png',
    description: 'Bio Hacking Luxe is a cutting-edge health optimization platform that combines genetic testing, hormone therapy, and advanced wellness tracking to help clients achieve peak physical and mental performance. Our comprehensive approach addresses every aspect of human optimization.',
    stats: {
      clients: '5,000+ premium clients worldwide',
      ageReversal: '7-10 years average age reversal',
      improvement: 'Up to 40% improvement in biological age markers within the first year'
    },
    technologies: [
      'React',
      'Next.js',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Docker',
      'LangChain',
      'OpenAI',
      'Tailwind CSS'
    ],
    achievements: [
      '99.95% uptime',
      'Over 1,000 health assessments processed daily',
      'FDA recognition for innovative approach to personalized medicine',
      'Featured in leading health and wellness publications'
    ],
    technicalDetails: 'Built with React and Next.js for the frontend, Python and FastAPI for data processing, and advanced machine learning algorithms for personalized recommendations. We use secure cloud infrastructure to protect sensitive health data and ensure HIPAA compliance.',
    aiDetails: 'Our AI-powered analysis engine processes genetic data, blood work, and lifestyle factors to create personalized optimization plans. The platform integrates with wearable devices and provides real-time health monitoring and recommendations.',
    founderMessage: {
      personal: "Bio Hacking Luxe was born from my personal journey of discovering the power of personalized health optimization. After years of struggling with conventional medicine, I realized that one-size-fits-all approaches don't work for complex human biology.",
      mission: "Our mission is to democratize access to advanced health optimization techniques that were previously only available to the ultra-wealthy. We believe everyone deserves to live their healthiest, most vibrant life possible.",
      innovation: "The platform represents years of research, collaboration with leading scientists, and continuous innovation in the field of personalized medicine. We're constantly pushing the boundaries of what's possible in human optimization.",
      future: "Looking ahead, we're excited about the potential of AI and machine learning to make personalized health optimization even more accessible and effective for people worldwide."
    }
  },
  'first-rate-mortgage-inc-frmi': {
    title: 'First Rate Mortgage Inc. (FRMI)',
    img: '/FRM.png',
    description: 'First Rate Mortgage Inc. (FRMI) is a California-based firm providing comprehensive mortgage solutions and real estate services. We specialize in residential and commercial loans, refinancing options, and complete real estate assistance for clients across California.',
    stats: {
      clients: 'Over 2,000 clients annually',
      volume: '$500 million in mortgage loans processed',
      satisfaction: '98% client satisfaction rate'
    },
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'PostgreSQL',
      'AWS',
      'Docker',
      'Tailwind CSS',
      'Framer Motion'
    ],
    achievements: [
      '99.9% uptime',
      'Over 1,000 loan applications processed monthly',
      'Licensed by the California Department of Real Estate',
      '15+ years of experience in mortgage services'
    ],
    technicalDetails: 'Built with modern web technologies including React and Next.js for the frontend, Node.js and Express for backend services, and PostgreSQL for secure financial data storage. We use AWS for cloud infrastructure and integrate with major lending institutions for real-time rate updates.',
    aiDetails: 'Our proprietary mortgage calculator and pre-qualification system helps clients understand their borrowing capacity and find the best loan products. The platform includes document management, application tracking, and real-time communication with loan officers.',
    founderMessage: {
      personal: "First Rate Mortgage Inc. was founded with the vision of making homeownership accessible and transparent for everyone. Having worked in the mortgage industry for over two decades, I saw the need for a more client-focused approach to lending.",
      mission: "Our mission is to simplify the mortgage process and provide personalized service that puts our clients' needs first. We believe that buying a home should be exciting, not stressful, and we work tirelessly to make that vision a reality.",
      innovation: "The platform represents our commitment to using technology to enhance the human touch in mortgage lending. We've built tools that make the process transparent and efficient while maintaining the personal relationships that matter most to our clients.",
      future: "As the real estate market continues to evolve, we're excited to be at the forefront of innovation in mortgage technology while maintaining our core values of integrity, transparency, and exceptional customer service."
    }
  },
  'complaint-management-software': {
    title: 'Complaint Management Software',
    img: '/CM.png',
    description: 'A comprehensive system to register, track, and resolve customer complaints efficiently with automated workflows. Built to streamline complaint handling processes and improve customer satisfaction across organizations.',
    stats: {
      businesses: '500+ businesses served',
      complaints: '10,000+ complaints processed monthly',
      resolution: '95% resolution rate within 48 hours'
    },
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'PostgreSQL',
      'AWS',
      'Docker',
      'Tailwind CSS',
      'Framer Motion'
    ],
    achievements: [
      '99.8% uptime',
      'Automated workflow processing',
      'Real-time notification system',
      'Comprehensive reporting and analytics'
    ],
    technicalDetails: 'Built with React and Next.js for an intuitive user interface, Node.js and Express for robust backend services, and PostgreSQL for reliable data storage. The system uses AWS cloud infrastructure for scalability and Docker for containerization.',
    aiDetails: 'Our intelligent complaint routing system automatically assigns complaints to appropriate teams based on category, priority, and workload. The platform includes automated escalation, status tracking, and customer communication tools.',
    founderMessage: {
      personal: "Having managed customer service teams, I understood the challenges of tracking and resolving complaints efficiently. This software was born from the need to create a centralized system that empowers teams to serve customers better.",
      mission: "Our mission is to help businesses transform customer complaints into opportunities for improvement and relationship building. We believe that every complaint is a chance to exceed expectations.",
      innovation: "The platform combines automation with human insight, ensuring complaints are handled efficiently while maintaining the personal touch that customers value. We've integrated smart routing and analytics to make complaint management proactive rather than reactive.",
      future: "We're continuously evolving the platform with AI-powered sentiment analysis and predictive insights to help businesses identify issues before they escalate and improve overall customer experience."
    }
  },
  'tappytoes-preschool-india': {
    title: 'TappyToes Preschool India',
    img: '/TTP.png',
    description: 'TappyToes Preschool India is a comprehensive early childhood education platform designed to nurture young minds through innovative learning experiences. Located in Kandivali West, Mumbai, we provide a safe, engaging environment where children aged 2-6 years can explore, learn, and grow.',
    stats: {
      children: 'Over 200 children served annually',
      satisfaction: '98% parent satisfaction rate',
      skills: 'Holistic development through play-based learning'
    },
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'PostgreSQL',
      'AWS',
      'Docker',
      'Tailwind CSS',
      'Framer Motion'
    ],
    achievements: [
      '99.8% uptime',
      'Over 500 daily interactions processed',
      'Recognition from Maharashtra State Education Board',
      'Real-time parent communication system'
    ],
    technicalDetails: 'Built with modern web technologies including React and Next.js for the parent portal, Node.js and Express for backend services, and PostgreSQL for student data management. We use AWS for cloud infrastructure and integrate with educational assessment tools for progress tracking.',
    aiDetails: 'Our digital platform includes parent communication tools, daily activity reports, photo galleries, and progress tracking. The system features automated attendance tracking, meal planning, and event management to streamline preschool operations.',
    founderMessage: {
      personal: "TappyToes Preschool was born from my passion for early childhood education and the belief that every child deserves a strong foundation for learning. Having worked in education for over 15 years, I saw the need for a more holistic approach to preschool education.",
      mission: "Our mission is to create a nurturing environment where children can learn through play, exploration, and discovery. We believe that the early years are crucial for developing a love of learning that will last a lifetime.",
      innovation: "The platform represents our commitment to combining traditional teaching methods with modern technology. We've created tools that help parents stay connected with their child's learning journey while maintaining the personal touch that makes preschool special.",
      future: "As we continue to grow, we're excited to expand our reach and help more children across India develop the skills and confidence they need to succeed in school and life."
    }
  },
  'appointment-management-software': {
    title: 'Appointment Management Software',
    img: '/AM.png',
    description: 'Our Appointment Management Software is a comprehensive scheduling solution designed to streamline appointment booking and management for service-based businesses. Built with user experience in mind, it eliminates scheduling conflicts and improves operational efficiency.',
    stats: {
      businesses: 'Over 15,000 businesses served',
      appointments: '50,000+ appointments processed monthly',
      efficiency: '60% increase in booking efficiency'
    },
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Docker',
      'Tailwind CSS',
      'Framer Motion'
    ],
    achievements: [
      '99.8% uptime',
      '35% reduction in no-show rates',
      'Handles 2,000+ concurrent users',
      'Multiple industry awards for innovation'
    ],
    technicalDetails: 'Built using React and Next.js for the frontend, Node.js and Express for the backend, and PostgreSQL for data storage. We use Redis for caching and real-time updates, ensuring fast and responsive user experience across all devices.',
    aiDetails: 'Our intelligent scheduling algorithm automatically finds optimal time slots based on availability, preferences, and business rules. The system integrates with popular calendar applications and sends automated reminders to reduce no-shows.',
    founderMessage: {
      personal: "The idea for our Appointment Management Software came from my own frustrating experiences trying to book appointments with various service providers. The endless back-and-forth calls, double bookings, and missed appointments were problems that needed solving.",
      mission: "We spent months researching the pain points of both service providers and customers, then built a solution that addresses every aspect of the appointment booking process. Our goal was to make scheduling as simple as ordering food online.",
      innovation: "Today, I'm proud to see how our platform has transformed the way businesses handle appointments. From small local businesses to large healthcare networks, we've made scheduling efficient and stress-free for everyone involved.",
      future: "The future of appointment management is exciting. We're working on AI-powered scheduling optimization and predictive analytics to help businesses better understand their booking patterns and customer preferences."
    }
  },
  'dealerspot-car-management-software': {
    title: 'DealerSpot – Car Management Software',
    img: '/DCM.png',
    description: 'DealerSpot is a comprehensive car dealership management platform that streamlines inventory management, sales processes, and customer relationships. Built specifically for the automotive industry, it addresses the unique challenges faced by car dealerships.',
    stats: {
      dealerships: 'Over 500 dealerships nationwide',
      vehicles: '100,000+ vehicles managed',
      efficiency: '45% increase in sales efficiency'
    },
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'AWS',
      'Docker',
      'Tailwind CSS',
      'Framer Motion'
    ],
    achievements: [
      '99.9% uptime',
      'Over 10,000 daily transactions processed',
      '70% reduction in inventory management time',
      'Recognition from major automotive industry associations'
    ],
    technicalDetails: 'Built with React and Next.js for the frontend, Node.js and Express for the backend, and MongoDB for flexible data storage. We use AWS for cloud infrastructure and integrate with various automotive data providers for real-time vehicle information.',
    aiDetails: 'Our advanced inventory management system automatically tracks vehicle status, pricing, and availability. The platform includes CRM functionality, sales tracking, and financial reporting tools specifically designed for automotive businesses.',
    founderMessage: {
      personal: "DealerSpot was born from my experience working in the automotive industry and seeing firsthand how outdated most dealership management systems were. The lack of integration between different departments and manual processes were holding back the industry.",
      mission: "Our mission is to modernize car dealership operations through technology. We believe that with the right tools, dealerships can provide better customer experiences while improving their own operational efficiency.",
      innovation: "The platform represents years of understanding the automotive industry's unique needs and challenges. We've worked closely with dealership owners and staff to ensure our solution addresses real-world problems.",
      future: "As the automotive industry continues to evolve with electric vehicles and online sales, we're excited to be at the forefront of technology that helps dealerships adapt and thrive in this changing landscape."
    }
  }
}

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = productData[slug]
  const [visible, setVisible] = useState({
    banner: false,
    introduction: false,
    technologies: false,
    founder: false
  })

  const introRef = useRef(null)
  const techRef = useRef(null)
  const founderRef = useRef(null)


  // ✅ Scroll to top when page loads or slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  useEffect(() => {
    if (!product) {
      navigate('/')
      return
    }

    // Animate banner on mount
    setVisible((prev) => ({ ...prev, banner: true }))

    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section')
          setVisible((prev) => ({ ...prev, [section]: true }))
        }
      })
    }, observerOptions)

    if (introRef.current) observer.observe(introRef.current)
    if (techRef.current) observer.observe(techRef.current)
    if (founderRef.current) observer.observe(founderRef.current)

    return () => observer.disconnect()
  }, [slug, navigate, product])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 100
      const pos = el.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: pos - offset, behavior: 'smooth' })
    }
  }

  if (!product) return null

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f7]">
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/" className="text-gray-600 hover:text-primary">Products</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{product.title}</span>
            </nav>
          </div>
        </div>

        {/* Back Button */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <button
              onClick={() => {
                navigate('/')
                setTimeout(() => {
                  const element = document.getElementById('projects')
                  if (element) {
                    const offset = 100
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                    window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
                  }
                }, 100)
              }}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline focus-ring"
            >
              ← Back to Products
            </button>
          </div>
        </div>

        {/* Layout */}
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column */}
            <aside className="lg:col-span-1 space-y-8">
              
              {/* Banner */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
                <div className="relative h-[260px] bg-gradient-to-br from-saffron/20 via-white to-saffron/20">
                  <img
                    src={product.img}
                    alt={product.title}
                    className={`w-full h-full object-contain transition-all duration-1000 ${visible.banner ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}
                  />
                </div>
                <div className={`p-6 text-center transition-all duration-1000 ${visible.banner ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <h1 className="font-heading text-2xl font-extrabold text-navy">{product.title}</h1>
                </div>
              </div>

              {/* Quick Navigation */}
              <nav className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                <h2 className="font-semibold text-gray-900 mb-4">Quick Navigation</h2>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => scrollToSection('introduction')}
                      className="w-full text-left text-gray-700 hover:text-primary py-2 px-3 rounded-lg hover:bg-ash transition"
                    >
                      Introduction
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('technologies')}
                      className="w-full text-left text-gray-700 hover:text-primary py-2 px-3 rounded-lg hover:bg-ash transition"
                    >
                      Technologies
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('founder-message')}
                      className="w-full text-left text-gray-700 hover:text-primary py-2 px-3 rounded-lg hover:bg-ash transition"
                    >
                      Founder Message
                    </button>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-12">

              {/* Introduction */}
              <section
                id="introduction"
                ref={introRef}
                data-section="introduction"
                className={`transition-all duration-1000 ${visible.introduction ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <h2 className="font-heading text-3xl font-extrabold text-navy mb-6">Introduction</h2>
                <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
                  
                  {product.stats && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {Object.entries(product.stats).slice(0, 3).map(([key, value], i) => {
                        const labels = {
                          clients: 'Premium clients served',
                          ageReversal: 'Average age reversal',
                          improvement: 'Biological age improvement',
                          volume: 'Loan volume processed',
                          satisfaction: 'Client satisfaction rate',
                          businesses: 'Businesses served',
                          complaints: 'Complaints processed monthly',
                          resolution: 'Resolution rate',
                          children: 'Children served annually',
                          skills: 'Skills development focus',
                          appointments: 'Appointments processed monthly',
                          efficiency: 'Efficiency improvement',
                          dealerships: 'Dealerships served',
                          vehicles: 'Vehicles managed'
                        }
                        return (
                          <div key={i} className="bg-ash rounded-xl p-6">
                            <p className="font-semibold text-navy mb-2">{value}</p>
                            <p className="text-sm text-gray-600">{labels[key] || key}</p>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold text-xl mb-2">Technical Architecture</h3>
                    <p className="text-gray-700">{product.technicalDetails}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl mb-2">AI-Powered Analysis</h3>
                    <p className="text-gray-700">{product.aiDetails}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl mb-2">Key Achievements</h3>
                    <ul className="space-y-2">
                      {product.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald mt-1">✓</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technologies */}
              <section
                id="technologies"
                ref={techRef}
                data-section="technologies"
                className={`transition-all duration-1000 ${visible.technologies ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <h2 className="font-heading text-3xl font-extrabold text-navy mb-6">Technologies Used</h2>
                <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 flex flex-wrap gap-3">
                  {product.technologies.map((tech, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Founder Message */}
              <section
                id="founder-message"
                ref={founderRef}
                data-section="founder"
                className={`transition-all duration-1000 ${visible.founder ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <h2 className="font-heading text-3xl font-extrabold text-navy mb-6">Message from the Founder</h2>
                <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Personal Journey</h3>
                    <p className="text-gray-700">{product.founderMessage.personal}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                    <p className="text-gray-700">{product.founderMessage.mission}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Innovation & Research</h3>
                    <p className="text-gray-700">{product.founderMessage.innovation}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Looking Ahead</h3>
                    <p className="text-gray-700">{product.founderMessage.future}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
