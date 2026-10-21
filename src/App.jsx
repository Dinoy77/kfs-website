import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import InProgress from './pages/InProgress.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

// Pages still being prepared show the "We're updating this page" message (<InProgress />).
// When a page is ready, import it above and use it in place of <InProgress />.

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programs" element={<InProgress />} />
        <Route path="programs/:slug" element={<InProgress />} />
        <Route path="scholarship" element={<InProgress />} />
        <Route path="test-prep" element={<InProgress />} />
        <Route path="faqs" element={<InProgress />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<InProgress />} />
      </Route>
    </Routes>
  )
}