import CheckIcon from '../common/CheckIcon';

const CorporateWindowsSection = () => (

    <div className="space-y-8">
      <div className="bg-gradient-to-r from-slate-50 to-gray-100 p-8 rounded-lg border border-slate-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet Corporate Windows</h1>
        <p className="text-lg text-gray-700">Sistema de escritorio en migración desde Visual Basic</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Estado Actual</h2>
        <p className="text-gray-700 mb-4">Actualmente en proceso de migración de Visual Basic a .NET Framework 4.8. Proyecto paralizado desde agosto excepto desarrollo por Callejo.</p>
        <div className="p-4 bg-red-50 border-l-4 border-red-500">
          <h3 className="font-semibold text-red-900 mb-2">⚠️ Riesgos Críticos</h3>
          <p className="text-sm text-gray-700">.NET Framework 4.8 está obsoleto desde hace 6 años. Representa un riesgo elevado con problemas de integración con Azure, falta de soporte y librerías desactualizadas que comprometen la seguridad.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura y Flujo</h2>
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
          <svg viewBox="0 0 800 550" className="w-full">
            <defs>
              <marker id="arrowgray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
              </marker>
            </defs>
            
            <rect x="50" y="50" width="200" height="100" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" rx="5"/>
            <text x="150" y="85" textAnchor="middle" className="text-sm font-bold" fill="#334155">Corporate Desktop</text>
            <text x="150" y="105" textAnchor="middle" className="text-xs" fill="#64748b">.NET Framework 4.8</text>
            <text x="150" y="125" textAnchor="middle" className="text-xs" fill="#64748b">DevExpress Controls</text>

            <rect x="300" y="50" width="180" height="80" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" rx="5"/>
            <text x="390" y="85" textAnchor="middle" className="text-sm font-bold" fill="#991b1b">Legacy VB6</text>
            <text x="390" y="105" textAnchor="middle" className="text-xs" fill="#dc2626">En migración</text>

            <rect x="550" y="50" width="180" height="80" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
            <text x="640" y="85" textAnchor="middle" className="text-sm font-bold" fill="#15803d">Worker Services</text>
            <text x="640" y="105" textAnchor="middle" className="text-xs" fill="#16a34a">.NET Core 9</text>

            <rect x="100" y="200" width="160" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
            <text x="180" y="230" textAnchor="middle" className="text-sm font-bold" fill="#d97706">Presentation</text>
            <text x="180" y="250" textAnchor="middle" className="text-xs" fill="#f59e0b">N-Layers</text>
            <text x="180" y="265" textAnchor="middle" className="text-xs" fill="#f59e0b">WinForms</text>

            <rect x="300" y="200" width="160" height="80" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
            <text x="380" y="230" textAnchor="middle" className="text-sm font-bold" fill="#1e40af">Business Logic</text>
            <text x="380" y="250" textAnchor="middle" className="text-xs" fill="#3b82f6">Entity Framework</text>
            <text x="380" y="265" textAnchor="middle" className="text-xs" fill="#3b82f6">ADO.NET</text>

            <rect x="500" y="200" width="160" height="80" fill="#e9d5ff" stroke="#9333ea" strokeWidth="2" rx="5"/>
            <text x="580" y="230" textAnchor="middle" className="text-sm font-bold" fill="#6b21a8">Data Access</text>
            <text x="580" y="250" textAnchor="middle" className="text-xs" fill="#9333ea">POCO Entities</text>
            <text x="580" y="265" textAnchor="middle" className="text-xs" fill="#9333ea">Repositories</text>

            <rect x="250" y="350" width="300" height="80" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" rx="5"/>
            <text x="400" y="380" textAnchor="middle" className="text-sm font-bold" fill="#0369a1">SQL Server Database</text>
            <text x="400" y="400" textAnchor="middle" className="text-xs" fill="#0284c7">On-Premise / Azure SQL</text>

            <rect x="50" y="370" width="140" height="60" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
            <text x="120" y="395" textAnchor="middle" className="text-xs font-bold" fill="#be185d">Multitenant API</text>
            <text x="120" y="415" textAnchor="middle" className="text-xs" fill="#ec4899">Servicios comunes</text>

            <rect x="610" y="370" width="140" height="60" fill="#fff7ed" stroke="#ea580c" strokeWidth="2" rx="5"/>
            <text x="680" y="395" textAnchor="middle" className="text-xs font-bold" fill="#c2410c">Message System</text>
            <text x="680" y="415" textAnchor="middle" className="text-xs" fill="#ea580c">Azure Service Bus</text>

            <line x1="150" y1="150" x2="180" y2="200" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowgray)"/>
            <line x1="260" y1="240" x2="300" y2="240" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowgray)"/>
            <line x1="460" y1="240" x2="500" y2="240" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowgray)"/>
            <line x1="580" y1="280" x2="400" y2="350" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowgray)"/>
            <line x1="150" y1="150" x2="120" y2="370" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowgray)" strokeDasharray="5,5"/>
            <line x1="640" y1="130" x2="680" y2="370" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowgray)" strokeDasharray="5,5"/>
          </svg>
        </div>
        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
          <p className="text-sm text-gray-700"><span className="font-semibold">Flujo:</span> Aplicación desktop con arquitectura N-Layers tradicional. La presentación (WinForms) se comunica con la lógica de negocio, que accede a datos mediante Entity Framework y ADO.NET. Se integra con Multitenant API para servicios comunes y Message System para comunicación asíncrona. Legacy VB6 en proceso de migración.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-100 rounded-lg"><h3 className="font-bold">.NET Framework 4.8</h3></div>
          <div className="p-4 bg-slate-100 rounded-lg"><h3 className="font-bold">Entity Framework 3.11</h3></div>
          <div className="p-4 bg-slate-100 rounded-lg"><h3 className="font-bold">ADO.NET 2.0</h3></div>
          <div className="p-4 bg-blue-100 rounded-lg"><h3 className="font-bold">.NET Standard</h3></div>
          <div className="p-4 bg-blue-100 rounded-lg"><h3 className="font-bold">.NET Core 9</h3></div>
          <div className="p-4 bg-green-100 rounded-lg"><h3 className="font-bold">Worker Services</h3></div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Objetivos</h2>
        <div className="space-y-3">
          <div className="flex items-start p-3 bg-blue-50 rounded-lg">
            <CheckIcon />
            <p className="text-sm text-gray-700">Eliminación de dependencias y librerías que ponen en riesgo la seguridad</p>
          </div>
          <div className="flex items-start p-3 bg-green-50 rounded-lg">
            <CheckIcon />
            <p className="text-sm text-gray-700">Reducción del sistema de despliegue continuo</p>
          </div>
          <div className="flex items-start p-3 bg-yellow-50 rounded-lg">
            <span className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0">⚠️</span>
            <p className="text-sm text-gray-700">Paralizado desde agosto a excepción de Callejo que continúa haciendo cambios</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mejoras en Corporate</h2>
        <div className="space-y-2">
          <div className="p-3 bg-red-50 border-l-4 border-red-500">
            <h3 className="font-semibold text-red-900 mb-1">URGENTE: Mejora del modelo de datos para modo PASS</h3>
            <p className="text-sm text-gray-700">Por el riesgo cada vez más elevado, la arquitectura actual no escala. Actualmente paralizado por falta de recursos.</p>
          </div>
          <div className="p-3 bg-blue-50 rounded text-sm">Integración de la seguridad B2B en Fundanet Corporate</div>
          <div className="p-3 bg-blue-50 rounded text-sm">Firma de ensamblados con certificados SSL</div>
          <div className="p-3 bg-blue-50 rounded text-sm">Soporte para plantillas en la nueva arquitectura</div>
          <div className="p-3 bg-blue-50 rounded text-sm">Generador de informes genéricos (DevExpress) para todos los clientes</div>
          <div className="p-3 bg-blue-50 rounded text-sm">Rediseño del gestor documental</div>
          <div className="p-3 bg-blue-50 rounded text-sm">Rediseño del sistema de notificaciones</div>
          <div className="p-3 bg-blue-50 rounded text-sm">Propuestas de mejora en el diseño con integración de más controles DevExpress (calendario, Gantt, etc.) para adaptarse a la nueva arquitectura de presentadores</div>
          <div className="p-3 bg-orange-50 rounded text-sm">Migración de la parte Legacy (no ha comenzado)</div>
          <div className="p-3 bg-purple-50 rounded text-sm">Eliminación de código obsoleto</div>
          <div className="p-3 bg-purple-50 rounded text-sm">Eliminación de librerías obsoletas</div>
          <div className="p-3 bg-yellow-50 rounded text-sm">Correctivo: debemos minimizarlo en la medida de lo posible, intentar abordar únicamente el que provenga del cambio de datos ya que cualquier corrección pone en riesgo el resto del código, sin test la probabilidad de cambiar algo sin cometer otros errores es mínima (&lt; 20%)</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Estrategia Futura</h2>
        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <p className="text-gray-800 mb-3">Después de finalizar la migración de VB6 y mejorar el modelo de datos:</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Cambiar estrategia hacia backend moderno con .NET Core</li>
            <li>• Arquitectura de microservicios para evolución independiente</li>
            <li>• Implementar paginación, filtros y búsquedas optimizadas</li>
            <li>• Aproximación CQRS para módulos complejos (nóminas, proyectos)</li>
            <li>• Migración hacia APIs y Microservicios</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mejoras en Curso</h2>
        <ul className="space-y-2">
          <li className="flex items-center p-2 bg-yellow-50 rounded"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>Nuevo sistema de métricas de uso</li>
          <li className="flex items-center p-2 bg-yellow-50 rounded"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>Sistemas generales de trazabilidad</li>
          <li className="flex items-center p-2 bg-yellow-50 rounded"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>Mejoras modelo datos Azure SQL Database</li>
          <li className="flex items-center p-2 bg-yellow-50 rounded"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>Implementación CQRS por complejidad y rendimiento</li>
        </ul>
      </div>
    </div>
  
);

export default CorporateWindowsSection;
