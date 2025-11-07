import CheckIcon from '../common/CheckIcon';

const InfrastructureSection = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-slate-50 to-zinc-50 p-8 rounded-lg border border-slate-200">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Infraestructura</h1>
      <p className="text-lg text-gray-700">Gestión de infraestructura cloud y servicios Azure</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Áreas de Trabajo</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-red-50 border-l-4 border-red-500">
          <h3 className="font-semibold text-red-900 mb-2">Incidencias de Seguridad</h3>
          <p className="text-sm text-gray-700">Detección y resolución de vulnerabilidades y problemas de seguridad en la infraestructura</p>
        </div>
        <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
          <h3 className="font-semibold text-orange-900 mb-2">Incidencias de Administración</h3>
          <p className="text-sm text-gray-700">Gestión y resolución de problemas administrativos en los servicios cloud</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Proyectos en Curso</h2>
      <div className="space-y-3">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Gestión de FinOps</h3>
          <p className="text-sm text-gray-700">Optimización de costes y gestión financiera de recursos cloud</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h3 className="font-semibold text-purple-900 mb-2">Trabajos con Ingram Micro</h3>
          <p className="text-sm text-gray-700">Colaboración con partner para optimización de licencias y servicios</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">Revisión de Licencias</h3>
          <p className="text-sm text-gray-700">Auditoría y optimización del licenciamiento de software y servicios</p>
        </div>
        <div className="p-4 bg-indigo-50 rounded-lg">
          <h3 className="font-semibold text-indigo-900 mb-2">Proyectos para ISV</h3>
          <p className="text-sm text-gray-700">Desarrollo de soluciones como Independent Software Vendor en Azure</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Modernización y Seguridad</h2>
      <div className="space-y-3">
        <div className="flex items-start p-3 bg-cyan-50 rounded-lg">
          <CheckIcon />
          <div>
            <h3 className="font-semibold text-cyan-900">Migración hacia GitHub</h3>
            <p className="text-sm text-gray-700">Transición de repositorios y pipelines hacia GitHub para mejor colaboración y CI/CD</p>
          </div>
        </div>
        <div className="flex items-start p-3 bg-yellow-50 rounded-lg">
          <CheckIcon />
          <div>
            <h3 className="font-semibold text-yellow-900">Automatización de Alertas</h3>
            <p className="text-sm text-gray-700">Implementación de sistemas automáticos de monitorización y notificación</p>
          </div>
        </div>
        <div className="flex items-start p-3 bg-red-50 rounded-lg">
          <CheckIcon />
          <div>
            <h3 className="font-semibold text-red-900">Seguridad en el Desarrollo</h3>
            <p className="text-sm text-gray-700">Integración de prácticas DevSecOps y análisis de vulnerabilidades en pipelines</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Recursos y Gestión</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-2">Contratación de Perfil Infraestructura</h3>
          <p className="text-sm text-gray-700">Ampliación del equipo de infraestructura para soportar crecimiento</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-2">Gestión con Tokiota</h3>
          <p className="text-sm text-gray-700">Coordinación con partner tecnológico para servicios especializados</p>
        </div>
      </div>
    </div>
  </div>
);

export default InfrastructureSection;
