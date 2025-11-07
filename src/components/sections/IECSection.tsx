const IECSection = () => (

    <div className="space-y-8">
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-lg border border-rose-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet IEC</h1>
        <p className="text-lg text-gray-700">Sistema de gestión de comités de ética en investigación</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
        <p className="text-gray-700 mb-4">Fundanet IEC es una plataforma especializada para la gestión de comités de ética en ensayos clínicos, estudios observacionales y proyectos biomédicos. Está diseñada para facilitar los procesos del comité de ética en entornos académicos, clínicos e institucionales.</p>
        <p className="text-gray-700">El objetivo es soportar la presentación, revisión, aprobación y seguimiento de proyectos de investigación desde el punto de vista ético, con eficiencia, transparencia y cumplimiento regulatorio.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura</h2>
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
          <svg viewBox="0 0 800 500" className="w-full">
            <defs>
              <marker id="arrowrose" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#f43f5e" />
              </marker>
            </defs>
            
            <rect x="50" y="150" width="140" height="80" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="2" rx="5"/>
            <text x="120" y="175" textAnchor="middle" className="text-sm font-bold" fill="#be123c">Investigadores</text>
            <text x="120" y="195" textAnchor="middle" className="text-xs" fill="#f43f5e">Envío</text>
            <text x="120" y="210" textAnchor="middle" className="text-xs" fill="#f43f5e">Documentos</text>

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
            <text x="700" y="175" textAnchor="middle" className="text-xs font-bold" fill="#15803d">Comité Ética</text>
            <text x="700" y="195" textAnchor="middle" className="text-xs" fill="#16a34a">Revisión</text>
            <text x="700" y="210" textAnchor="middle" className="text-xs" fill="#16a34a">Aprobación</text>

            <line x1="190" y1="190" x2="250" y2="190" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrowrose)"/>
            <line x1="390" y1="170" x2="450" y2="130" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrowrose)"/>
            <line x1="390" y1="190" x2="450" y2="210" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowrose)"/>
            <line x1="390" y1="210" x2="450" y2="290" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowrose)"/>
            <line x1="320" y1="230" x2="320" y2="280" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowrose)"/>
            <line x1="390" y1="190" x2="630" y2="190" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowrose)"/>
          </svg>
        </div>
        <div className="mt-4 p-4 bg-rose-50 rounded-lg">
          <p className="text-sm text-gray-700"><span className="font-semibold">Arquitectura:</span> Framework ABP basado en ASP.NET Core y DDD con integración Azure B2B. Utiliza Azure SQL Database para datos, Azure Blob Storage para documentos con control de versiones, y Azure Key Vault para seguridad. Flujo de trabajo desde investigadores hasta comité de ética.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded-lg"><h3 className="font-bold text-blue-900">Framework ABP</h3><p className="text-xs text-gray-700">ASP.NET Core + DDD</p></div>
          <div className="p-4 bg-cyan-100 rounded-lg"><h3 className="font-bold text-cyan-900">Azure SQL Database</h3><p className="text-xs text-gray-700">Persistencia de datos</p></div>
          <div className="p-4 bg-purple-100 rounded-lg"><h3 className="font-bold text-purple-900">Azure Blob Storage</h3><p className="text-xs text-gray-700">Control de versiones</p></div>
          <div className="p-4 bg-red-100 rounded-lg"><h3 className="font-bold text-red-900">Azure Key Vault</h3><p className="text-xs text-gray-700">Gestión de secretos</p></div>
          <div className="p-4 bg-pink-100 rounded-lg"><h3 className="font-bold text-pink-900">Azure B2B</h3><p className="text-xs text-gray-700">Autenticación segura</p></div>
          <div className="p-4 bg-green-100 rounded-lg"><h3 className="font-bold text-green-900">APIs REST</h3><p className="text-xs text-gray-700">Integración sistemas</p></div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Características Principales</h2>
        <div className="space-y-3">
          <div className="p-3 bg-rose-50 rounded"><h3 className="font-semibold text-rose-900 mb-2">Envíos Electrónicos</h3><p className="text-sm text-gray-700">Permite que los investigadores hagan presentaciones (submissions) mediante un portal seguro en línea, reduciendo la carga administrativa</p></div>
          <div className="p-3 bg-pink-50 rounded"><h3 className="font-semibold text-pink-900 mb-2">Flujo de Revisión Automatizado</h3><p className="text-sm text-gray-700">Las tareas de revisión se asignan automáticamente, se monitorea el progreso de cada revisión, y el sistema ayuda a coordinar revisores y estados del proyecto</p></div>
          <div className="p-3 bg-purple-50 rounded"><h3 className="font-semibold text-purple-900 mb-2">Gestión Documental Integral</h3><p className="text-sm text-gray-700">Ofrece un repositorio de documentos con control de versiones para manejar documentos como protocolos, enmiendas, reportes, consentimientos, etc.</p></div>
          <div className="p-3 bg-blue-50 rounded"><h3 className="font-semibold text-blue-900 mb-2">Configuración Flexible</h3><p className="text-sm text-gray-700">Posibilidad de adaptar parámetros y preferencias del sistema según las necesidades específicas del comité de ética (reglas internas, plazos, rutas de revisión)</p></div>
          <div className="p-3 bg-indigo-50 rounded"><h3 className="font-semibold text-indigo-900 mb-2">Calendarios y Gestión de Datos</h3><p className="text-sm text-gray-700">Administración de calendarios para citas, reuniones del comité, plazos importantes y herramientas para entrada de datos, revisión y verificación</p></div>
          <div className="p-3 bg-green-50 rounded"><h3 className="font-semibold text-green-900 mb-2">Reportes Personalizados</h3><p className="text-sm text-gray-700">Generación de reportes personalizados para análisis del desempeño del comité, estados de proyectos, tiempos de revisión, estadísticas</p></div>
          <div className="p-3 bg-orange-50 rounded"><h3 className="font-semibold text-orange-900 mb-2">Monitoreo Continuo</h3><p className="text-sm text-gray-700">Seguimiento continuo del estado de los proyectos sometidos al comité, control de cumplimiento de protocolos, supervisión del ciclo de vida de las revisiones</p></div>
          <div className="p-3 bg-cyan-50 rounded"><h3 className="font-semibold text-cyan-900 mb-2">Integración con Sistemas</h3><p className="text-sm text-gray-700">Capacidad de integrarse con otros sistemas y plataformas utilizados en investigación clínica, para intercambio de datos entre departamentos o sistemas externos</p></div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ventajas</h2>
        <ul className="space-y-2">
          <li className="flex items-center p-2 bg-green-50 rounded"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span><span className="text-sm">Eficiencia administrativa: al permitir presentaciones electrónicas y flujos automáticos, reduce papeleo y tiempos</span></li>
          <li className="flex items-center p-2 bg-blue-50 rounded"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span><span className="text-sm">Mayor control y trazabilidad: con control de versiones y monitoreo continuo, se puede tener un registro claro del estado de cada proyecto</span></li>
          <li className="flex items-center p-2 bg-purple-50 rounded"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span><span className="text-sm">Mejora en coordinación: al automatizar asignaciones y revisar progresos, los comités de ética pueden trabajar de forma más ordenada</span></li>
          <li className="flex items-center p-2 bg-orange-50 rounded"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span><span className="text-sm">Flexibilidad del sistema: se puede ajustar según las reglas internas y procesos propios del comité de ética en cada institución</span></li>
          <li className="flex items-center p-2 bg-cyan-50 rounded"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span><span className="text-sm">Transparencia y cumplimiento regulatorio: al centralizar la documentación y controlar versiones, ayuda a reforzar estándares éticos y regulatorios</span></li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Trabajos en Curso</h2>
        <div className="p-3 bg-blue-50 rounded"><span className="font-semibold">Estado QA:</span> Generador de informe de prefacturas para importar en Classic</div>
      </div>
    </div>
  
);

export default IECSection;
