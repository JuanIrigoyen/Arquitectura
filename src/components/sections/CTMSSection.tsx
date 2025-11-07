import CheckIcon from '../common/CheckIcon';

const CTMSSection = () => (

    <div className="space-y-8">
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-lg border border-teal-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet CTMS</h1>
        <p className="text-lg text-gray-700">Clinical Trial Management System - Gestión integral de ensayos clínicos</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
        <p className="text-gray-700 mb-4">Fundanet CTMS es una plataforma pensada para gestionar ensayos clínicos (Clinical Trial Management System). Ofrece una solución integrada para los centros de investigación, sitios de ensayos clínicos, universidades y oficinas de transferencia tecnológica.</p>
        <p className="text-gray-700">El enfoque del software está en optimizar los procesos operativos, asegurar cumplimiento regulatorio y financiero, y facilitar la colaboración entre roles y departamentos dentro de un ensayo.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura</h2>
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
          <svg viewBox="0 0 800 500" className="w-full">
            <defs>
              <marker id="arrowteal" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#14b8a6" />
              </marker>
            </defs>
            
            <rect x="50" y="150" width="140" height="80" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" rx="5"/>
            <text x="120" y="180" textAnchor="middle" className="text-sm font-bold" fill="#0f766e">Usuarios</text>
            <text x="120" y="200" textAnchor="middle" className="text-xs" fill="#14b8a6">Investigadores</text>
            <text x="120" y="215" textAnchor="middle" className="text-xs" fill="#14b8a6">Coordinadores</text>

            <rect x="250" y="150" width="140" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
            <text x="320" y="180" textAnchor="middle" className="text-sm font-bold" fill="#d97706">ABP Framework</text>
            <text x="320" y="200" textAnchor="middle" className="text-xs" fill="#f59e0b">ASP.NET Core</text>
            <text x="320" y="215" textAnchor="middle" className="text-xs" fill="#f59e0b">+ DDD</text>

            <rect x="450" y="100" width="130" height="60" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" rx="5"/>
            <text x="515" y="125" textAnchor="middle" className="text-xs font-bold" fill="#0369a1">Azure SQL</text>
            <text x="515" y="145" textAnchor="middle" className="text-xs" fill="#0284c7">Database</text>

            <rect x="450" y="180" width="130" height="60" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" rx="5"/>
            <text x="515" y="205" textAnchor="middle" className="text-xs font-bold" fill="#6b21a8">Azure Blob</text>
            <text x="515" y="225" textAnchor="middle" className="text-xs" fill="#9333ea">Storage</text>

            <rect x="450" y="260" width="130" height="60" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" rx="5"/>
            <text x="515" y="285" textAnchor="middle" className="text-xs font-bold" fill="#991b1b">Azure Key</text>
            <text x="515" y="305" textAnchor="middle" className="text-xs" fill="#dc2626">Vault</text>

            <rect x="250" y="280" width="140" height="60" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
            <text x="320" y="305" textAnchor="middle" className="text-xs font-bold" fill="#be185d">Azure B2B</text>
            <text x="320" y="325" textAnchor="middle" className="text-xs" fill="#ec4899">Autenticación</text>

            <rect x="630" y="150" width="140" height="80" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
            <text x="700" y="175" textAnchor="middle" className="text-xs font-bold" fill="#15803d">Integraciones</text>
            <text x="700" y="195" textAnchor="middle" className="text-xs" fill="#16a34a">EMR / EDC</text>
            <text x="700" y="210" textAnchor="middle" className="text-xs" fill="#16a34a">Facturación</text>

            <line x1="190" y1="190" x2="250" y2="190" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowteal)"/>
            <line x1="390" y1="170" x2="450" y2="130" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrowteal)"/>
            <line x1="390" y1="190" x2="450" y2="210" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowteal)"/>
            <line x1="390" y1="210" x2="450" y2="290" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowteal)"/>
            <line x1="320" y1="230" x2="320" y2="280" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowteal)"/>
            <line x1="390" y1="190" x2="630" y2="190" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowteal)" strokeDasharray="5,5"/>
          </svg>
        </div>
        <div className="mt-4 p-4 bg-teal-50 rounded-lg">
          <p className="text-sm text-gray-700"><span className="font-semibold">Arquitectura:</span> Framework ABP basado en ASP.NET Core y DDD con integración Azure B2B para autenticación. Utiliza Azure SQL Database para persistencia, Azure Blob Storage para documentos y Azure Key Vault para gestión segura de secretos. Integración con sistemas externos EMR, EDC y facturación.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded-lg"><h3 className="font-bold text-blue-900">Framework ABP</h3><p className="text-xs text-gray-700">ASP.NET Core + DDD</p></div>
          <div className="p-4 bg-cyan-100 rounded-lg"><h3 className="font-bold text-cyan-900">Azure SQL Database</h3><p className="text-xs text-gray-700">Persistencia de datos</p></div>
          <div className="p-4 bg-purple-100 rounded-lg"><h3 className="font-bold text-purple-900">Azure Blob Storage</h3><p className="text-xs text-gray-700">Almacenamiento documentos</p></div>
          <div className="p-4 bg-red-100 rounded-lg"><h3 className="font-bold text-red-900">Azure Key Vault</h3><p className="text-xs text-gray-700">Gestión de secretos</p></div>
          <div className="p-4 bg-pink-100 rounded-lg"><h3 className="font-bold text-pink-900">Azure B2B</h3><p className="text-xs text-gray-700">Autenticación empresarial</p></div>
          <div className="p-4 bg-green-100 rounded-lg"><h3 className="font-bold text-green-900">APIs REST</h3><p className="text-xs text-gray-700">Interoperabilidad</p></div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Características Principales</h2>
        <div className="space-y-3">
          <div className="flex items-start p-3 bg-teal-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-teal-900">Gestión de Estudios Clínicos</h3><p className="text-sm text-gray-700">Control centralizado de datos, coordinación de tareas, gestión de sitios y participantes, generación de reportes y análisis</p></div></div>
          <div className="flex items-start p-3 bg-blue-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-blue-900">Coordinación Clínica</h3><p className="text-sm text-gray-700">Manejo de información de participantes, cumplimiento regulatorio, recopilación de datos y reportes</p></div></div>
          <div className="flex items-start p-3 bg-green-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-green-900">Gestión Financiera</h3><p className="text-sm text-gray-700">Gestión presupuestaria, asignación de recursos, contratos y subvenciones, procesos automáticos de facturación y prevención de doble facturación</p></div></div>
          <div className="flex items-start p-3 bg-purple-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-purple-900">Colaboración y Comunicación</h3><p className="text-sm text-gray-700">Integración de roles (investigadores, coordinadores, finanzas) en una plataforma común para decisiones coordinadas</p></div></div>
          <div className="flex items-start p-3 bg-orange-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-orange-900">Integraciones / Interoperabilidad</h3><p className="text-sm text-gray-700">APIs REST, uso de Azure Service Bus, conexión con sistemas de EMR (historias clínicas electrónicas), EDC, sistemas de facturación</p></div></div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ventajas</h2>
        <ul className="space-y-2">
          <li className="flex items-center p-2 bg-green-50 rounded"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span><span className="text-sm">Mejora de la eficiencia operativa al centralizar y automatizar tareas</span></li>
          <li className="flex items-center p-2 bg-blue-50 rounded"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span><span className="text-sm">Mejores capacidades analíticas y visibilidad del estado del ensayo</span></li>
          <li className="flex items-center p-2 bg-purple-50 rounded"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span><span className="text-sm">Potencial para aumentar ingresos mediante facturación más precisa y evitar errores como doble facturación</span></li>
          <li className="flex items-center p-2 bg-orange-50 rounded"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span><span className="text-sm">Capacidad de adaptación del sistema a las necesidades específicas del sitio de investigación</span></li>
          <li className="flex items-center p-2 bg-cyan-50 rounded"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span><span className="text-sm">Interoperabilidad con otros sistemas (EMR, EDC, facturación)</span></li>
        </ul>
      </div>
    </div>
  
);

export default CTMSSection;
