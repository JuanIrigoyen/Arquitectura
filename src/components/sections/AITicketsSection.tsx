import CheckIcon from '../common/CheckIcon';

const AITicketsSection = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-lg border border-emerald-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet AI Tickets</h1>
      <p className="text-lg text-gray-700">Sistema de gestión inteligente de tickets y gastos</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
      <p className="text-gray-700 mb-4">Fundanet.Tickets es una solución desarrollada por Semicrol para la digitalización y automatización del proceso de gestión de tickets y justificantes de gasto. Permite a los usuarios capturar tickets o facturas desde sus dispositivos móviles mediante una fotografía, que el sistema analiza automáticamente con IA para extraer los datos relevantes (importe, fecha, proveedor, IVA, etc.) antes de su validación e integración con las aplicaciones corporativas de Fundanet (Corporate, CTMS, IEC, etc.).</p>
      <p className="text-gray-700">La solución está compuesta por tres elementos principales que trabajan en conjunto para proporcionar una experiencia completa de gestión de gastos.</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura y Componentes</h2>
      <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
        <svg viewBox="0 0 900 550" className="w-full">
          <defs>
            <marker id="arrowemerald" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
            </marker>
          </defs>

          <rect x="50" y="150" width="120" height="70" fill="#d1fae5" stroke="#10b981" strokeWidth="2" rx="5"/>
          <text x="110" y="175" textAnchor="middle" className="text-xs font-bold" fill="#065f46">Apps Móviles</text>
          <text x="110" y="195" textAnchor="middle" className="text-xs" fill="#10b981">Flutter</text>
          <text x="110" y="210" textAnchor="middle" className="text-xs" fill="#10b981">Android/iOS</text>

          <rect x="50" y="250" width="120" height="70" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
          <text x="110" y="275" textAnchor="middle" className="text-xs font-bold" fill="#d97706">Web Admin</text>
          <text x="110" y="295" textAnchor="middle" className="text-xs" fill="#f59e0b">Blazor WASM</text>

          <rect x="230" y="150" width="180" height="170" fill="#f3e8ff" stroke="#9333ea" strokeWidth="3" rx="5"/>
          <text x="320" y="180" textAnchor="middle" className="text-sm font-bold" fill="#6b21a8">Azure API Management</text>
          <rect x="250" y="195" width="140" height="45" fill="#e9d5ff" stroke="#9333ea" strokeWidth="1" rx="3"/>
          <text x="320" y="215" textAnchor="middle" className="text-xs font-semibold" fill="#6b21a8">Seguridad</text>
          <text x="320" y="230" textAnchor="middle" className="text-xs" fill="#7c3aed">Balanceo Carga</text>
          <rect x="250" y="250" width="140" height="55" fill="#e9d5ff" stroke="#9333ea" strokeWidth="1" rx="3"/>
          <text x="320" y="270" textAnchor="middle" className="text-xs font-semibold" fill="#6b21a8">Control Acceso</text>
          <text x="320" y="285" textAnchor="middle" className="text-xs" fill="#7c3aed">Escalado</text>

          <rect x="470" y="150" width="160" height="100" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
          <text x="550" y="180" textAnchor="middle" className="text-sm font-bold" fill="#1e40af">API Central</text>
          <text x="550" y="200" textAnchor="middle" className="text-xs" fill="#3b82f6">.NET Core 9</text>
          <text x="550" y="220" textAnchor="middle" className="text-xs" fill="#3b82f6">Minimal API</text>
          <text x="550" y="235" textAnchor="middle" className="text-xs" fill="#3b82f6">Multitenant</text>

          <rect x="470" y="270" width="160" height="80" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" rx="5"/>
          <text x="550" y="295" textAnchor="middle" className="text-xs font-bold" fill="#7c3aed">Microsoft AI</text>
          <text x="550" y="315" textAnchor="middle" className="text-xs" fill="#a855f7">Foundry</text>
          <text x="550" y="330" textAnchor="middle" className="text-xs" fill="#a855f7">OCR + IA</text>

          <rect x="690" y="150" width="130" height="60" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" rx="5"/>
          <text x="755" y="175" textAnchor="middle" className="text-xs font-bold" fill="#0369a1">Azure SQL</text>
          <text x="755" y="195" textAnchor="middle" className="text-xs" fill="#0284c7">Database JSON</text>

          <rect x="690" y="230" width="130" height="60" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
          <text x="755" y="255" textAnchor="middle" className="text-xs font-bold" fill="#be185d">Azure Blob</text>
          <text x="755" y="275" textAnchor="middle" className="text-xs" fill="#ec4899">Storage</text>

          <rect x="690" y="310" width="130" height="60" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" rx="5"/>
          <text x="755" y="335" textAnchor="middle" className="text-xs font-bold" fill="#991b1b">Azure Key</text>
          <text x="755" y="355" textAnchor="middle" className="text-xs" fill="#dc2626">Vault</text>

          <rect x="230" y="360" width="180" height="60" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="2" rx="5"/>
          <text x="320" y="385" textAnchor="middle" className="text-xs font-bold" fill="#be123c">Azure B2C</text>
          <text x="320" y="405" textAnchor="middle" className="text-xs" fill="#f43f5e">Autenticación</text>

          <rect x="470" y="390" width="160" height="70" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="550" y="415" textAnchor="middle" className="text-xs font-bold" fill="#15803d">Integración</text>
          <text x="550" y="435" textAnchor="middle" className="text-xs" fill="#16a34a">Fundanet Corporate</text>
          <text x="550" y="450" textAnchor="middle" className="text-xs" fill="#16a34a">CTMS / IEC</text>

          <line x1="170" y1="185" x2="230" y2="225" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowemerald)"/>
          <line x1="170" y1="285" x2="230" y2="265" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowemerald)"/>
          <line x1="410" y1="225" x2="470" y2="200" stroke="#9333ea" strokeWidth="3" markerEnd="url(#arrowemerald)"/>
          <line x1="630" y1="200" x2="690" y2="180" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrowemerald)"/>
          <line x1="630" y1="220" x2="690" y2="260" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowemerald)"/>
          <line x1="630" y1="240" x2="690" y2="340" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowemerald)"/>
          <line x1="550" y1="250" x2="550" y2="270" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowemerald)"/>
          <line x1="320" y1="320" x2="320" y2="360" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrowemerald)"/>
          <line x1="550" y1="350" x2="550" y2="390" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowemerald)" strokeDasharray="5,5"/>
        </svg>
      </div>
      <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
        <p className="text-sm text-gray-700"><span className="font-semibold">Flujo:</span> Apps móviles y Web Admin se conectan vía Azure API Management → API Central procesa tickets con .NET Core 9 → Microsoft AI Foundry realiza OCR extrayendo datos → Almacenamiento: datos JSON en Azure SQL Database e imágenes en Azure Blob Storage → Seguridad mediante Azure Key Vault y autenticación Azure B2C → Integración final con Fundanet Corporate, CTMS e IEC.</p>
      </div>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-emerald-50 rounded-lg">
          <h3 className="font-semibold text-emerald-900 mb-2">API Central</h3>
          <p className="text-sm text-gray-700">Implementada en .NET Core 9, que ofrece servicios REST para el almacenamiento, procesamiento y validación de tickets, así como la integración con los sistemas de Fundanet. Se despliega detrás de Azure API Management, garantizando balanceo de carga, seguridad, trazabilidad y escalado dinámico.</p>
        </div>
        <div className="p-4 bg-teal-50 rounded-lg">
          <h3 className="font-semibold text-teal-900 mb-2">Aplicación Web (Blazor WebAssembly)</h3>
          <p className="text-sm text-gray-700">Para usuarios administradores y corporativos. Permite revisar los tickets procesados, validar los datos extraídos por IA y aprobar su integración con los sistemas de Fundanet.</p>
        </div>
        <div className="p-4 bg-cyan-50 rounded-lg">
          <h3 className="font-semibold text-cyan-900 mb-2">Aplicaciones Móviles (Flutter)</h3>
          <p className="text-sm text-gray-700">Aplicaciones móviles multiplataforma (Flutter) para Android y iOS, que permiten subir tickets mediante captura de imagen. Estas aplicaciones se comunican con la API para realizar el reconocimiento OCR, validar la información y registrar los datos procesados.</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías Utilizadas</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded-lg"><h3 className="font-bold text-blue-900">.NET Core 9</h3><p className="text-xs text-gray-600">ASP.NET Minimal API</p></div>
        <div className="p-4 bg-purple-100 rounded-lg"><h3 className="font-bold text-purple-900">Blazor WebAssembly</h3><p className="text-xs text-gray-600">Web administrativa</p></div>
        <div className="p-4 bg-green-100 rounded-lg"><h3 className="font-bold text-green-900">Flutter</h3><p className="text-xs text-gray-600">Apps móviles multiplataforma</p></div>
        <div className="p-4 bg-orange-100 rounded-lg"><h3 className="font-bold text-orange-900">Azure API Management</h3><p className="text-xs text-gray-600">Proxy inverso, seguridad, control de acceso y escalado</p></div>
        <div className="p-4 bg-pink-100 rounded-lg"><h3 className="font-bold text-pink-900">Microsoft AI Foundry</h3><p className="text-xs text-gray-600">Modelos de reconocimiento OCR e IA generativa</p></div>
        <div className="p-4 bg-cyan-100 rounded-lg"><h3 className="font-bold text-cyan-900">Azure Blob Storage</h3><p className="text-xs text-gray-600">Almacenamiento seguro de las imágenes capturadas de tickets</p></div>
        <div className="p-4 bg-indigo-100 rounded-lg"><h3 className="font-bold text-indigo-900">Azure SQL Database</h3><p className="text-xs text-gray-600">Almacenar los datos identificados por el OCR en formato JSON estructurado</p></div>
        <div className="p-4 bg-red-100 rounded-lg"><h3 className="font-bold text-red-900">OpenID Connect</h3><p className="text-xs text-gray-600">Seguridad basada en OpenID Connect</p></div>
        <div className="p-4 bg-slate-100 rounded-lg"><h3 className="font-bold text-slate-900">Azure B2C</h3><p className="text-xs text-gray-600">Integración con Azure B2C para autenticación y gestión de usuarios</p></div>
      </div>
      <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
        <p className="text-sm text-gray-700"><span className="font-semibold">Características adicionales:</span> Arquitectura asíncrona, multitenant y escalable</p>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Ventajas</h2>
      <div className="space-y-3">
        <div className="flex items-start p-3 bg-green-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-green-900">Captura Inteligente y Rápida</h3><p className="text-sm text-gray-700">Los usuarios pueden subir fotos o PDFs desde el móvil; el sistema extrae automáticamente los datos mediante IA y OCR de Microsoft AI Foundry</p></div></div>
        <div className="flex items-start p-3 bg-blue-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-blue-900">Automatización y Eficiencia</h3><p className="text-sm text-gray-700">Reduce el esfuerzo manual, minimiza errores y acelera los procesos de validación e integración con Fundanet y otros sistemas</p></div></div>
        <div className="flex items-start p-3 bg-purple-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-purple-900">Seguridad y Cumplimiento</h3><p className="text-sm text-gray-700">Integración con Azure B2C y OpenID Connect, almacenamiento seguro de imágenes en Azure Blob Storage, y cumplimiento del RGPD y LOPDGDD</p></div></div>
        <div className="flex items-start p-3 bg-orange-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-orange-900">Escalabilidad y Fiabilidad</h3><p className="text-sm text-gray-700">Infraestructura basada en Azure que garantiza alta disponibilidad, balanceo de carga y procesamiento distribuido</p></div></div>
        <div className="flex items-start p-3 bg-cyan-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-cyan-900">Integración con el Ecosistema Fundanet</h3><p className="text-sm text-gray-700">Los datos validados se sincronizan con Fundanet Corporate, CTMS, IEC y otros módulos, unificando la gestión de gastos</p></div></div>
        <div className="flex items-start p-3 bg-indigo-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-indigo-900">IA Aplicada al Negocio</h3><p className="text-sm text-gray-700">Reconocimiento OCR preciso, con almacenamiento estructurado en SQL Database en formato JSON para análisis posterior</p></div></div>
        <div className="flex items-start p-3 bg-pink-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-pink-900">Verificación y Trazabilidad</h3><p className="text-sm text-gray-700">La interfaz web permite revisar y aprobar los datos antes de integrarlos con Fundanet, garantizando trazabilidad total por usuario y operación</p></div></div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Evolución</h2>
      <p className="text-gray-700 mb-4">El sistema continuará evolucionando para integrar nuevas funcionalidades:</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-emerald-50 rounded-lg">
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• Integración con ERPs y sistemas contables externos</li>
            <li>• Clasificación automática de categorías de gasto y detección de duplicados</li>
          </ul>
        </div>
        <div className="p-4 bg-teal-50 rounded-lg">
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• Paneles de métricas y auditoría por usuario, proyecto o tenant</li>
            <li>• Modelos OCR específicos por país y soporte multilingüe</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Información Adicional</h2>
      <div className="space-y-3">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Residencia de Datos</h3>
          <p className="text-sm text-gray-700">Azure Europa (West Europe / North Europe)</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">Cumplimiento</h3>
          <p className="text-sm text-gray-700">RGPD / LOPDGDD</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h3 className="font-semibold text-purple-900 mb-2">Integración Actual</h3>
          <p className="text-sm text-gray-700">Fundanet Corporate, CTMS, IEC y otros módulos del ecosistema</p>
        </div>
      </div>
    </div>
  </div>
);

export default AITicketsSection;
