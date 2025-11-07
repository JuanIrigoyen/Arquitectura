import CheckIcon from '../common/CheckIcon';

const MessagingSection = () => (

    <div className="space-y-8">
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg border border-yellow-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet Message System</h1>
        <p className="text-lg text-gray-700">Sistema de interoperabilidad asíncrona basado en Event-Driven Architecture</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción del Proyecto</h2>
        <p className="text-gray-700 mb-4">
          Sistema que permite la interoperabilidad entre aplicaciones de forma asíncrona mediante Event-Driven Architecture (EDA). Las aplicaciones o microservicios se comunican mediante eventos o mensajes, en lugar de llamadas directas, desacoplando los servicios y mejorando la escalabilidad.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-900 mb-2">Integración por API</h3>
            <p className="text-sm text-gray-700">Los clientes solicitan periódicamente los mensajes pendientes mediante polling</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h3 className="font-semibold text-orange-900 mb-2">Integración Reactiva (Webhooks)</h3>
            <p className="text-sm text-gray-700">Cada acción comunica directamente a las APIs de los clientes en tiempo real</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura y Flujo de Comunicación</h2>
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
          <svg viewBox="0 0 900 550" className="w-full">
            <defs>
              <marker id="arroworange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#f97316" />
              </marker>
            </defs>
            
            {/* Aplicación Origen */}
            <rect x="50" y="180" width="140" height="100" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
            <text x="120" y="215" textAnchor="middle" className="text-sm font-bold" fill="#1e40af">Aplicación</text>
            <text x="120" y="235" textAnchor="middle" className="text-sm font-bold" fill="#1e40af">Origen</text>
            <text x="120" y="255" textAnchor="middle" className="text-xs" fill="#3b82f6">(Corporate, CTMS,</text>
            <text x="120" y="270" textAnchor="middle" className="text-xs" fill="#3b82f6">IEC, Legacy)</text>

            {/* Outbox Pattern */}
            <rect x="230" y="200" width="120" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
            <text x="290" y="225" textAnchor="middle" className="text-sm font-bold" fill="#d97706">Outbox</text>
            <text x="290" y="245" textAnchor="middle" className="text-xs" fill="#f59e0b">Tabla BD</text>

            {/* Azure Service Bus */}
            <rect x="390" y="150" width="180" height="160" fill="#f3e8ff" stroke="#9333ea" strokeWidth="3" rx="5"/>
            <text x="480" y="185" textAnchor="middle" className="text-sm font-bold" fill="#6b21a8">Azure Service Bus</text>
            <text x="480" y="210" textAnchor="middle" className="text-xs" fill="#7c3aed">Colas de Mensajes</text>
            <text x="480" y="230" textAnchor="middle" className="text-xs" fill="#7c3aed">(Protobuf JSON)</text>
            <rect x="410" y="245" width="140" height="50" fill="#e9d5ff" stroke="#9333ea" strokeWidth="1" rx="3"/>
            <text x="480" y="265" textAnchor="middle" className="text-xs font-semibold" fill="#6b21a8">Topics & Queues</text>
            <text x="480" y="282" textAnchor="middle" className="text-xs" fill="#7c3aed">Eventos de dominio</text>

            {/* Worker Services */}
            <rect x="390" y="360" width="180" height="80" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
            <text x="480" y="390" textAnchor="middle" className="text-sm font-bold" fill="#15803d">Worker Services</text>
            <text x="480" y="410" textAnchor="middle" className="text-xs" fill="#16a34a">.NET Core 9</text>
            <text x="480" y="425" textAnchor="middle" className="text-xs" fill="#16a34a">+ Azure Functions</text>

            {/* Inbox Pattern */}
            <rect x="610" y="200" width="120" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
            <text x="670" y="225" textAnchor="middle" className="text-sm font-bold" fill="#d97706">Inbox</text>
            <text x="670" y="245" textAnchor="middle" className="text-xs" fill="#f59e0b">Idempotencia</text>

            {/* Aplicación Destino */}
            <rect x="760" y="180" width="130" height="100" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
            <text x="825" y="215" textAnchor="middle" className="text-sm font-bold" fill="#1e40af">Aplicación</text>
            <text x="825" y="235" textAnchor="middle" className="text-sm font-bold" fill="#1e40af">Destino</text>
            <text x="825" y="255" textAnchor="middle" className="text-xs" fill="#3b82f6">(Corporate, CTMS,</text>
            <text x="825" y="270" textAnchor="middle" className="text-xs" fill="#3b82f6">Clientes Externos)</text>

            {/* API REST */}
            <rect x="390" y="50" width="180" height="70" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="5"/>
            <text x="480" y="80" textAnchor="middle" className="text-sm font-bold" fill="#be185d">API REST</text>
            <text x="480" y="100" textAnchor="middle" className="text-xs" fill="#ec4899">Endpoints integración</text>

            {/* Webhooks */}
            <rect x="610" y="360" width="120" height="80" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" rx="5"/>
            <text x="670" y="390" textAnchor="middle" className="text-sm font-bold" fill="#c2410c">Webhooks</text>
            <text x="670" y="410" textAnchor="middle" className="text-xs" fill="#ea580c">Notificaciones</text>
            <text x="670" y="425" textAnchor="middle" className="text-xs" fill="#ea580c">en tiempo real</text>

            {/* Flechas principales */}
            <line x1="190" y1="230" x2="230" y2="230" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arroworange)"/>
            <line x1="350" y1="230" x2="390" y2="230" stroke="#9333ea" strokeWidth="3" markerEnd="url(#arroworange)"/>
            <line x1="570" y1="230" x2="610" y2="230" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arroworange)"/>
            <line x1="730" y1="230" x2="760" y2="230" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arroworange)"/>
            
            {/* Flechas Worker Services */}
            <line x1="480" y1="310" x2="480" y2="360" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arroworange)"/>
            <line x1="570" y1="400" x2="610" y2="400" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arroworange)"/>
            
            {/* Flecha API REST */}
            <line x1="480" y1="120" x2="480" y2="150" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arroworange)"/>
            <line x1="570" y1="85" x2="760" y2="200" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arroworange)" strokeDasharray="5,5"/>
            <line x1="730" y1="400" x2="825" y2="280" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arroworange)" strokeDasharray="5,5"/>

            {/* Etiquetas */}
            <text x="290" y="195" textAnchor="middle" className="text-xs" fill="#f59e0b">1. Registro</text>
            <text x="370" y="215" textAnchor="middle" className="text-xs" fill="#9333ea">2. Publicación</text>
            <text x="590" y="215" textAnchor="middle" className="text-xs" fill="#16a34a">3. Consumo</text>
            <text x="670" y="195" textAnchor="middle" className="text-xs" fill="#f59e0b">4. Validación</text>
            <text x="745" y="215" textAnchor="middle" className="text-xs" fill="#3b82f6">5. Integración</text>
          </svg>
        </div>
        <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-gray-700"><span className="font-semibold">Flujo:</span> 1) Los eventos se registran en Outbox (transacción local), 2) Se publican en Azure Service Bus, 3) Worker Services consumen los mensajes, 4) Se validan en Inbox (idempotencia), 5) Se integran en aplicaciones destino mediante API REST o Webhooks.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura y Patrones</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h3 className="font-semibold text-purple-900 mb-2">Event-Driven Architecture (EDA)</h3>
            <p className="text-sm text-gray-700">Comunicación mediante eventos en lugar de llamadas directas, mejorando escalabilidad y desacoplamiento</p>
          </div>
          <div className="p-4 border-l-4 border-orange-600 bg-orange-50">
            <h3 className="font-semibold text-orange-900 mb-2">Patrón Outbox</h3>
            <p className="text-sm text-gray-700">Garantiza consistencia entre base de datos y mensajes enviados, registrando eventos en tabla local</p>
          </div>
          <div className="p-4 border-l-4 border-yellow-600 bg-yellow-50">
            <h3 className="font-semibold text-yellow-900 mb-2">Patrón Inbox</h3>
            <p className="text-sm text-gray-700">Asegura idempotencia evitando procesar dos veces el mismo mensaje mediante registro de consumidos</p>
          </div>
          <div className="p-4 border-l-4 border-green-600 bg-green-50">
            <h3 className="font-semibold text-green-900 mb-2">Procesamiento Asíncrono</h3>
            <p className="text-sm text-gray-700">Worker Services y Azure Functions procesan mensajes de forma asíncrona y resiliente</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías Utilizadas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-2">.NET Core 9</h3>
            <p className="text-sm text-gray-700">Servicios de procesamiento de mensajes</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-900 mb-2">Azure Service Bus</h3>
            <p className="text-sm text-gray-700">Message broker para eventos JSON/Protobuf</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-900 mb-2">Worker Services</h3>
            <p className="text-sm text-gray-700">Procesos background para consumo de mensajes</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
            <h3 className="font-bold text-orange-900 mb-2">Azure Functions</h3>
            <p className="text-sm text-gray-700">Procesamiento serverless y Webhooks</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg border border-pink-200">
            <h3 className="font-bold text-pink-900 mb-2">API REST</h3>
            <p className="text-sm text-gray-700">Endpoints de integración para clientes</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-900 mb-2">Protobuf</h3>
            <p className="text-sm text-gray-700">Protocolo binario para mensajes seguros</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Beneficios Clave</h2>
        <div className="space-y-4">
          <div className="flex items-start p-4 bg-green-50 rounded-lg">
            <CheckIcon />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Desacoplamiento Total</h3>
              <p className="text-sm text-gray-700">Servicios productores y consumidores operan independientemente sin conocerse entre sí</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-blue-50 rounded-lg">
            <CheckIcon />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Tolerancia a Fallos</h3>
              <p className="text-sm text-gray-700">Sistema resiliente ante cortes de Internet, con reintentos controlados y recuperación automática</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-purple-50 rounded-lg">
            <CheckIcon />
            <div>
              <h3 className="font-semibold text-purple-900 mb-1">Consistencia Eventual</h3>
              <p className="text-sm text-gray-700">Garantiza consistencia entre bases de datos distribuidas mediante patrones Outbox e Inbox</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-orange-50 rounded-lg">
            <CheckIcon />
            <div>
              <h3 className="font-semibold text-orange-900 mb-1">Escalabilidad Masiva</h3>
              <p className="text-sm text-gray-700">Capaz de procesar cientos de miles de mensajes con escalabilidad horizontal y balanceo de carga</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
            <CheckIcon />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-1">Auditoría Completa</h3>
              <p className="text-sm text-gray-700">Sistema de trazabilidad que permite auditar y reproducir eventos si es necesario</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Conectores Disponibles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Fundanet Corporate</h3>
            <p className="text-sm text-gray-700">Conector específico para integración bidireccional con Corporate</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Fundanet Legacy</h3>
            <p className="text-sm text-gray-700">Integración con sistemas legacy de Fundanet Classic</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Fundanet CTMS</h3>
            <p className="text-sm text-gray-700">Conector para sistema de gestión de estudios clínicos</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
            <h3 className="font-semibold text-gray-700 mb-2">Próximamente...</h3>
            <p className="text-sm text-gray-600">Conectores para IEC, Fundraising y aplicaciones externas</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Importancia Estratégica</h2>
        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
          <p className="text-gray-800 mb-4">
            <span className="font-bold text-blue-900">Sistema Fundamental:</span> Tanto la API Multitenant como el Sistema de Mensajería permiten el diseño de una Suite de aplicaciones capaz de comunicarse de forma bidireccional, compartiendo servicios comunes.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
              <p className="text-sm text-gray-700">Escala en base a demanda sin requerir más infraestructura</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
              <p className="text-sm text-gray-700">Soporta cientos o miles de clientes con cientos de aplicaciones</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
              <p className="text-sm text-gray-700">Alta disponibilidad y balanceo de carga automático</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
              <p className="text-sm text-gray-700">Seguridad mediante protocolo binario Protobuf</p>
            </div>
          </div>
          <p className="text-gray-800 mt-4">
            Esta tecnología habilita la posibilidad de enlazar aplicaciones propias con aplicaciones de terceros y escalar de forma eficiente.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Estado del Desarrollo - Webhooks</h2>
        <p className="text-gray-700 mb-4">Trabajos en curso para implementación de Webhooks (mensajes reactivos), imprescindibles para Nexus:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Tarea</th>
                <th className="px-4 py-2 text-left">Estado</th>
                <th className="px-4 py-2 text-left">Progreso</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="bg-green-50"><td className="px-4 py-2">Definir arquitectura base</td><td className="px-4 py-2"><span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">Done</span></td><td className="px-4 py-2">100%</td></tr>
              <tr className="bg-green-50"><td className="px-4 py-2">Inicialización del repositorio</td><td className="px-4 py-2"><span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">Done</span></td><td className="px-4 py-2">100%</td></tr>
              <tr className="bg-yellow-50"><td className="px-4 py-2">Mantenimiento de webhooks</td><td className="px-4 py-2"><span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">In Progress</span></td><td className="px-4 py-2">77%</td></tr>
              <tr className="bg-blue-50"><td className="px-4 py-2">Configuración Azure Service Bus</td><td className="px-4 py-2"><span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">QA</span></td><td className="px-4 py-2">100%</td></tr>
              <tr className="bg-blue-50"><td className="px-4 py-2">Dispatcher - Envío notificaciones</td><td className="px-4 py-2"><span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">QA</span></td><td className="px-4 py-2">100%</td></tr>
              <tr className="bg-yellow-50"><td className="px-4 py-2">Auditoría y rastreabilidad</td><td className="px-4 py-2"><span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">In Progress</span></td><td className="px-4 py-2">44%</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-2">CI/CD y despliegue</td><td className="px-4 py-2"><span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">New</span></td><td className="px-4 py-2">0%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
);

export default MessagingSection;
