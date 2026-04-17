import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import RealEstate from './pages/services/RealEstate'
import Dental from './pages/services/Dental'
import Barbershops from './pages/services/Barbershops'
import OtherLocalBusinesses from './pages/services/Construction'
import HVAC from './pages/services/HVAC'
import Plumbing from './pages/services/Plumbing'
import Landscaping from './pages/services/Landscaping'
import Electrical from './pages/services/Electrical'
import Roofing from './pages/services/Roofing'
import Cleaning from './pages/services/Cleaning'
import Medical from './pages/services/Medical'
import Transportation from './pages/services/Transportation'
import Insurance from './pages/services/Insurance'
import DrivingSchools from './pages/services/DrivingSchools'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/services/real-estate" element={<RealEstate />} />
        <Route path="/services/dental" element={<Dental />} />
        <Route path="/services/barbershops" element={<Barbershops />} />
        <Route path="/services/other-local-businesses" element={<OtherLocalBusinesses />} />
        <Route path="/services/hvac" element={<HVAC />} />
        <Route path="/services/plumbing" element={<Plumbing />} />
        <Route path="/services/landscaping" element={<Landscaping />} />
        <Route path="/services/electrical" element={<Electrical />} />
        <Route path="/services/roofing" element={<Roofing />} />
        <Route path="/services/cleaning" element={<Cleaning />} />
        <Route path="/services/medical" element={<Medical />} />
        <Route path="/services/transportation" element={<Transportation />} />
        <Route path="/services/insurance" element={<Insurance />} />
        <Route path="/services/driving-schools" element={<DrivingSchools />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
