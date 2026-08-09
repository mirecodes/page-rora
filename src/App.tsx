import { ScrollToTop } from './components/ScrollToTop';
// import { MoreWorks } from './components/MoreWorks';
import { TestVideo } from './components/TestVideo';
import { Hero } from './components/Hero';
import { Abstract } from './components/Abstract';
import { Introduction } from './components/Introduction';
import { Methodology } from './components/Methodology';
import { RealObjectReconstruction } from './components/RealObjectReconstruction';
import { RoboticApplications } from './components/RoboticApplications';
import { BaselineComparisons } from './components/BaselineComparisons';
import { BibTeX } from './components/BibTeX';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <ScrollToTop />
      {/* <MoreWorks /> */}
      
      <main id="main-content">
        <TestVideo src="./static/videos/overview.mp4" />
        <Hero />
        <Abstract />
        <Introduction />
        <Methodology />
        <RealObjectReconstruction />
        <RoboticApplications />
        <BaselineComparisons />
        <BibTeX />
      </main>

      <Footer />
    </>
  );
}

export default App;
