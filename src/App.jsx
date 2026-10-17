import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import InProgress from './pages/InProgress.jsx'

// While content is being prepared, every page shows the "being updated" message.
// The finished pages are still in src/pages/ — to switch a page back on, import it
// and use it in place of <InProgress />, e.g.:
//   import About from './pages/About.jsx'
//   <Route path="about" element={<About />} />

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<InProgress />} />
        <Route path="about" element={<InProgress />} />
        <Route path="programs" element={<InProgress />} />
        <Route path="programs/:slug" element={<InProgress />} />
        <Route path="scholarship" element={<InProgress />} />
        <Route path="test-prep" element={<InProgress />} />
        <Route path="faqs" element={<InProgress />} />
        <Route path="contact" element={<InProgress />} />
        <Route path="*" element={<InProgress />} />
      </Route>
    </Routes>
  )
}