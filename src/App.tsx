import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const projects = [
    {
      title: 'Rivals Sportsbook',
      description: 'Peer-to-peer sports betting platform enabling users to create and accept wagers directly with each other, eliminating the traditional bookmaker.',
      image: 'https://plus.unsplash.com/premium_photo-1726754570975-cdfec36e7ebd?q=80&w=1714&auto=format&fit=crop&ixlib=rb-4.1.0',
      link: 'https://rivalssportsbook.com/',
      type: 'web' as const,
      techStack: ['React', 'Node.js', 'Firebase', 'Stripe'],
      role: 'Full-Stack Development & Architecture',
    },
    {
      title: 'TradeMetricX',
      description: 'Trading journal for documenting trades and generating analytical charts including P/L tracking, win/loss ratios, and various day trading performance metrics.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200',
      link: 'https://trade-metric-x-web.vercel.app/',
      type: 'web' as const,
      techStack: ['React', 'TypeScript', 'Charts.js', 'Vercel'],
      role: 'Full-Stack Development & UI Design',
    },
    {
      title: 'Maxout Pro',
      description: 'Comprehensive fitness platform connecting professional trainers with athletes. Features workout tracking, progress analytics, and trainer marketplace.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
      link: 'https://maxoutpro.vercel.app/',
      type: 'iOS' as const,
      techStack: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
      role: 'Frontend Development & UI Design',
    },
    {
      title: 'OnWay Bookings',
      description: 'Travel booking platform streamlining the reservation experience for hotels, flights, and experiences with real-time availability.',
      image: 'https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0',
      link: 'https://onwaybookings.com/',
      type: 'iOS' as const,
      techStack: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS'],
      role: 'Full-Stack Development',
    },
    {
      title: 'ViewPoints',
      description: 'iOS app for discovering and sharing points of interest. Location-based social features with user-generated content and reviews.',
      image: 'https://images.unsplash.com/photo-1512593608871-4ad42476b9db?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0',
      link: 'https://apps.apple.com/us/app/viewpoints/id1077165555',
      type: 'mobile' as const,
      techStack: ['Swift', 'UIKit', 'MapKit', 'Firebase'],
      role: 'iOS Development',
    },
    {
      title: '35 Partners',
      description: 'Corporate website for a business consulting firm. Clean, professional design with lead generation and service showcase.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
      link: 'https://35partners.com/',
      type: 'web' as const,
      techStack: ['React', 'CSS', 'Framer Motion'],
      role: 'Frontend Development & Design',
    },
    {
      title: 'Finnovation Hub',
      description: 'Finance and innovation publication featuring market insights, startup news, and fintech analysis for industry professionals.',
      image: 'https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1855&auto=format&fit=crop&ixlib=rb-4.1.0',
      link: 'https://finnovationhub.com/',
      type: 'web' as const,
      techStack: ['Next.js', 'MDX', 'CSS', 'Vercel'],
      role: 'Full-Stack Development',
    },
    {
      title: 'MyBingeBuddy',
      description: 'Discover popular and trending TV shows and movies. Share what you\'re watching with friends and keep track of your entertainment favorites.',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1200',
      link: 'https://showtrackr.vercel.app/',
      type: 'web' as const,
      techStack: ['React', 'TMDB API', 'CSS', 'Vercel'],
      role: 'Full-Stack Development',
    },
    {
      title: 'Aura Dating App',
      description: 'Dating website with a unique twist — rate users on a 1-10 scale based on initial perception, attractiveness, and aura before connecting.',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1200',
      link: 'https://www.auradatingapp.com/',
      type: 'web' as const,
      techStack: ['React', 'Node.js', 'Firebase', 'CSS'],
      role: 'Full-Stack Development',
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <section id="projects" className="section scroll-mt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title gradient-text">Featured Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Tech Stack */}
      <TechStack />

      {/* Contact CTA */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;