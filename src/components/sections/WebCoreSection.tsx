import CheckIcon from '../common/CheckIcon';

const WebCoreSection = () => (

    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg border border-indigo-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet Web Core</h1>
        <p className="text-lg text-gray-700">Arquitectura web moderna para iFundanet y nuevos productos</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción del Proyecto</h2>
        <p className="text-gray-700 mb-4">
          Nueva arquitectura web que permite desarrollar aplicaciones escalables y mantenibles para iFundanet y nuevos productos, usando Clean Architecture y CQRS.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h3 className="font-semibold text-indigo-900 mb-2">Clean Architecture</h3>
            <p className="text-sm text-gray-700">Separación estricta de capas garantizando independencia del framework</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">CQRS</h3>
            <p className="text-sm text-gray-700">Separación de comandos y consultas para mejor escalabilidad</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Multitenant</h3>
            <p className="text-sm text-gray-700">Aislamiento de datos por cliente o tenant</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura</h2>
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
          <svg viewBox="0 0 800 600" className="w-full">
            <defs>
              <marker id="arrowpurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#9333ea" />
              </marker>
            </defs>
            
            <rect x="300" y="50" width="200" height="60" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" rx="5"/>
            <text x="400" y="85" textAnchor="middle" className="text-sm font-bold" fill="#4338ca">Presentation Layer</text>
            <text x="400" y="100" textAnchor="middle" className="text-xs" fill="#6366f1">Blazor WebAssembly</text>

            <rect x="300" y="150" width="200" height="60" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="2" rx="5"/>
            <text x="400" y="185" textAnchor="middle" className="text-sm font-bold" fill="#6b21a8">Application Layer</text>
            <text x="400" y="200" textAnchor="middle" className="text-xs" fill="#8b5cf6">CQRS + Minimal API</text>

            <rect x="150" y="250" width="180" height="60" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
            <text x="240" y="285" textAnchor="middle" className="text-sm font-bold" fill="#be185d">Commands</text>
            <text x="240" y="300" textAnchor="middle" className="text-xs" fill="#ec4899">Write Operations</text>

            <rect x="470" y="250" width="180" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
            <text x="560" y="285" textAnchor="middle" className="text-sm font-bold" fill="#1e40af">Queries</text>
            <text x="560" y="300" textAnchor="middle" className="text-xs" fill="#3b82f6">Read Operations</text>

            <rect x="300" y="350" width="200" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
            <text x="400" y="385" textAnchor="middle" className="text-sm font-bold" fill="#15803d">Domain Layer</text>
            <text x="400" y="400" textAnchor="middle" className="text-xs" fill="#16a34a">DDD + Value Objects</text>

            <rect x="300" y="450" width="200" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
            <text x="400" y="485" textAnchor="middle" className="text-sm font-bold" fill="#d97706">Infrastructure Layer</text>
            <text x="400" y="500" textAnchor="middle" className="text-xs" fill="#f59e0b">EF Core + Azure SQL</text>

            <line x1="400" y1="110" x2="400" y2="150" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowpurple)"/>
            <line x1="350" y1="210" x2="270" y2="250" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowpurple)"/>
            <line x1="450" y1="210" x2="530" y2="250" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowpurple)"/>
            <line x1="240" y1="310" x2="350" y2="350" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowpurple)"/>
            <line x1="560" y1="310" x2="450" y2="350" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowpurple)"/>
            <line x1="400" y1="410" x2="400" y2="450" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowpurple)"/>
          </svg>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <h3 className="font-bold text-blue-900">.NET Core 9</h3>
            <p className="text-sm text-gray-700">Framework moderno y performante</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <h3 className="font-bold text-purple-900">Entity Framework Core</h3>
            <p className="text-sm text-gray-700">ORM con migraciones automáticas</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <h3 className="font-bold text-green-900">Minimal API</h3>
            <p className="text-sm text-gray-700">APIs ligeras y de alto rendimiento</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
            <h3 className="font-bold text-orange-900">FluentValidation</h3>
            <p className="text-sm text-gray-700">Validaciones declarativas</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
            <h3 className="font-bold text-pink-900">Blazor WebAssembly</h3>
            <p className="text-sm text-gray-700">Frontend en C#</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg">
            <h3 className="font-bold text-cyan-900">Azure B2C</h3>
            <p className="text-sm text-gray-700">Autenticación federada</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Beneficios</h2>
        <div className="space-y-3">
          <div className="flex items-start p-3 bg-green-50 rounded-lg">
            <CheckIcon />
            <div>
              <h3 className="font-semibold text-green-900">Modularidad y Mantenibilidad</h3>
              <p className="text-sm text-gray-700">Cada capa tiene responsabilidades claras</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-blue-50 rounded-lg">
            <CheckIcon />
            <div>
              <h3 className="font-semibold text-blue-900">Escalabilidad</h3>
              <p className="text-sm text-gray-700">CQRS y asincronía permiten grandes volúmenes</p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-purple-50 rounded-lg">
            <CheckIcon />
            <div>
              <h3 className="font-semibold text-purple-900">Seguridad Centralizada</h3>
              <p className="text-sm text-gray-700">OpenID Connect y Azure B2C nativos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
);

export default WebCoreSection;
