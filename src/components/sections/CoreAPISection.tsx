import CheckIcon from '../common/CheckIcon';

const CoreAPISection = () => (

    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet Core API</h1>
        <p className="text-lg text-gray-700">API moderna, escalable y robusta para servicios Corporate</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
        <p className="text-gray-700 mb-4">API que permite exponer endpoints de forma eficiente, escalable horizontal y verticalmente, robusta, con balanceo de carga y seguridad. Se sitúa detrás de Azure API Management que actúa como proxy inverso.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Arquitectura CQRS</h3>
            <p className="text-sm text-gray-700">Separación de comandos y consultas optimizando rendimiento</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Minimal API</h3>
            <p className="text-sm text-gray-700">APIs ligeras y rápidas con bajo overhead</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura y Flujo</h2>
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
          <svg viewBox="0 0 800 500" className="w-full">
            <defs>
              <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#16a34a" />
              </marker>
            </defs>
            
            <rect x="50" y="150" width="120" height="80" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
            <text x="110" y="185" textAnchor="middle" className="text-sm font-bold" fill="#1e40af">Clientes</text>
            <text x="110" y="205" textAnchor="middle" className="text-xs" fill="#3b82f6">Corporate</text>
            <text x="110" y="220" textAnchor="middle" className="text-xs" fill="#3b82f6">Mobile Apps</text>

            <rect x="230" y="100" width="180" height="180" fill="#f3e8ff" stroke="#9333ea" strokeWidth="3" rx="5"/>
            <text x="320" y="130" textAnchor="middle" className="text-sm font-bold" fill="#6b21a8">Azure API Management</text>
            <rect x="250" y="145" width="140" height="45" fill="#e9d5ff" stroke="#9333ea" strokeWidth="1" rx="3"/>
            <text x="320" y="165" textAnchor="middle" className="text-xs font-semibold" fill="#6b21a8">Seguridad</text>
            <text x="320" y="180" textAnchor="middle" className="text-xs" fill="#7c3aed">Rate Limiting</text>
            <rect x="250" y="200" width="140" height="45" fill="#e9d5ff" stroke="#9333ea" strokeWidth="1" rx="3"/>
            <text x="320" y="220" textAnchor="middle" className="text-xs font-semibold" fill="#6b21a8">Balanceo Carga</text>
            <text x="320" y="235" textAnchor="middle" className="text-xs" fill="#7c3aed">Cache</text>

            <rect x="470" y="100" width="160" height="80" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
            <text x="550" y="135" textAnchor="middle" className="text-sm font-bold" fill="#15803d">Core API</text>
            <text x="550" y="155" textAnchor="middle" className="text-xs" fill="#16a34a">.NET Core 9</text>
            <text x="550" y="170" textAnchor="middle" className="text-xs" fill="#16a34a">Minimal API + CQRS</text>

            <rect x="470" y="210" width="75" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
            <text x="507" y="235" textAnchor="middle" className="text-xs font-bold" fill="#d97706">Commands</text>
            <text x="507" y="250" textAnchor="middle" className="text-xs" fill="#f59e0b">Write</text>

            <rect x="555" y="210" width="75" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
            <text x="592" y="235" textAnchor="middle" className="text-xs font-bold" fill="#1e40af">Queries</text>
            <text x="592" y="250" textAnchor="middle" className="text-xs" fill="#3b82f6">Read</text>

            <rect x="470" y="310" width="160" height="60" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" rx="5"/>
            <text x="550" y="335" textAnchor="middle" className="text-sm font-bold" fill="#0369a1">Azure SQL</text>
            <text x="550" y="355" textAnchor="middle" className="text-xs" fill="#0284c7">Database</text>

            <rect x="230" y="350" width="100" height="60" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
            <text x="280" y="375" textAnchor="middle" className="text-xs font-bold" fill="#be185d">Azure Monitor</text>
            <text x="280" y="395" textAnchor="middle" className="text-xs" fill="#ec4899">Métricas</text>

            <rect x="50" y="350" width="120" height="60" fill="#fff7ed" stroke="#ea580c" strokeWidth="2" rx="5"/>
            <text x="110" y="375" textAnchor="middle" className="text-xs font-bold" fill="#c2410c">OpenID</text>
            <text x="110" y="395" textAnchor="middle" className="text-xs" fill="#ea580c">Connect</text>

            <line x1="170" y1="190" x2="230" y2="190" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
            <line x1="410" y1="190" x2="470" y2="140" stroke="#9333ea" strokeWidth="3" markerEnd="url(#arrowgreen)"/>
            <line x1="550" y1="180" x2="507" y2="210" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
            <line x1="550" y1="180" x2="592" y2="210" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
            <line x1="507" y1="270" x2="530" y2="310" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
            <line x1="592" y1="270" x2="570" y2="310" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
            <line x1="280" y1="280" x2="280" y2="350" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
            <line x1="110" y1="230" x2="110" y2="350" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowgreen)" strokeDasharray="5,5"/>
          </svg>
        </div>
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-700"><span className="font-semibold">Flujo:</span> Los clientes se autentican con OpenID Connect y acceden a través de Azure API Management que proporciona seguridad, rate limiting y balanceo. La Core API procesa comandos (escritura) y queries (lectura) por separado usando CQRS, persistiendo en Azure SQL Database.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded-lg"><h3 className="font-bold text-blue-900">.NET Core 9</h3></div>
          <div className="p-4 bg-purple-100 rounded-lg"><h3 className="font-bold text-purple-900">Azure API Management</h3></div>
          <div className="p-4 bg-green-100 rounded-lg"><h3 className="font-bold text-green-900">OpenID Connect</h3></div>
          <div className="p-4 bg-orange-100 rounded-lg"><h3 className="font-bold text-orange-900">Multitenant</h3></div>
          <div className="p-4 bg-pink-100 rounded-lg"><h3 className="font-bold text-pink-900">Versionado API</h3></div>
          <div className="p-4 bg-cyan-100 rounded-lg"><h3 className="font-bold text-cyan-900">Métricas y Logs</h3></div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Beneficios</h2>
        <div className="space-y-3">
          <div className="flex items-start p-3 bg-green-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">Escalabilidad horizontal y vertical según demanda</p></div>
          <div className="flex items-start p-3 bg-blue-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">Balanceo de carga y caché con Azure API Management</p></div>
          <div className="flex items-start p-3 bg-purple-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">CQRS optimiza operaciones de lectura y escritura</p></div>
          <div className="flex items-start p-3 bg-orange-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">Seguridad mediante tokens, límites de uso y reglas de IP</p></div>
        </div>
      </div>
    </div>
  
);

export default CoreAPISection;
