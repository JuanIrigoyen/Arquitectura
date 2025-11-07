import CheckIcon from '../common/CheckIcon';

const MultitenantSection = () => (

    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet Multitenant</h1>
        <p className="text-lg text-gray-700">Sistema central de servicios compartidos para todo el ecosistema Fundanet</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción del Proyecto</h2>
        <p className="text-gray-700 mb-4">
          Fundanet Multitenant está compuesta por dos sistemas independientes: una API que expone servicios y una web que permite realizar operaciones administrativas. Su misión es exponer servicios comunes a todas las aplicaciones del ecosistema Fundanet.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">API de Servicios</h3>
            <p className="text-sm text-gray-700">Expone servicios comunes para gestión de configuraciones, traducciones, usuarios, permisos, roles, tenants, trazabilidad, despliegue, licenciamiento y métricas de uso.</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Web Administrativa</h3>
            <p className="text-sm text-gray-700">Aplicación en Blazor WebAssembly para configurar usuarios, licencias, módulos de acceso y sistema de despliegue. Exclusiva para administradores de Semicrol.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura y Flujo de Comunicación</h2>
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
          <svg viewBox="0 0 800 600" className="w-full">
            <defs>
              <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
              </marker>
            </defs>
            
            {/* Aplicaciones Cliente */}
            <rect x="50" y="50" width="120" height="80" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
            <text x="110" y="95" textAnchor="middle" className="text-sm font-semibold" fill="#1e40af">Corporate</text>
            
            <rect x="50" y="150" width="120" height="80" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
            <text x="110" y="195" textAnchor="middle" className="text-sm font-semibold" fill="#1e40af">CTMS</text>
            
            <rect x="50" y="250" width="120" height="80" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
            <text x="110" y="295" textAnchor="middle" className="text-sm font-semibold" fill="#1e40af">IEC</text>
            
            <rect x="50" y="350" width="120" height="80" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
            <text x="110" y="395" textAnchor="middle" className="text-sm font-semibold" fill="#1e40af">Otras Apps</text>

            {/* Azure API Management */}
            <rect x="300" y="200" width="200" height="120" fill="#f3e8ff" stroke="#9333ea" strokeWidth="3" rx="5"/>
            <text x="400" y="235" textAnchor="middle" className="text-sm font-bold" fill="#6b21a8">Azure API</text>
            <text x="400" y="255" textAnchor="middle" className="text-sm font-bold" fill="#6b21a8">Management</text>
            <text x="400" y="285" textAnchor="middle" className="text-xs" fill="#7c3aed">• Seguridad</text>
            <text x="400" y="305" textAnchor="middle" className="text-xs" fill="#7c3aed">• Balanceo de Carga</text>

            {/* Multitenant API */}
            <rect x="600" y="200" width="150" height="120" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
            <text x="675" y="240" textAnchor="middle" className="text-sm font-bold" fill="#15803d">Multitenant</text>
            <text x="675" y="260" textAnchor="middle" className="text-sm font-bold" fill="#15803d">API</text>
            <text x="675" y="285" textAnchor="middle" className="text-xs" fill="#16a34a">.NET Core 9</text>
            <text x="675" y="305" textAnchor="middle" className="text-xs" fill="#16a34a">+ Aspire</text>

            {/* Web Admin */}
            <rect x="600" y="50" width="150" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
            <text x="675" y="85" textAnchor="middle" className="text-sm font-bold" fill="#d97706">Web Admin</text>
            <text x="675" y="105" textAnchor="middle" className="text-xs" fill="#f59e0b">Blazor WASM</text>

            {/* Azure SQL Database */}
            <rect x="600" y="380" width="150" height="80" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" rx="5"/>
            <text x="675" y="410" textAnchor="middle" className="text-sm font-bold" fill="#0369a1">Azure SQL</text>
            <text x="675" y="430" textAnchor="middle" className="text-sm font-bold" fill="#0369a1">Database</text>

            {/* Flechas */}
            <line x1="170" y1="90" x2="300" y2="220" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
            <line x1="170" y1="190" x2="300" y2="240" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
            <line x1="170" y1="290" x2="300" y2="270" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
            <line x1="170" y1="390" x2="300" y2="300" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
            
            <line x1="500" y1="260" x2="600" y2="260" stroke="#9333ea" strokeWidth="3" markerEnd="url(#arrowblue)"/>
            
            <line x="675" y1="150" y2="200" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowblue)"/>
            <line x="675" y1="320" y2="380" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowblue)"/>

            {/* Azure B2C */}
            <rect x="300" y="50" width="140" height="60" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
            <text x="370" y="85" textAnchor="middle" className="text-sm font-bold" fill="#be185d">Azure B2C</text>
            
            <line x1="440" y1="90" x2="600" y2="90" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowblue)" strokeDasharray="5,5"/>
          </svg>
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700"><span className="font-semibold">Flujo:</span> Las aplicaciones cliente se conectan a Azure API Management, que actúa como proxy seguro hacia la API Multitenant. La API gestiona servicios comunes y persiste datos en Azure SQL Database. La Web Admin permite la configuración del sistema mediante autenticación B2C.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías Utilizadas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-2">.NET Core 9</h3>
            <p className="text-sm text-gray-700">Framework principal del backend</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-900 mb-2">ASP Aspire</h3>
            <p className="text-sm text-gray-700">Orquestación y observabilidad</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg border border-cyan-200">
            <h3 className="font-bold text-cyan-900 mb-2">Azure SQL Database</h3>
            <p className="text-sm text-gray-700">Persistencia de datos</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
            <h3 className="font-bold text-orange-900 mb-2">Blazor WebAssembly</h3>
            <p className="text-sm text-gray-700">Interfaz web administrativa</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-900 mb-2">Azure API Management</h3>
            <p className="text-sm text-gray-700">Gateway y seguridad</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg border border-pink-200">
            <h3 className="font-bold text-pink-900 mb-2">Azure B2C</h3>
            <p className="text-sm text-gray-700">Autenticación y autorización</p>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
            <p className="text-gray-700"><span className="font-semibold">Versionado:</span> Soporte completo para múltiples versiones de API</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
            <p className="text-gray-700"><span className="font-semibold">Health Checks:</span> Monitorización de salud de servicios</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
            <p className="text-gray-700"><span className="font-semibold">Azure Application Insights:</span> Sistema de logs y telemetría</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
            <p className="text-gray-700"><span className="font-semibold">Azure Monitor:</span> Monitorización de uso y rendimiento</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ventajas del Sistema</h2>
        <div className="space-y-4">
          <div className="flex items-start p-4 bg-green-50 rounded-lg">
            <CheckIcon />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Reutilización de Componentes</h3>
              <p className="text-sm text-gray-700">Todas las aplicaciones consumen servicios comunes sin duplicar lógica de negocio (usuarios, permisos, licencias, configuración, trazabilidad)</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-blue-50 rounded-lg">
            <CheckIcon />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Centralización y Mantenimiento</h3>
              <p className="text-sm text-gray-700">Al centralizar servicios en una API, se evita replicar funcionalidades y se reduce el mantenimiento</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-purple-50 rounded-lg">
            <CheckIcon />
            <div>
              <h3 className="font-semibold text-purple-900 mb-1">Escalabilidad Independiente</h3>
              <p className="text-sm text-gray-700">La API puede escalar horizontalmente de manera independiente a la interfaz web administrativa</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-orange-50 rounded-lg">
            <CheckIcon />
            <div>
              <h3 className="font-semibold text-orange-900 mb-1">Seguridad y Rendimiento</h3>
              <p className="text-sm text-gray-700">Azure API Management actúa como capa de orquestación, seguridad y caché, mejorando disponibilidad, control de acceso y rendimiento</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Evolución y Roadmap</h2>
        <p className="text-gray-700 mb-4">El sistema continuará evolucionando para integrar:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
            <h3 className="font-semibold text-blue-900 mb-2">Servicios Comunes</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Gestor de informes unificado</li>
              <li>• Gestor documental centralizado</li>
              <li>• Sistema de auditorías y trazabilidad</li>
              <li>• Métricas de uso consolidadas</li>
            </ul>
          </div>
          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h3 className="font-semibold text-purple-900 mb-2">Integraciones</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Unificación métricas de uso</li>
              <li>• Sincronización con Azure B2C</li>
              <li>• OAuth y OpenID Connect</li>
              <li>• Sistema de logs centralizado</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Información Adicional</h2>
        <div className="space-y-3">
          <p className="text-gray-700">
            <span className="font-semibold">Criticidad:</span> Sistema crítico ya que todas las aplicaciones del ecosistema Fundanet dependen de esta API.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Funcionalidades Transversales:</span>
          </p>
          <ul className="ml-6 space-y-2 text-gray-700">
            <li>• Sistema de traducciones dinámico sin necesidad de redespliegue</li>
            <li>• Sistema de despliegue continuo sobre base de datos</li>
            <li>• Gestión de licencias de usuarios y módulos</li>
            <li>• Control de acceso basado en roles y permisos</li>
            <li>• Gestión de configuraciones por tenant</li>
          </ul>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Publicación:</span> 
              <a href="https://app-multitenantclt-prod-we-001.azurewebsites.net/" className="text-blue-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                https://app-multitenantclt-prod-we-001.azurewebsites.net/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  
);

export default MultitenantSection;
