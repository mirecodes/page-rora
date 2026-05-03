import { ScrollToTop } from './components/ScrollToTop';
// import { MoreWorks } from './components/MoreWorks';
import { Hero } from './components/Hero';
import { Abstract } from './components/Abstract';
import { Introduction } from './components/Introduction';
import { Methodology } from './components/Methodology';
import { QualitativeResults } from './components/QualitativeResults';
import { Experiments } from './components/Experiments';
import { Applications } from './components/Applications';
import { Poster } from './components/Poster';
import { BibTeX } from './components/BibTeX';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <ScrollToTop />
      {/* <MoreWorks /> */}
      
      <main id="main-content">
        <Hero />
        <Abstract />
        <Introduction />
        <Methodology />
        <QualitativeResults />
        <Experiments />
        <Applications />
        <Poster />
        <BibTeX />
      </main>

      <Footer />
    </>
  );
}

export default App;
