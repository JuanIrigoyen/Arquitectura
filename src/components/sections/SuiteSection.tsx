import CheckIcon from '../common/CheckIcon';

const SuiteSection = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-lg border border-indigo-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet Suite</h1>
      <p className="text-lg text-gray-700">Lanzador unificado de aplicaciones con autenticación centralizada</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
      <p className="text-gray-700 mb-4">La Suite de aplicaciones integra un sistema de Autenticación único basado en Azure B2C, de forma que cada usuario que acceda una vez autenticado tenga la opción de lanzar cualquier aplicación de la Suite a la que se tiene acceso.</p>
      <p className="text-gray-700 mb-4">Una suite de aplicaciones es un conjunto de programas o aplicaciones de software que están diseñados para trabajar juntos y cumplir con una serie de funciones relacionadas, generalmente dentro de un mismo entorno o para un propósito común. Estas aplicaciones suelen estar integradas de manera que puedan compartir datos y funcionalidades, facilitando la colaboración y optimizando los flujos de trabajo.</p>
      <p className="text-gray-700">La idea es tener una entrada común para cada usuario, de forma que este pueda acceder a cada uno de los programas. Esto conforma un punto de entrada único.</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura y Flujo</h2>
      <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
        <svg viewBox="0 0 800 500" className="w-full">
          <defs>
            <marker id="arrowindigo" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#6366f1" />
            </marker>
          </defs>

          <rect x="50" y="150" width="120" height="80" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" rx="5"/>
          <text x="110" y="180" textAnchor="middle" className="text-sm font-bold" fill="#4338ca">Usuario</text>
          <text x="110" y="200" textAnchor="middle" className="text-xs" fill="#6366f1">Acceso</text>
          <text x="110" y="215" textAnchor="middle" className="text-xs" fill="#6366f1">Web/Móvil</text>

          <rect x="230" y="100" width="160" height="130" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
          <text x="310" y="130" textAnchor="middle" className="text-sm font-bold" fill="#be185d">Azure B2C</text>
          <text x="310" y="150" textAnchor="middle" className="text-xs" fill="#ec4899">Autenticación OAuth</text>
          <rect x="250" y="165" width="120" height="50" fill="#fce7f3" stroke="#ec4899" strokeWidth="1" rx="3"/>
          <text x="310" y="185" textAnchor="middle" className="text-xs" fill="#be185d">SSO</text>
          <text x="310" y="205" textAnchor="middle" className="text-xs" fill="#ec4899">Single Sign-On</text>

          <rect x="450" y="150" width="160" height="80" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
          <text x="530" y="180" textAnchor="middle" className="text-sm font-bold" fill="#1e40af">Suite Launcher</text>
          <text x="530" y="200" textAnchor="middle" className="text-xs" fill="#3b82f6">Blazor WASM</text>
          <text x="530" y="215" textAnchor="middle" className="text-xs" fill="#3b82f6">Portal Unificado</text>

          <rect x="650" y="50" width="120" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="710" y="75" textAnchor="middle" className="text-xs font-bold" fill="#15803d">Corporate</text>

          <rect x="650" y="130" width="120" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="710" y="155" textAnchor="middle" className="text-xs font-bold" fill="#15803d">CTMS</text>

          <rect x="650" y="210" width="120" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="710" y="235" textAnchor="middle" className="text-xs font-bold" fill="#15803d">IEC</text>

          <rect x="650" y="290" width="120" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="710" y="315" textAnchor="middle" className="text-xs font-bold" fill="#15803d">Otras Apps</text>

          <rect x="230" y="280" width="160" height="80" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" rx="5"/>
          <text x="310" y="310" textAnchor="middle" className="text-sm font-bold" fill="#6b21a8">Multitenant API</text>
          <text x="310" y="330" textAnchor="middle" className="text-xs" fill="#9333ea">Validación</text>
          <text x="310" y="345" textAnchor="middle" className="text-xs" fill="#9333ea">Licencias y Permisos</text>

          <rect x="450" y="280" width="160" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
          <text x="530" y="305" textAnchor="middle" className="text-xs font-bold" fill="#d97706">Dashboard</text>
          <text x="530" y="320" textAnchor="middle" className="text-xs" fill="#f59e0b">• Estadísticas</text>
          <text x="530" y="335" textAnchor="middle" className="text-xs" fill="#f59e0b">• Notificaciones</text>
          <text x="530" y="350" textAnchor="middle" className="text-xs" fill="#f59e0b">• Licencias</text>

          <line x1="170" y1="190" x2="230" y2="165" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowindigo)"/>
          <line x1="390" y1="165" x2="450" y2="190" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowindigo)"/>
          <line x1="310" y1="230" x2="310" y2="280" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowindigo)"/>
          <line x1="530" y1="230" x2="530" y2="280" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowindigo)"/>
          <line x1="610" y1="170" x2="650" y2="80" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowindigo)"/>
          <line x1="610" y1="185" x2="650" y2="160" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowindigo)"/>
          <line x1="610" y1="200" x2="650" y2="240" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowindigo)"/>
          <line x1="610" y1="215" x2="650" y2="320" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowindigo)"/>
        </svg>
      </div>
      <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
        <p className="text-sm text-gray-700"><span className="font-semibold">Flujo:</span> Usuario accede → Azure B2C autentica con OAuth/SSO → Suite Launcher (Blazor WASM) valida licencias y permisos con Multitenant API → Muestra dashboard con estadísticas, notificaciones y caducidad de licencias → Usuario lanza aplicaciones disponibles (Corporate, CTMS, IEC, etc.).</p>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Características</h2>
      <div className="space-y-3">
        <div className="flex items-start p-3 bg-indigo-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-indigo-900">Punto de Entrada Único</h3><p className="text-sm text-gray-700">Una entrada común para cada usuario, de forma que este pueda acceder a cada uno de los programas de la suite</p></div></div>
        <div className="flex items-start p-3 bg-blue-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-blue-900">Autenticación OAuth con Azure B2C</h3><p className="text-sm text-gray-700">Sistema de autenticación único basado en B2C, Single Sign-On para todas las aplicaciones</p></div></div>
        <div className="flex items-start p-3 bg-purple-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-purple-900">Dashboard Integrado</h3><p className="text-sm text-gray-700">El sistema además puede mostrar estadísticas y notificaciones, caducidad de las licencias, incidencias en las aplicaciones, estadísticas de uso, etc.</p></div></div>
        <div className="flex items-start p-3 bg-green-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-green-900">Validación Centralizada</h3><p className="text-sm text-gray-700">Valida los usuarios, las licencias y las aplicaciones disponibles y las presenta para poder acceder a ellas con facilidad</p></div></div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnología</h2>
      <div className="p-4 bg-blue-50 rounded-lg">
        <h3 className="font-bold text-blue-900 mb-2">Blazor WebAssembly</h3>
        <p className="text-sm text-gray-700">Aplicación SPA (Single Page Application) desarrollada en Blazor Web Assembly que usa una autenticación OAuth con Azure B2C</p>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Ventajas</h2>
      <div className="space-y-3">
        <div className="flex items-start p-3 bg-green-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">Experiencia unificada: un solo punto de acceso para todas las aplicaciones del ecosistema</p></div>
        <div className="flex items-start p-3 bg-blue-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">Seguridad centralizada: gestión de autenticación y autorización desde un único sistema</p></div>
        <div className="flex items-start p-3 bg-purple-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">Visibilidad completa: dashboard con información relevante sobre licencias, notificaciones e incidencias</p></div>
        <div className="flex items-start p-3 bg-orange-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">Facilita la colaboración: usuarios pueden moverse fluidamente entre aplicaciones sin re-autenticarse</p></div>
      </div>
    </div>
  </div>
);

export default SuiteSection;
