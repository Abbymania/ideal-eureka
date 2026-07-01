import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { RouteAnalysis } from './pages/RouteAnalysis';
import { AccidentHotspots } from './pages/AccidentHotspots';
import { Alerts } from './pages/Alerts';
import { About } from './pages/About';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/route-analysis" element={<RouteAnalysis />} />
            <Route path="/hotspots" element={<AccidentHotspots />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
