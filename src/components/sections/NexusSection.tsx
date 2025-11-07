import CheckIcon from '../common/CheckIcon';

const NexusSection = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-8 rounded-lg border border-sky-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet Nexus</h1>
      <p className="text-lg text-gray-700">Plataforma de interconectividad de sistemas en Centros de Investigación</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
      <p className="text-gray-700 mb-4">Nexus es una plataforma integral diseñada para interconectar diferentes sistemas y plataformas utilizados en los Centros de Investigación facilitando la comunicación y garantizando una integración fluida.</p>
      <p className="text-gray-700">Su principal objetivo es facilitar la interoperabilidad entre aplicaciones, historiales clínicos, sistemas de análisis y dispositivos de monitorización, promoviendo una gestión eficiente de la información y mejorando la colaboración entre herramientas especializadas.</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura y Flujo de Comunicación</h2>
      <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
        <svg viewBox="0 0 950 600" className="w-full">
          <defs>
            <marker id="arrowsky" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#0284c7" />
            </marker>
          </defs>

          <rect x="400" y="30" width="150" height="80" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3" rx="5"/>
          <text x="475" y="60" textAnchor="middle" className="text-sm font-bold" fill="#0369a1">Fundanet Nexus</text>
          <text x="475" y="80" textAnchor="middle" className="text-xs" fill="#0284c7">Hub Central</text>
          <text x="475" y="95" textAnchor="middle" className="text-xs" fill="#0284c7">Interoperabilidad</text>

          <rect x="50" y="150" width="130" height="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
          <text x="115" y="180" textAnchor="middle" className="text-xs font-bold" fill="#1e40af">Fundanet CTMS</text>

          <rect x="200" y="150" width="130" height="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
          <text x="265" y="180" textAnchor="middle" className="text-xs font-bold" fill="#1e40af">Fundanet iPharma</text>

          <rect x="620" y="150" width="130" height="50" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
          <text x="685" y="180" textAnchor="middle" className="text-xs font-bold" fill="#d97706">SAP Argos</text>

          <rect x="770" y="150" width="130" height="50" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
          <text x="835" y="180" textAnchor="middle" className="text-xs font-bold" fill="#d97706">Visor Monitores</text>

          <rect x="50" y="230" width="130" height="50" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="115" y="260" textAnchor="middle" className="text-xs font-bold" fill="#15803d">OpenClinica</text>

          <rect x="200" y="230" width="130" height="50" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="265" y="260" textAnchor="middle" className="text-xs font-bold" fill="#15803d">RedCap</text>

          <rect x="350" y="230" width="130" height="50" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="415" y="260" textAnchor="middle" className="text-xs font-bold" fill="#15803d">Telemedicina</text>

          <rect x="500" y="230" width="130" height="50" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
          <text x="565" y="260" textAnchor="middle" className="text-xs font-bold" fill="#15803d">E-CAP</text>

          <rect x="650" y="230" width="130" height="50" fill="#e9d5ff" stroke="#9333ea" strokeWidth="2" rx="5"/>
          <text x="715" y="260" textAnchor="middle" className="text-xs font-bold" fill="#6b21a8">SISCat</text>

          <rect x="800" y="230" width="130" height="50" fill="#e9d5ff" stroke="#9333ea" strokeWidth="2" rx="5"/>
          <text x="865" y="260" textAnchor="middle" className="text-xs font-bold" fill="#6b21a8">Fenix ERP</text>

          <rect x="180" y="310" width="140" height="50" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
          <text x="250" y="340" textAnchor="middle" className="text-xs font-bold" fill="#be185d">Tarjeta SCS</text>

          <rect x="340" y="310" width="140" height="50" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
          <text x="410" y="340" textAnchor="middle" className="text-xs font-bold" fill="#be185d">Visor HCE SCS</text>

          <rect x="500" y="310" width="140" height="50" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
          <text x="570" y="340" textAnchor="middle" className="text-xs font-bold" fill="#be185d">Power BI</text>

          <rect x="660" y="310" width="140" height="50" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="2" rx="5"/>
          <text x="730" y="333" textAnchor="middle" className="text-xs font-bold" fill="#be123c">Apple Health</text>
          <text x="730" y="350" textAnchor="middle" className="text-xs" fill="#f43f5e">SDK</text>

          <rect x="820" y="310" width="140" height="50" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="2" rx="5"/>
          <text x="890" y="333" textAnchor="middle" className="text-xs font-bold" fill="#be123c">Google Fit</text>
          <text x="890" y="350" textAnchor="middle" className="text-xs" fill="#f43f5e">SDK Android</text>

          <rect x="350" y="410" width="200" height="150" fill="#f3e8ff" stroke="#9333ea" strokeWidth="3" rx="5"/>
          <text x="450" y="440" textAnchor="middle" className="text-sm font-bold" fill="#6b21a8">Tecnologías Nexus</text>
          <rect x="370" y="455" width="160" height="35" fill="#e9d5ff" stroke="#9333ea" strokeWidth="1" rx="3"/>
          <text x="450" y="475" textAnchor="middle" className="text-xs" fill="#6b21a8">Mirth Connect Comercial</text>
          <rect x="370" y="495" width="160" height="35" fill="#e9d5ff" stroke="#9333ea" strokeWidth="1" rx="3"/>
          <text x="450" y="510" textAnchor="middle" className="text-xs" fill="#6b21a8">.NET Core 9</text>
          <text x="450" y="525" textAnchor="middle" className="text-xs" fill="#6b21a8">Azure Service Bus</text>

          <line x1="115" y1="200" x2="450" y2="110" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowsky)"/>
          <line x1="265" y1="200" x2="460" y2="110" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowsky)"/>
          <line x1="685" y1="200" x2="490" y2="110" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowsky)"/>
          <line x1="835" y1="200" x2="500" y2="110" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowsky)"/>

          <line x1="115" y1="280" x2="440" y2="110" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowsky)" strokeDasharray="3,3"/>
          <line x1="265" y1="280" x2="455" y2="110" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowsky)" strokeDasharray="3,3"/>
          <line x1="415" y1="280" x2="470" y2="110" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowsky)" strokeDasharray="3,3"/>
          <line x1="565" y1="280" x2="485" y2="110" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowsky)" strokeDasharray="3,3"/>
          <line x1="715" y1="280" x2="495" y2="110" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowsky)" strokeDasharray="3,3"/>
          <line x1="865" y1="280" x2="510" y2="110" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowsky)" strokeDasharray="3,3"/>

          <line x1="250" y1="360" x2="430" y2="110" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowsky)" strokeDasharray="3,3"/>
          <line x1="410" y1="360" x2="465" y2="110" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowsky)" strokeDasharray="3,3"/>
          <line x1="570" y1="360" x2="490" y2="110" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowsky)" strokeDasharray="3,3"/>
          <line x1="730" y1="360" x2="505" y2="110" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrowsky)" strokeDasharray="3,3"/>
          <line x1="890" y1="360" x2="520" y2="110" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrowsky)" strokeDasharray="3,3"/>
        </svg>
      </div>
      <div className="mt-4 p-4 bg-sky-50 rounded-lg">
        <p className="text-sm text-gray-700"><span className="font-semibold">Flujo:</span> Nexus actúa como hub central de interoperabilidad conectando múltiples sistemas (Fundanet CTMS/iPharma, SAP Argos, OpenClinica, RedCap, E-CAP, SISCat, Fenix ERP) y dispositivos (Apple Health, Google Fit) mediante Mirth Connect, .NET Core 9 y Azure Service Bus usando protocolos estándar (HL7 FHIR, OMOP CDM, API REST).</p>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Sistemas Integrados</h2>
      <p className="text-gray-700 mb-4">Nexus es capaz de interaccionar con un gran número de aplicaciones:</p>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="p-3 bg-sky-50 rounded">Fundanet – CTMS e iPharma</div>
        <div className="p-3 bg-sky-50 rounded">Historiales clínicos SAP Argos</div>
        <div className="p-3 bg-sky-50 rounded">Visor de monitores SAP Argos</div>
        <div className="p-3 bg-sky-50 rounded">OpenClinica</div>
        <div className="p-3 bg-sky-50 rounded">RedCap</div>
        <div className="p-3 bg-sky-50 rounded">Telemedicina Docline</div>
        <div className="p-3 bg-sky-50 rounded">E-CAP</div>
        <div className="p-3 bg-sky-50 rounded">SISCat</div>
        <div className="p-3 bg-sky-50 rounded">Fenix ERP</div>
        <div className="p-3 bg-sky-50 rounded">Tarjeta sanitaria SCS</div>
        <div className="p-3 bg-sky-50 rounded">Visor HCE SCS</div>
        <div className="p-3 bg-sky-50 rounded">Explotación de datos Power BI</div>
        <div className="p-3 bg-sky-50 rounded">Apple Health SDK</div>
        <div className="p-3 bg-sky-50 rounded">Android Google Fit SDK</div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-100 rounded-lg"><h3 className="font-bold">Mirth Connect</h3><p className="text-xs">Versión comercial para integración HL7</p></div>
        <div className="p-4 bg-purple-100 rounded-lg"><h3 className="font-bold">.NET Core 9</h3><p className="text-xs">Servicios procesamiento mensajes</p></div>
        <div className="p-4 bg-green-100 rounded-lg"><h3 className="font-bold">Azure Service Bus</h3><p className="text-xs">Message broker middleware</p></div>
        <div className="p-4 bg-orange-100 rounded-lg"><h3 className="font-bold">Protobuf</h3><p className="text-xs">Mensajes binarios seguros</p></div>
        <div className="p-4 bg-pink-100 rounded-lg"><h3 className="font-bold">API REST</h3><p className="text-xs">Endpoints de integración</p></div>
        <div className="p-4 bg-cyan-100 rounded-lg"><h3 className="font-bold">Azure Functions</h3><p className="text-xs">Procesamiento cloud y webhooks</p></div>
        <div className="p-4 bg-indigo-100 rounded-lg"><h3 className="font-bold">Patrón Outbox/Inbox</h3><p className="text-xs">Consistencia e idempotencia</p></div>
        <div className="p-4 bg-red-100 rounded-lg"><h3 className="font-bold">Worker Services</h3><p className="text-xs">Procesamiento background</p></div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Características Principales</h2>
      <div className="space-y-3">
        <div className="flex items-start p-3 bg-sky-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-sky-900">Interoperabilidad</h3><p className="text-sm text-gray-700">Conexión fluida entre múltiples sistemas y dispositivos de forma bidireccional</p></div></div>
        <div className="flex items-start p-3 bg-blue-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-blue-900">Automatización y Comunicación</h3><p className="text-sm text-gray-700">Nexus permite el uso de múltiples protocolos de comunicación, mediante mensajería, servicios basados en eventos, API REST, webhooks y otros</p></div></div>
        <div className="flex items-start p-3 bg-purple-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-purple-900">Uso de Estándares Internacionales</h3><p className="text-sm text-gray-700">Garantiza la calidad y seguridad en el manejo de la información de salud usando HL7 FHIR, OMOP CDM, etc.</p></div></div>
        <div className="flex items-start p-3 bg-green-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-green-900">Análisis Avanzado</h3><p className="text-sm text-gray-700">Integración con herramientas como Power BI para la visualización y toma de decisiones basada en datos</p></div></div>
        <div className="flex items-start p-3 bg-orange-50 rounded-lg"><CheckIcon /><div><h3 className="font-semibold text-orange-900">Integración con SDKs de Dispositivos</h3><p className="text-sm text-gray-700">Integración con SDKs de dispositivos de salud de Android y Apple, para el intercambio de datos de actividad y monitorización médica</p></div></div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Estándares de Interoperabilidad</h2>
      <p className="text-gray-700 mb-4">Nexus garantiza la interoperabilidad a través de estándares reconocidos internacionalmente:</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">API REST</h3>
          <p className="text-sm text-gray-700">Para servicios web modernos y escalables</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h3 className="font-semibold text-purple-900 mb-2">HL7 FHIR</h3>
          <p className="text-sm text-gray-700">Estándar para el intercambio de información clínica y la interoperabilidad rápida y flexible de datos de salud</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">OMOP CDM</h3>
          <p className="text-sm text-gray-700">Observational Medical Outcomes Partnership Common Data Model, para la normalización de datos clínicos y su análisis a gran escala</p>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg">
          <h3 className="font-semibold text-orange-900 mb-2">Mensajería y Webhooks</h3>
          <p className="text-sm text-gray-700">Basada en API REST y Webhooks, facilitando notificaciones y actualizaciones en tiempo real</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Ventajas</h2>
      <div className="space-y-3">
        <div className="flex items-start p-3 bg-green-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">Sistema asíncrono completamente resiliente ante fallos y cortes de Internet</p></div>
        <div className="flex items-start p-3 bg-blue-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">Escalable, capaz de procesar cientos de miles de mensajes con garantía de entrega</p></div>
        <div className="flex items-start p-3 bg-purple-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">Sistema de trazabilidad y auditoría completo</p></div>
        <div className="flex items-start p-3 bg-orange-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">Integración fluida entre sistemas propios y externos mediante estándares internacionales</p></div>
        <div className="flex items-start p-3 bg-cyan-50 rounded-lg"><CheckIcon /><p className="text-sm text-gray-700">Soporte de múltiples protocolos de comunicación y formatos de datos</p></div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Importancia Estratégica</h2>
      <div className="p-6 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg border-2 border-sky-200">
        <p className="text-gray-800 mb-4">
          <span className="font-bold text-sky-900">Sistema Fundamental:</span> Nexus es clave para el funcionamiento del ecosistema Fundanet ya que son sistemas asíncronos que necesitan garantizar la entrega de mensajes entre múltiples plataformas y dispositivos médicos.
        </p>
        <p className="text-gray-800">
          El sistema permite integración entre aplicaciones propias o externas a través de mensajería asíncrona con Azure Service Bus, garantizando consistencia mediante patrones Outbox e Inbox, y soportando tanto integración por API (polling) como integración reactiva mediante Webhooks.
        </p>
      </div>
    </div>
  </div>
);

export default NexusSection;
