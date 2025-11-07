# Fundanet Suite - Documentación Técnica

Esta es una aplicación React + TypeScript + Vite que muestra la documentación técnica del ecosistema Fundanet Suite.

## Estructura del Proyecto

El proyecto ha sido dividido en módulos separados para mejor organización y mantenibilidad:

```
C:\Arquitectura\
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── CheckIcon.tsx          # Componente reutilizable de icono de check
│   │   └── sections/
│   │       ├── AIAgentsSection.tsx    # Fundanet AI Agents
│   │       ├── AITicketsSection.tsx   # Fundanet AI Tickets
│   │       ├── ClassicSection.tsx     # Fundanet Classic
│   │       ├── CoreAPISection.tsx     # Fundanet Core API
│   │       ├── CorporateWindowsSection.tsx # Fundanet Corporate Windows
│   │       ├── CTMSSection.tsx        # Fundanet CTMS
│   │       ├── DocumentSignSection.tsx # Fundanet Document Sign
│   │       ├── HomeSection.tsx        # Página de inicio
│   │       ├── IECSection.tsx         # Fundanet IEC
│   │       ├── InfrastructureSection.tsx # Infraestructura
│   │       ├── MessagingSection.tsx   # Fundanet Message System
│   │       ├── MultitenantSection.tsx # Fundanet Multitenant
│   │       ├── NexusSection.tsx       # Fundanet Nexus
│   │       ├── PowerBISection.tsx     # Fundanet Power BI
│   │       ├── SuiteSection.tsx       # Fundanet Suite
│   │       └── WebCoreSection.tsx     # Fundanet Web Core
│   ├── App.tsx                        # Componente principal
│   ├── main.tsx                       # Punto de entrada
│   └── index.css                      # Estilos globales con Tailwind CSS
├── index.html                         # HTML principal
├── package.json                       # Dependencias del proyecto
├── tsconfig.json                      # Configuración de TypeScript
├── vite.config.ts                     # Configuración de Vite
├── tailwind.config.js                 # Configuración de Tailwind CSS
├── postcss.config.js                  # Configuración de PostCSS
└── README.md                          # Este archivo

```

## Requisitos Previos para Windows 11

Antes de ejecutar el proyecto, necesitas tener instalado:

1. **Node.js** (versión 18 o superior)
   - Descarga desde: https://nodejs.org/
   - Recomendado: Versión LTS (Long Term Support)

2. **npm** (se instala automáticamente con Node.js)

## Cómo Ejecutar el Proyecto en Windows 11

Sigue estos pasos desde la terminal de Windows (PowerShell o CMD):

### 1. Abrir la Terminal

- Presiona `Win + R`
- Escribe `cmd` o `powershell`
- Presiona Enter

### 2. Navegar al Directorio del Proyecto

```bash
cd C:\Arquitectura
```

### 3. Instalar las Dependencias

La primera vez que ejecutes el proyecto, necesitas instalar todas las dependencias:

```bash
npm install
```

Este comando instalará:
- React y React DOM
- TypeScript
- Vite (build tool)
- Tailwind CSS
- Lucide React (iconos)
- Y todas las demás dependencias necesarias

**Nota:** Este proceso puede tardar unos minutos la primera vez.

### 4. Ejecutar el Proyecto en Modo Desarrollo

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

Este comando:
- Iniciará el servidor de desarrollo de Vite
- Mostrará en la terminal una URL local (normalmente http://localhost:5173)
- El navegador se abrirá automáticamente o puedes abrir manualmente la URL

### 5. Ver la Aplicación

Abre tu navegador web y visita:
```
http://localhost:5173
```

La aplicación se recargará automáticamente cuando hagas cambios en el código.

### 6. Detener el Servidor

Para detener el servidor de desarrollo:
- Presiona `Ctrl + C` en la terminal
- Confirma con `S` o `Y` si te lo pide

## Comandos Disponibles

```bash
# Modo desarrollo (con hot-reload)
npm run dev

# Compilar para producción
npm run build

# Previsualizar el build de producción
npm run preview

# Verificar errores de código (linting)
npm run lint
```

## Solución de Problemas Comunes

### Error: 'npm' no se reconoce como comando

**Solución:** Node.js no está instalado o no está en el PATH del sistema.
1. Instala Node.js desde https://nodejs.org/
2. Reinicia la terminal después de la instalación

### Puerto 5173 ya está en uso

**Solución:** Vite usará automáticamente el siguiente puerto disponible (5174, 5175, etc.)

### Errores al instalar dependencias

**Solución:**
```bash
# Limpiar caché de npm
npm cache clean --force

# Eliminar node_modules y package-lock.json
rmdir /s node_modules
del package-lock.json

# Reinstalar
npm install
```

### La aplicación no se actualiza automáticamente

**Solución:**
1. Detén el servidor (Ctrl + C)
2. Reinicia con `npm run dev`

## Tecnologías Utilizadas

- **React 18.3** - Librería de UI
- **TypeScript 5.6** - Lenguaje de programación
- **Vite 6.0** - Build tool y dev server
- **Tailwind CSS 3.4** - Framework de CSS
- **Lucide React** - Librería de iconos
- **PostCSS** - Procesador de CSS

## Características de la Aplicación


[...existing content...]

## Compilar para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Esto generará una carpeta `dist/` con todos los archivos optimizados listos para desplegar.

## Soporte

Para más información sobre las tecnologías utilizadas:
- Vite: https://vitejs.dev/
- TypeScript: https://www.typescriptlang.org/
- Tailwind CSS: https://tailwindcss.com/
