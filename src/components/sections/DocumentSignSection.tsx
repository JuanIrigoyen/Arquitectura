import CheckIcon from '../common/CheckIcon';

const DocumentSignSection = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet Document Sign</h1>
      <p className="text-lg text-gray-700">Sistema de firma digital de documentos</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
      <p className="text-gray-700 mb-4">Sistema integral de firma digital de documentos que permite la gestión completa del flujo de firmas dentro del ecosistema Fundanet, garantizando trazabilidad, seguridad y cumplimiento normativo.</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Estado Actual</h2>
      <div className="p-4 bg-green-100 border-l-4 border-green-500">
        <h3 className="font-bold text-green-900 mb-2">✓ Proyecto Finalizado</h3>
        <p className="text-sm text-gray-700">El proyecto base ha sido completado y está en producción</p>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura</h2>
      <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
        <svg viewBox="0 0 800 500" className="w-full">
          <defs>
            <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#16a34a" />
            </marker>
          </defs>

          <rect x="50" y="150" width="140" height="80" fill="#d1fae5" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="120" y="180" textAnchor="middle" className="text-sm font-bold" fill="#065f46">Usuarios</text>
          <text x="120" y="200" textAnchor="middle" className="text-xs" fill="#16a34a">Firmantes</text>
          <text x="120" y="215" textAnchor="middle" className="text-xs" fill="#16a34a">Administradores</text>

          <rect x="250" y="150" width="160" height="80" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
          <text x="330" y="180" textAnchor="middle" className="text-sm font-bold" fill="#1e40af">Document Sign</text>
          <text x="330" y="200" textAnchor="middle" className="text-xs" fill="#3b82f6">Aplicación Web</text>
          <text x="330" y="215" textAnchor="middle" className="text-xs" fill="#3b82f6">Gestión Firmas</text>

          <rect x="470" y="100" width="140" height="60" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" rx="5"/>
          <text x="540" y="125" textAnchor="middle" className="text-xs font-bold" fill="#0369a1">Azure SQL</text>
          <text x="540" y="145" textAnchor="middle" className="text-xs" fill="#0284c7">Database</text>

          <rect x="470" y="180" width="140" height="60" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" rx="5"/>
          <text x="540" y="205" textAnchor="middle" className="text-xs font-bold" fill="#6b21a8">Azure Blob</text>
          <text x="540" y="225" textAnchor="middle" className="text-xs" fill="#9333ea">Documentos</text>

          <rect x="470" y="260" width="140" height="60" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
          <text x="540" y="285" textAnchor="middle" className="text-xs font-bold" fill="#be185d">Certificados</text>
          <text x="540" y="305" textAnchor="middle" className="text-xs" fill="#ec4899">Digitales</text>

          <rect x="250" y="280" width="160" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
          <text x="330" y="305" textAnchor="middle" className="text-xs font-bold" fill="#d97706">iFundanet</text>
          <text x="330" y="325" textAnchor="middle" className="text-xs" fill="#f59e0b">Integración</text>

          <rect x="650" y="150" width="130" height="80" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="715" y="175" textAnchor="middle" className="text-xs font-bold" fill="#15803d">Flujos de</text>
          <text x="715" y="195" textAnchor="middle" className="text-xs font-bold" fill="#15803d">Firma</text>
          <text x="715" y="215" textAnchor="middle" className="text-xs" fill="#16a34a">Trazabilidad</text>

          <line x1="190" y1="190" x2="250" y2="190" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
          <line x1="410" y1="170" x2="470" y2="130" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
          <line x1="410" y1="190" x2="470" y2="210" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
          <line x1="410" y1="210" x2="470" y2="290" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
          <line x1="330" y1="230" x2="330" y2="280" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
          <line x1="410" y1="190" x2="650" y2="190" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
        </svg>
      </div>
      <div className="mt-4 p-4 bg-green-50 rounded-lg">
        <p className="text-sm text-gray-700"><span className="font-semibold">Flujo:</span> Usuarios acceden a Document Sign → Aplicación web gestiona documentos y firmas → Almacena documentos en Azure Blob Storage y metadatos en Azure SQL Database → Valida certificados digitales → Integración con iFundanet → Gestión completa de flujos de firma con trazabilidad.</p>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded-lg"><h3 className="font-bold">.NET Core</h3><p className="text-xs text-gray-600">Backend API</p></div>
        <div className="p-4 bg-purple-100 rounded-lg"><h3 className="font-bold">Blazor/React</h3><p className="text-xs text-gray-600">Interfaz web</p></div>
        <div className="p-4 bg-green-100 rounded-lg"><h3 className="font-bold">Azure Blob Storage</h3><p className="text-xs text-gray-600">Almacenamiento docs</p></div>
        <div className="p-4 bg-cyan-100 rounded-lg"><h3 className="font-bold">Azure SQL Database</h3><p className="text-xs text-gray-600">Metadatos y trazas</p></div>
        <div className="p-4 bg-pink-100 rounded-lg"><h3 className="font-bold">Certificados Digitales</h3><p className="text-xs text-gray-600">Firma electrónica</p></div>
        <div className="p-4 bg-orange-100 rounded-lg"><h3 className="font-bold">PDF Libraries</h3><p className="text-xs text-gray-600">Procesamiento PDFs</p></div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Mejoras Propuestas (16-31 Octubre)</h2>
      <p className="text-gray-700 mb-4 font-semibold">Cambios para la aplicación Document Sign:</p>
      <div className="space-y-2">
        <div className="p-3 bg-blue-50 rounded text-sm">• Ordenar por los valores de las columnas</div>
        <div className="p-3 bg-blue-50 rounded text-sm">• Aplicar filtrado por contenido en cada una de las columnas</div>
        <div className="p-3 bg-blue-50 rounded text-sm">• Posicionar la firma al final del documento, agregando página solo si es necesario</div>
        <div className="p-3 bg-blue-50 rounded text-sm">• Diferenciar acciones de firma con y sin previsualización</div>
        <div className="p-3 bg-blue-50 rounded text-sm">• Eliminar el campo "Motivo" en la pantalla de Firma</div>
        <div className="p-3 bg-blue-50 rounded text-sm">• Impedir que las contraseñas se puedan guardar en el navegador</div>
        <div className="p-3 bg-blue-50 rounded text-sm">• Corrección del filtro de búsqueda superior</div>
        <div className="p-3 bg-yellow-50 rounded text-sm">• Posible brecha de seguridad al exponer el documentId en la URL</div>
        <div className="p-3 bg-yellow-50 rounded text-sm">• Bloquear el menú de acción "Firmar" si el usuario actual ya ha firmado el/los documento(s)</div>
        <div className="p-3 bg-yellow-50 rounded text-sm">• Mejorar la visibilidad del mensaje "Actualmente cuenta con un certificado vigente"</div>
        <div className="p-3 bg-purple-50 rounded text-sm">• Corrección de textos y tooltips no definidos o no traducidos</div>
        <div className="p-3 bg-purple-50 rounded text-sm">• Añadir opción de "Cerrar sesión" en el módulo de gestión de firmas</div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Mejoras para iFundanet</h2>
      <p className="text-gray-700 mb-4 font-semibold">Cambios en la integración con iFundanet:</p>
      <div className="space-y-2">
        <div className="p-3 bg-indigo-50 rounded text-sm">• Mantener visibles los documentos ya firmados en el Gestor de Firmas</div>
        <div className="p-3 bg-indigo-50 rounded text-sm">• Ordenar por los valores de las columnas</div>
        <div className="p-3 bg-indigo-50 rounded text-sm">• Aplicar filtrado por contenido en cada una de las columnas</div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Otras Mejoras</h2>
      <div className="space-y-2">
        <div className="p-3 bg-cyan-50 rounded text-sm">• Mostrar la fecha de última firma en la Gestión de Flujos de Firma</div>
        <div className="p-3 bg-cyan-50 rounded text-sm">• Cierre automático de menús desplegables</div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Ventajas</h2>
      <div className="space-y-3">
        <div className="flex items-start p-3 bg-green-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-green-900">Firma Digital Certificada</h3><p className="text-sm text-gray-700">Sistema de firma electrónica con certificados digitales válidos legalmente</p></div></div>
        <div className="flex items-start p-3 bg-blue-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-blue-900">Trazabilidad Completa</h3><p className="text-sm text-gray-700">Registro detallado de todos los eventos relacionados con cada documento y firma</p></div></div>
        <div className="flex items-start p-3 bg-purple-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-purple-900">Gestión de Flujos</h3><p className="text-sm text-gray-700">Control completo de flujos de firma con múltiples firmantes y estados</p></div></div>
        <div className="flex items-start p-3 bg-orange-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-orange-900">Integración con Fundanet</h3><p className="text-sm text-gray-700">Completamente integrado con iFundanet y otros módulos del ecosistema</p></div></div>
        <div className="flex items-start p-3 bg-cyan-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-cyan-900">Seguridad y Cumplimiento</h3><p className="text-sm text-gray-700">Almacenamiento seguro en Azure con cumplimiento normativo RGPD</p></div></div>
      </div>
    </div>
  </div>
);

export default DocumentSignSection;
