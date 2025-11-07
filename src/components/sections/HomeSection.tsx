import { ChevronRight } from 'lucide-react';

interface HomeSectionProps {
  sections: Array<{
    id: string;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  setCurrentSection: (section: string) => void;
}

const HomeSection = ({ sections, setCurrentSection }: HomeSectionProps) => (
  <div className="space-y-8">
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Fundanet Suite</h1>
      <p className="text-xl text-gray-600">Ecosistema integral para gestión de investigación clínica</p>
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">.NET Core 9</span>
        <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">Azure Cloud</span>
        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">Microservicios</span>
        <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">IA Integrada</span>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {sections.slice(1, 13).map((section) => {
        const Icon = section.icon;
        return (
          <button
            key={section.id}
            onClick={() => setCurrentSection(section.id)}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-left group"
          >
            <Icon className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-gray-900 mb-2">{section.name}</h3>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
          </button>
        );
      })}
    </div>

    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Herramientas, Servicios e Infraestructura</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {sections.slice(13).map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-left group"
            >
              <Icon className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">{section.name}</h3>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </button>
          );
        })}
      </div>
    </div>
  </div>
);

export default HomeSection;
