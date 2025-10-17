import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PersonalTrainingPage from './pages/PersonalTrainingPage';
import NutritionCoachingPage from './pages/NutritionCoachingPage';
import SpeedStrengthTrainingPage from './pages/SpeedStrengthTrainingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/personal-training" element={<PersonalTrainingPage />} />
        <Route path="/services/nutrition-coaching" element={<NutritionCoachingPage />} />
        <Route path="/services/speed-strength-training" element={<SpeedStrengthTrainingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
