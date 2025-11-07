import CheckIcon from '../common/CheckIcon';

const PowerBISection = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-lg border border-yellow-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundanet Power BI</h1>
      <p className="text-lg text-gray-700">Generación de informes de explotación de datos</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
      <p className="text-gray-700">Sistema de generación de informes y dashboards para explotación de datos de Fundanet mediante Power BI, permitiendo análisis avanzado y visualización de información de negocio.</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Trabajos en Curso</h2>
      <div className="space-y-3">
        <div className="p-3 bg-green-100 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">✅ Entregado</h3>
          <p className="text-sm text-gray-700">Imidomics (en revisión por cliente)</p>
        </div>
        <div className="p-3 bg-blue-100 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">📅 Diciembre 2025</h3>
          <p className="text-sm text-gray-700">Entrega de SIRECS</p>
        </div>
        <div className="p-3 bg-green-100 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">✅ Informes Completados</h3>
          <p className="text-sm text-gray-700">Informes 46, 48, 50, 52</p>
        </div>
        <div className="p-3 bg-yellow-100 rounded-lg">
          <h3 className="font-semibold text-yellow-900 mb-2">⏳ Pendientes</h3>
          <p className="text-sm text-gray-700">Informes 55, mod del 46, 76, 77, 56, 64, 80</p>
        </div>
        <div className="p-3 bg-purple-100 rounded-lg">
          <h3 className="font-semibold text-purple-900 mb-2">📍 17 de Octubre</h3>
          <p className="text-sm text-gray-700">Migración de informes de FJSD y despliegue del informe de farmacia</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
          <h3 className="font-bold text-yellow-900 mb-2">Power BI</h3>
          <p className="text-sm text-gray-700">Plataforma de Business Intelligence de Microsoft</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
          <h3 className="font-bold text-blue-900 mb-2">Azure SQL Database</h3>
          <p className="text-sm text-gray-700">Fuentes de datos de Fundanet</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
          <h3 className="font-bold text-purple-900 mb-2">DAX</h3>
          <p className="text-sm text-gray-700">Lenguaje de expresiones para cálculos</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
          <h3 className="font-bold text-green-900 mb-2">Power Query</h3>
          <p className="text-sm text-gray-700">Transformación y preparación de datos</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Ventajas</h2>
      <div className="space-y-3">
        <div className="flex items-start p-3 bg-green-50 rounded-lg">
          <CheckIcon />
          <div>
            <h3 className="font-semibold text-green-900">Visualización Avanzada</h3>
            <p className="text-sm text-gray-700">Dashboards interactivos y visualizaciones dinámicas de datos complejos</p>
          </div>
        </div>
        <div className="flex items-start p-3 bg-blue-50 rounded-lg">
          <CheckIcon />
          <div>
            <h3 className="font-semibold text-blue-900">Análisis en Tiempo Real</h3>
            <p className="text-sm text-gray-700">Conexión directa con fuentes de datos para información actualizada</p>
          </div>
        </div>
        <div className="flex items-start p-3 bg-purple-50 rounded-lg">
          <CheckIcon />
          <div>
            <h3 className="font-semibold text-purple-900">Integración con Fundanet</h3>
            <p className="text-sm text-gray-700">Explotación de datos de todos los módulos del ecosistema Fundanet</p>
          </div>
        </div>
        <div className="flex items-start p-3 bg-orange-50 rounded-lg">
          <CheckIcon />
          <div>
            <h3 className="font-semibold text-orange-900">Toma de Decisiones</h3>
            <p className="text-sm text-gray-700">Análisis de KPIs y métricas para decisiones basadas en datos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PowerBISection;
