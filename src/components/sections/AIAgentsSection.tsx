import CheckIcon from '../common/CheckIcon';

const AIAgentsSection = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-8 rounded-lg border border-violet-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet AI Agents</h1>
      <p className="text-lg text-gray-700">Sistema de automatización inteligente para estudios clínicos</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción del Proyecto</h2>
      <p className="text-gray-700 mb-4">Fundanet AI Agents es una solución inteligente desarrollada por Semicrol para automatizar tareas críticas y repetitivas en la gestión de estudios clínicos, reduciendo drásticamente el esfuerzo manual y los errores humanos.</p>
      <p className="text-gray-700">El sistema transforma automáticamente la memoria del estudio clínico (PDF) en un Excel estructurado y validado para su importación directa en el sistema CTMS. Está diseñado para integrarse con Fundanet Corporate y otros módulos del ecosistema (CTMS, IEC, Fundraising, etc.).</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura y Componentes</h2>
      <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
        <svg viewBox="0 0 900 500" className="w-full">
          <defs>
            <marker id="arrowviolet" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#8b5cf6" />
            </marker>
          </defs>

          <rect x="50" y="150" width="140" height="80" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" rx="5"/>
          <text x="120" y="180" textAnchor="middle" className="text-sm font-bold" fill="#6b21a8">Usuario</text>
          <text x="120" y="200" textAnchor="middle" className="text-xs" fill="#8b5cf6">Subida PDF</text>
          <text x="120" y="215" textAnchor="middle" className="text-xs" fill="#8b5cf6">Memoria Estudio</text>

          <rect x="250" y="150" width="160" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
          <text x="330" y="175" textAnchor="middle" className="text-sm font-bold" fill="#d97706">Aplicación Web</text>
          <text x="330" y="195" textAnchor="middle" className="text-xs" fill="#f59e0b">Interfaz Usuario</text>
          <text x="330" y="210" textAnchor="middle" className="text-xs" fill="#f59e0b">Parametrización</text>

          <rect x="470" y="100" width="180" height="130" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
          <text x="560" y="130" textAnchor="middle" className="text-sm font-bold" fill="#1e40af">Backend AI Service</text>
          <text x="560" y="150" textAnchor="middle" className="text-xs" fill="#3b82f6">FastAPI + Python</text>
          <rect x="490" y="165" width="140" height="50" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1" rx="3"/>
          <text x="560" y="185" textAnchor="middle" className="text-xs font-semibold" fill="#1e40af">Procesamiento PDF</text>
          <text x="560" y="200" textAnchor="middle" className="text-xs" fill="#3b82f6">Haystack + PII</text>

          <rect x="700" y="100" width="150" height="80" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" rx="5"/>
          <text x="775" y="130" textAnchor="middle" className="text-sm font-bold" fill="#6b21a8">Azure OpenAI</text>
          <text x="775" y="150" textAnchor="middle" className="text-xs" fill="#9333ea">GPT-4o</text>
          <text x="775" y="165" textAnchor="middle" className="text-xs" fill="#9333ea">Residencia UE</text>

          <rect x="700" y="200" width="150" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="775" y="225" textAnchor="middle" className="text-xs font-bold" fill="#15803d">Azure Foundry</text>
          <text x="775" y="245" textAnchor="middle" className="text-xs" fill="#16a34a">Plataforma IA</text>

          <rect x="470" y="280" width="180" height="60" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
          <text x="560" y="305" textAnchor="middle" className="text-xs font-bold" fill="#be185d">Generador Excel</text>
          <text x="560" y="325" textAnchor="middle" className="text-xs" fill="#ec4899">OpenPyXL</text>

          <rect x="250" y="300" width="160" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="330" y="325" textAnchor="middle" className="text-xs font-bold" fill="#15803d">Excel CTMS</text>
          <text x="330" y="345" textAnchor="middle" className="text-xs" fill="#16a34a">Listo importación</text>

          <line x1="190" y1="190" x2="250" y2="190" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowviolet)"/>
          <line x1="410" y1="190" x2="470" y2="165" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowviolet)"/>
          <line x1="650" y1="140" x2="700" y2="140" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowviolet)"/>
          <line x1="650" y1="165" x2="700" y2="230" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowviolet)"/>
          <line x1="560" y1="230" x2="560" y2="280" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowviolet)"/>
          <line x1="470" y1="310" x2="410" y2="330" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowviolet)"/>
          <line x1="250" y1="330" x2="190" y2="230" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowviolet)" strokeDasharray="5,5"/>
        </svg>
      </div>
      <div className="mt-4 p-4 bg-violet-50 rounded-lg">
        <p className="text-sm text-gray-700"><span className="font-semibold">Flujo:</span> Usuario sube PDF de memoria del estudio → Aplicación Web envía a Backend AI Service → Procesamiento con Haystack y PII Scrubber → Análisis con GPT-4o en Azure OpenAI → Generación de Excel estructurado con OpenPyXL → Descarga de plantilla CTMS lista para importación.</p>
      </div>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-violet-50 rounded-lg">
          <h3 className="font-semibold text-violet-900 mb-2">CTMS Budget Importer (Backend AI Service)</h3>
          <p className="text-sm text-gray-700">Servicio API en Azure que transforma automáticamente la memoria del estudio clínico (PDF) en un Excel estructurado y validado para su importación directa en el sistema CTMS. Implementa lógica avanzada para Ciclos, Visitas, Procedimientos y reglas de negocio clínicas, asegurando consistencia y cumplimiento normativo.</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h3 className="font-semibold text-purple-900 mb-2">Agente Inteligente Fundanet.AI</h3>
          <p className="text-sm text-gray-700">Motor basado en IA generativa que actúa como asistente virtual especializado, orquestando el flujo completo de importación, validación y control de calidad de los datos de estudios clínicos.</p>
        </div>
        <div className="p-4 bg-indigo-50 rounded-lg">
          <h3 className="font-semibold text-indigo-900 mb-2">Aplicación Web</h3>
          <p className="text-sm text-gray-700">Permite a los clientes subir sus documentos, parametrizar la ejecución y recibir el documento de respuesta</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded-lg"><h3 className="font-bold">Python 3.10+</h3><p className="text-xs text-gray-600">FastAPI + Uvicorn</p></div>
        <div className="p-4 bg-purple-100 rounded-lg"><h3 className="font-bold">Azure AI Foundry</h3><p className="text-xs text-gray-600">Plataforma IA</p></div>
        <div className="p-4 bg-green-100 rounded-lg"><h3 className="font-bold">GPT-4o</h3><p className="text-xs text-gray-600">Azure OpenAI (UE)</p></div>
        <div className="p-4 bg-orange-100 rounded-lg"><h3 className="font-bold">Haystack</h3><p className="text-xs text-gray-600">Procesamiento docs</p></div>
        <div className="p-4 bg-pink-100 rounded-lg"><h3 className="font-bold">PII Scrubber</h3><p className="text-xs text-gray-600">Protección datos</p></div>
        <div className="p-4 bg-cyan-100 rounded-lg"><h3 className="font-bold">OpenPyXL</h3><p className="text-xs text-gray-600">Generación Excel</p></div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Ventajas</h2>
      <div className="space-y-3">
        <div className="flex items-start p-3 bg-green-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-green-900">Automatización Inteligente</h3><p className="text-sm text-gray-700">Convierte memorias en plantillas CTMS listas, reduciendo horas de trabajo</p></div></div>
        <div className="flex items-start p-3 bg-blue-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-blue-900">Cumplimiento GDPR</h3><p className="text-sm text-gray-700">Datos procesados en Azure UE, sin salir del Espacio Económico Europeo</p></div></div>
        <div className="flex items-start p-3 bg-purple-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-purple-900">Arquitectura Modular</h3><p className="text-sm text-gray-700">API RESTful y diseño desacoplado facilita nuevos agentes</p></div></div>
        <div className="flex items-start p-3 bg-orange-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-orange-900">IA Aplicada al Dominio</h3><p className="text-sm text-gray-700">Reglas específicas para Ciclos, Visitas, Procedimientos validadas</p></div></div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Evolución</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-violet-50 rounded-lg">
          <ul className="text-sm space-y-1">
            <li>• Gestor de informes y trazabilidad ampliada</li>
            <li>• Métricas de uso y analítica avanzada</li>
          </ul>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <ul className="text-sm space-y-1">
            <li>• Integración B2B con OAuth</li>
            <li>• Agentes de auditoría y documentación</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default AIAgentsSection;
