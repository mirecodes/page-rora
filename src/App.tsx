import { ScrollToTop } from './components/ScrollToTop';
import { MoreWorks } from './components/MoreWorks';
import { Hero } from './components/Hero';
import { Abstract } from './components/Abstract';
import { Methodology } from './components/Methodology';
import { ImageCarousel } from './components/ImageCarousel';
import { VideoSection } from './components/VideoSection';
import { Poster } from './components/Poster';
import { BibTeX } from './components/BibTeX';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <ScrollToTop />
      <MoreWorks />
      
      <main id="main-content">
        <Hero />
        <Abstract />
        <Methodology />
        <ImageCarousel />
        <VideoSection />
        <Poster />
        <BibTeX />
      </main>

      <Footer />
    </>
  );
}

export default App;
