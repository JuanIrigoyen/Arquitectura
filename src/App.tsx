import { useState } from 'react';
import { Menu, X, Database, Cloud, Zap, Lock, Code, BarChart3, FileText, Server, Cpu, GitBranch } from 'lucide-react';
import HomeSection from './components/sections/HomeSection';
import MultitenantSection from './components/sections/MultitenantSection';
import MessagingSection from './components/sections/MessagingSection';
import WebCoreSection from './components/sections/WebCoreSection';
import CoreAPISection from './components/sections/CoreAPISection';
import CorporateWindowsSection from './components/sections/CorporateWindowsSection';
import ClassicSection from './components/sections/ClassicSection';
import CTMSSection from './components/sections/CTMSSection';
import IECSection from './components/sections/IECSection';
import AIAgentsSection from './components/sections/AIAgentsSection';
import AITicketsSection from './components/sections/AITicketsSection';
import NexusSection from './components/sections/NexusSection';
import SuiteSection from './components/sections/SuiteSection';
import PowerBISection from './components/sections/PowerBISection';
import DocumentSignSection from './components/sections/DocumentSignSection';
import InfrastructureSection from './components/sections/InfrastructureSection';

const FundanetDocs = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', name: 'Inicio', icon: Menu },
    { id: 'multitenant', name: 'Fundanet Multitenant', icon: Cloud },
    { id: 'messaging', name: 'Fundanet Message System', icon: Zap },
    { id: 'web-core', name: 'Fundanet Web Core', icon: Code },
    { id: 'core-api', name: 'Fundanet Core API', icon: Server },
    { id: 'corporate-windows', name: 'Fundanet Corporate Windows', icon: Database },
    { id: 'classic', name: 'Fundanet Classic', icon: FileText },
    { id: 'ctms', name: 'Fundanet CTMS', icon: Database },
    { id: 'iec', name: 'Fundanet IEC', icon: Lock },
    { id: 'ai-agents', name: 'Fundanet AI Agents', icon: Cpu },
    { id: 'ai-tickets', name: 'Fundanet AI Tickets', icon: FileText },
    { id: 'nexus', name: 'Fundanet Nexus', icon: GitBranch },
    { id: 'suite', name: 'Fundanet Suite', icon: BarChart3 },
    { id: 'powerbi', name: 'Fundanet Power BI', icon: BarChart3 },
    { id: 'document-sign', name: 'Fundanet Document Sign', icon: Lock },
    { id: 'infrastructure', name: 'Infraestructura', icon: Server },
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 'home': return <HomeSection sections={sections} setCurrentSection={setCurrentSection} />;
      case 'multitenant': return <MultitenantSection />;
      case 'messaging': return <MessagingSection />;
      case 'web-core': return <WebCoreSection />;
      case 'core-api': return <CoreAPISection />;
      case 'corporate-windows': return <CorporateWindowsSection />;
      case 'classic': return <ClassicSection />;
      case 'ctms': return <CTMSSection />;
      case 'iec': return <IECSection />;
      case 'ai-agents': return <AIAgentsSection />;
      case 'ai-tickets': return <AITicketsSection />;
      case 'nexus': return <NexusSection />;
      case 'suite': return <SuiteSection />;
      case 'powerbi': return <PowerBISection />;
      case 'document-sign': return <DocumentSignSection />;
      case 'infrastructure': return <InfrastructureSection />;
      default: return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sección: {sections.find(s => s.id === currentSection)?.name}</h2>
          <p className="text-gray-600">Documentación en desarrollo...</p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Fundanet Suite</h1>
              <p className="text-xs text-gray-500">Documentación Técnica</p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block w-64 flex-shrink-0`}>
            <nav className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h2 className="font-semibold text-gray-900 mb-3 px-2">Navegación</h2>
              <ul className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <li key={section.id}>
                      <button
                        onClick={() => {
                          setCurrentSection(section.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          currentSection === section.id
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm">{section.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <main className="flex-1 min-w-0">
            {renderSection()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default FundanetDocs;
