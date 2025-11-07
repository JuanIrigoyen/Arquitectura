const ClassicSection = () => (

    <div className="space-y-8">
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-lg border border-amber-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet Classic Windows</h1>
        <p className="text-lg text-gray-700">Sistema legacy con múltiples módulos de gestión</p>
      </div>

      <div className="bg-red-100 border-l-4 border-red-500 p-4">
        <h3 className="font-bold text-red-900 mb-2">⚠️ Estado Crítico</h3>
        <p className="text-red-800">Sistema carece de calidad, sin testing ni reglas de estilo. Código inmantenible donde cada corrección pone en riesgo el resto. Riesgo muy alto.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
        <p className="text-gray-700">Aplicación .NET escrita en C# con distintos módulos de gestión, producción científica, etc. Arquitectura sin definir clara.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura y Flujo</h2>
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
          <svg viewBox="0 0 700 400" className="w-full">
            <defs>
              <marker id="arrowamber" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
              </marker>
            </defs>
            
            <rect x="50" y="50" width="600" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
            <text x="350" y="85" textAnchor="middle" className="text-sm font-bold" fill="#d97706">Classic Windows Application (.NET Framework 3.5/4.8)</text>

            <rect x="80" y="150" width="140" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
            <text x="150" y="175" textAnchor="middle" className="text-xs font-bold" fill="#d97706">Módulo Gestión</text>
            <text x="150" y="195" textAnchor="middle" className="text-xs" fill="#f59e0b">DevExpress</text>

            <rect x="250" y="150" width="140" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
            <text x="320" y="175" textAnchor="middle" className="text-xs font-bold" fill="#d97706">Prod. Científica</text>
            <text x="320" y="195" textAnchor="middle" className="text-xs" fill="#f59e0b">DataSets</text>

            <rect x="420" y="150" width="140" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
            <text x="490" y="175" textAnchor="middle" className="text-xs font-bold" fill="#d97706">Otros Módulos</text>
            <text x="490" y="195" textAnchor="middle" className="text-xs" fill="#f59e0b">DataTables</text>

            <rect x="200" y="270" width="300" height="80" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" rx="5"/>
            <text x="350" y="300" textAnchor="middle" className="text-sm font-bold" fill="#374151">SQL Server On-Premise</text>
            <text x="350" y="320" textAnchor="middle" className="text-xs" fill="#6b7280">ADO 2.0</text>
            <text x="350" y="335" textAnchor="middle" className="text-xs" fill="#6b7280">Sin ORM definido</text>

            <line x1="150" y1="210" x2="300" y2="270" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowamber)"/>
            <line x1="320" y1="210" x2="350" y2="270" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowamber)"/>
            <line x1="490" y1="210" x2="400" y2="270" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowamber)"/>

            <rect x="520" y="270" width="130" height="60" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" rx="5"/>
            <text x="585" y="295" textAnchor="middle" className="text-xs font-bold" fill="#991b1b">Librerías</text>
            <text x="585" y="315" textAnchor="middle" className="text-xs" fill="#dc2626">Terceros obsoletas</text>

            <line x1="490" y1="210" x2="560" y2="270" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowamber)" strokeDasharray="5,5"/>
          </svg>
        </div>
        <div className="mt-4 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
          <p className="text-sm text-gray-700"><span className="font-semibold text-amber-900">Flujo:</span> Aplicación monolítica con múltiples módulos independientes sin arquitectura clara. Cada módulo accede directamente a SQL Server mediante ADO 2.0 y DataSets/DataTables. Dependencias con librerías de terceros obsoletas. Sin testing ni reglas de estilo definidas.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg"><h3 className="font-bold">ADO 2.0</h3></div>
          <div className="p-4 bg-gray-100 rounded-lg"><h3 className="font-bold">DataSet/DataTables</h3></div>
          <div className="p-4 bg-gray-100 rounded-lg"><h3 className="font-bold">.NET Framework 3.5/4.8</h3></div>
          <div className="p-4 bg-gray-100 rounded-lg"><h3 className="font-bold">SQL Server On-Premise</h3></div>
          <div className="p-4 bg-gray-100 rounded-lg"><h3 className="font-bold">DevExpress Controls</h3></div>
          <div className="p-4 bg-gray-100 rounded-lg"><h3 className="font-bold">Múltiples librerías terceros</h3></div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mejoras en Curso</h2>
        <div className="space-y-2">
          <div className="p-3 bg-blue-50 rounded"><span className="font-semibold">QA:</span> Importador de pre-facturas para CTMS Classic</div>
          <div className="p-3 bg-green-50 rounded"><span className="font-semibold">Entrega 7 nov:</span> Modificar la dotación de presupuesto en los traspasos de pedido con diferente prorrata</div>
          <div className="p-3 bg-green-50 rounded"><span className="font-semibold">Entrega 7 nov:</span> SII - Modificación de validación NIF no residentes</div>
          <div className="p-3 bg-green-50 rounded"><span className="font-semibold">Entrega 7 nov:</span> SII – Incorporación de periodos trimestrales en el Libro de Bienes de Inversión</div>
          <div className="p-3 bg-green-50 rounded"><span className="font-semibold">Entrega 7 nov:</span> SII - Añadir etiqueta Bienes de Inversión en la comunicación</div>
          <div className="p-3 bg-green-50 rounded"><span className="font-semibold">Entrega 7 nov:</span> Modelo 190 - eliminación de validación</div>
          <div className="p-3 bg-yellow-50 rounded"><span className="font-semibold">A estudiar esfuerzo:</span> [FSJD] Ampliar recurso de estudios clínicos en la API para permitir búsqueda por enfermedad</div>
          <div className="p-3 bg-yellow-50 rounded"><span className="font-semibold">En análisis:</span> Revisión de actualizaciones de CIP 2.1</div>
          <div className="p-3 bg-blue-50 rounded"><span className="font-semibold">En QA:</span> Adaptación del SII de AEAT - para el SII de Agencia tributaria Canaria (ATC)</div>
          <div className="p-3 bg-orange-50 rounded"><span className="font-semibold">Análisis de planificación:</span> |I3PT| Añadir el campo de Observaciones de la ME en el grid de visitas</div>
          <div className="p-3 bg-orange-50 rounded"><span className="font-semibold">Análisis de planificación:</span> |I3PT| Añadir en la prefactura la información de la fecha en la que se han realizado las visitas y procedimientos médicos</div>
          <div className="p-3 bg-purple-50 rounded"><span className="font-semibold">Planificado octubre:</span> Revisar desarrollo TSM Biodiversidad tras cambios en configuración carga</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Riesgos</h2>
        <div className="p-4 bg-red-100 border-l-4 border-red-500">
          <h3 className="font-bold text-red-900 mb-2">Muy Alto</h3>
          <p className="text-red-800">El código es inmantenible, cada pequeña corrección pone en riesgo el funcionamiento del resto de la aplicación.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Estrategia Futura</h2>
        <p className="text-gray-800 mb-3 font-semibold">Es de vital importancia reescribir la mayor parte de la aplicación. El coste de refactorizar es muchas veces más alto que reescribir desde cero.</p>
      </div>
    </div>
  
);

export default ClassicSection;
