import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import InProgress from './pages/InProgress.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Faqs from './pages/Faqs.jsx'
import Clients from './pages/Clients.jsx'
import ProgramDetail from './pages/ProgramDetail.jsx'
import Scholarship from './pages/Scholarship.jsx'
import Programs from './pages/Programs.jsx'
import TestPrep from './pages/TestPrep.jsx'
import Legal from './pages/Legal.jsx'


// Pages still being prepared show the "We're updating this page" message (<InProgress />).
// When a page is ready, import it above and use it in place of <InProgress />.

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programs" element={<Programs />} />
        <Route path="programs/:slug" element={<ProgramDetail />} />
        <Route path="scholarship" element={<Scholarship />} />
        <Route path="test-prep" element={<TestPrep />} />
        <Route path="clients" element={<Clients />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms-and-conditions" element={<Legal page="terms" />} />
        <Route path="privacy-policy" element={<Legal page="privacy" />} />
        <Route path="*" element={<InProgress />} />
      </Route>
    </Routes>
  )
}