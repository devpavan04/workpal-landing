import { DetailsSection, FeaturesSection, HeroSection, Navbar, TeamSection, VideoSection, Footer } from '../components';

export const Content = () => {
  return (
    <>
      <header className='block max-w-[1024px] m-auto px-[16px]'>
        <nav>
          {/* Navbar */}
          <Navbar />
        </nav>
      </header>

      {/* Hero Section */}
      <main className='block max-w-[1024px] m-auto px-[16px]'>
        <HeroSection />

        {/* Video Section */}
        <VideoSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Details Section */}
        {/* <DetailsSection /> */}

        {/* Team Section */}
        <TeamSection />
      </main>

      <footer className='block max-w-[1024px] m-auto px-[16px]'>
        {/* Footer */}
        <Footer />
      </footer>
    </>
  );
};
