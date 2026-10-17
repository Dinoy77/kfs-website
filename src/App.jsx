import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Programs from './pages/Programs.jsx'
import ProgramDetail from './pages/ProgramDetail.jsx'
import Scholarship from './pages/Scholarship.jsx'
import TestPrep from './pages/TestPrep.jsx'
import Faqs from './pages/Faqs.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

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
        <Route path="faqs" element={<Faqs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
