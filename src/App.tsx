import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './components/Hero';
import { RealObjectReconstruction } from './components/RealObjectReconstruction';
import { EvaluationDataset } from './components/EvaluationDataset';
import { UserStudy } from './components/UserStudy';

function App() {
  return (
    <>
      <ScrollToTop />
      <main id="main-content">
        <Hero />
        <RealObjectReconstruction />
        <EvaluationDataset />
        <UserStudy />
      </main>
    </>
  );
}

export default App;
