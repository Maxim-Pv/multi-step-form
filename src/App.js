import { Route, Routes } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import StepsNavigation from './components/StepsNavigation';
import './styles/main.css';

function App() {
  return (
    <div className="container">
      <StepsNavigation />
      <Routes>
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/" exact element={<Step1 />} />
      </Routes>
    </div>
  );
}

export default App;
