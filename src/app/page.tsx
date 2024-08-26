import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../app/components/common/Navbar'; // Import the Navbar component

// Type definitions
type Feature = {
  title: string;
  icon: string;
  description: string;
}

type FeatureCardProps = {
  feature: Feature;
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
}

// Component definitions
const Button: React.FC<ButtonProps> = ({ href, children }) => (
  <Link href={href} className="bg-yellow-400 text-indigo-800 py-2 px-6 rounded-full font-bold hover:bg-yellow-500 transition duration-300">
    {children}
  </Link>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <div className="text-4xl mb-4">{feature.icon}</div>
    <h3 className="text-xl font-semibold text-indigo-800 mb-2">{feature.title}</h3>
    <p className="text-gray-700">{feature.description}</p>
  </div>
);

const features: Feature[] = [
  { title: 'Course Management', icon: '📚', description: 'Easily create and manage your courses.' },
  { title: 'Student Enrollment', icon: '👥', description: 'Streamline the enrollment process.' },
  { title: 'Grade Tracking', icon: '📊', description: 'Keep track of student performance.' },
];

// Main component
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> {/* Include Navbar at the top */}
      
      {/* Hero Section */}
      <header className="bg-indigo-800 text-gray-100">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to EduMaster</h1>
              <p className="text-xl mb-6">Manage your courses, enrollments, and grades with ease.</p>
              <Button href="/register">Get Started</Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/image.jpg"
                alt="Students studying"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-800 text-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-8">Join thousands of educators and students already using EduMaster.</p>
          <Button href="/register">Sign Up Now</Button>
        </div>
      </section>
    </div>
  )
}

export default Home;
