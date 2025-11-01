import { Link } from 'react-router-dom'

// Helper function to create slug from title
function createSlug(title) {
  return title.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const items = [
  {
    title: 'Bio Hacking Luxe',
    desc: 'Advanced health optimization services including genetic testing, hormone therapy, and mental health treatments.',
    img: '/biohack.png',
  },
  {
    title: 'First Rate Mortgage Inc. (FRMI)',
    desc: 'California-based firm providing comprehensive mortgage solutions and real estate services.',
    img: '/FRM.png',
  },
  {
    title: 'Complaint Management Software',
    desc: 'System to register, track, and resolve customer complaints efficiently with automated workflows.',
    img: '/CM.png',
  },
  {
    title: 'TappyToes Preschool India',
    desc: 'Nurturing Little Minds, Building Big Futures - Where learning meets play in Kandivali West, Mumbai.',
    img: '/TTP.png',
  },
  {
    title: 'Appointment Management Software',
    desc: 'Tool to schedule, manage, and track appointments seamlessly with automated reminders.',
    img: '/AM.png',
  },
  {
    title: 'DealerSpot – Car Management Software',
    desc: 'Software to manage car inventories, sales, and services efficiently for dealerships.',
    img: '/DCM.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-gradient-to-b from-[#FFEDCD] to-[#95b595]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-navy text-center">
          OUR PRODUCTS
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Explore our innovative software solutions designed to streamline business operations and enhance efficiency across various industries.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-out"
              style={{ height: '430px' }}
            >
              {/* Image */}
              <div className="h-52 bg-gray-100 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[calc(100%-13rem)]">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
                <Link
                  to={`/products/${createSlug(p.title)}`}
                  className="mt-4 inline-flex text-primary font-semibold text-sm hover:underline self-start focus-ring"
                >
                  Know More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
