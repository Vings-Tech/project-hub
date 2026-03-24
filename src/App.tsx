/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Footer from './components/footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="glass-nav">
          <div className="container mx-auto px-4 h-16 flex items-center justify-center">
            <a href="/" className="text-xl font-black tracking-tighter">
              PROJECT<span className="text-primary">HUB</span>
            </a>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
