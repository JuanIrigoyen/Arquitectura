const fs = require('fs');
const path = require('path');

// Function to extract JSX content from TSX files
function extractJSX(content) {
  // Extract content between return statement and closing parenthesis
  const returnMatch = content.match(/return\s*\(\s*([\s\S]*?)\s*\);/);
  if (returnMatch) {
    return returnMatch[1].trim();
  }
  return '';
}

// Function to convert React/JSX to HTML
function convertToHTML(jsx) {
  return jsx
    .replace(/className=/g, 'class=')
    .replace(/strokeWidth=/g, 'stroke-width=')
    .replace(/strokeDasharray=/g, 'stroke-dasharray=')
    .replace(/markerEnd=/g, 'marker-end=')
    .replace(/textAnchor=/g, 'text-anchor=')
    .replace(/fillRule=/g, 'fill-rule=')
    .replace(/clipRule=/g, 'clip-rule=')
    .replace(/<CheckIcon \/>/g, `<svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>`)
    .replace(/{\/\*[\s\S]*?\*\/}/g, ''); // Remove JSX comments
}

const sectionsDir = path.join(__dirname, 'src', 'components', 'sections');
const outputFile = path.join(__dirname, 'html-version', 'index.html');

// Sections mapping
const sections = [
  { file: 'HomeSection.tsx', id: 'home', name: 'Inicio', icon: 'home' },
  { file: 'MultitenantSection.tsx', id: 'multitenant', name: 'Fundanet Multitenant', icon: 'cloud' },
  { file: 'MessagingSection.tsx', id: 'messaging', name: 'Fundanet Message System', icon: 'zap' },
  { file: 'WebCoreSection.tsx', id: 'web-core', name: 'Fundanet Web Core', icon: 'code' },
  { file: 'CoreAPISection.tsx', id: 'core-api', name: 'Fundanet Core API', icon: 'server' },
  { file: 'CorporateWindowsSection.tsx', id: 'corporate-windows', name: 'Fundanet Corporate Windows', icon: 'database' },
  { file: 'ClassicSection.tsx', id: 'classic', name: 'Fundanet Classic', icon: 'file-text' },
  { file: 'CTMSSection.tsx', id: 'ctms', name: 'Fundanet CTMS', icon: 'database' },
  { file: 'IECSection.tsx', id: 'iec', name: 'Fundanet IEC', icon: 'lock' },
  { file: 'AIAgentsSection.tsx', id: 'ai-agents', name: 'Fundanet AI Agents', icon: 'cpu' },
  { file: 'AITicketsSection.tsx', id: 'ai-tickets', name: 'Fundanet AI Tickets', icon: 'file-text' },
  { file: 'NexusSection.tsx', id: 'nexus', name: 'Fundanet Nexus', icon: 'git-branch' },
  { file: 'SuiteSection.tsx', id: 'suite', name: 'Fundanet Suite', icon: 'bar-chart-3' },
  { file: 'PowerBISection.tsx', id: 'powerbi', name: 'Fundanet Power BI', icon: 'bar-chart-3' },
  { file: 'DocumentSignSection.tsx', id: 'document-sign', name: 'Fundanet Document Sign', icon: 'lock' },
  { file: 'InfrastructureSection.tsx', id: 'infrastructure', name: 'Infraestructura', icon: 'server' }
];

console.log('Starting HTML generation...');
console.log('Found', sections.length, 'sections to process');

// Generate navigation HTML
let navHTML = sections.map((section, index) => {
  const activeClass = index === 0 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100';
  return `            <li>
              <button onclick="showSection('${section.id}')" class="nav-btn w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${activeClass}">
                <i data-lucide="${section.icon}" class="w-5 h-5"></i>
                <span class="text-sm">${section.name}</span>
              </button>
            </li>`;
}).join('\n');

// Read and convert each section
let sectionsHTML = '';
sections.forEach((section, index) => {
  const filePath = path.join(sectionsDir, section.file);
  console.log('Processing', section.file, '...');

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const jsx = extractJSX(content);
    const html = convertToHTML(jsx);

    const activeClass = index === 0 ? ' active' : '';
    sectionsHTML += `
        <!-- ${section.name.toUpperCase()} SECTION -->
        <div id="${section.id}-section" class="section-content${activeClass}">
          ${html}
        </div>
`;
  } catch (error) {
    console.error('Error processing', section.file, ':', error.message);
  }
});

// Complete HTML template
const htmlTemplate = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fundanet Suite - Documentación Técnica</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    .section-content { display: none; }
    .section-content.active { display: block; }
  </style>
</head>
<body class="min-h-screen bg-gray-50">

  <!-- Header -->
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <i data-lucide="database" class="w-6 h-6 text-white"></i>
        </div>
        <div>
          <h1 class="text-xl font-bold text-gray-900">Fundanet Suite</h1>
          <p class="text-xs text-gray-500">Documentación Técnica</p>
        </div>
      </div>
      <button onclick="toggleMobileMenu()" class="md:hidden p-2 hover:bg-gray-100 rounded-lg">
        <i data-lucide="menu" id="menu-icon"></i>
        <i data-lucide="x" id="close-icon" style="display: none;"></i>
      </button>
    </div>
  </header>

  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex gap-8">

      <!-- Sidebar -->
      <aside id="sidebar" class="hidden md:block w-64 flex-shrink-0">
        <nav class="bg-white rounded-lg shadow-sm p-4 sticky top-24">
          <h2 class="font-semibold text-gray-900 mb-3 px-2">Navegación</h2>
          <ul class="space-y-1">
${navHTML}
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 min-w-0">
${sectionsHTML}
      </main>
    </div>
  </div>

  <script>
    function showSection(sectionId) {
      const sections = document.querySelectorAll('.section-content');
      sections.forEach(section => section.classList.remove('active'));

      const targetSection = document.getElementById(sectionId + '-section');
      if (targetSection) {
        targetSection.classList.add('active');
      }

      const navButtons = document.querySelectorAll('.nav-btn');
      navButtons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('text-gray-700', 'hover:bg-gray-100');
      });

      const activeButton = document.querySelector('button[onclick="showSection(\\''+sectionId+'\\')"]');
      if (activeButton && activeButton.classList.contains('nav-btn')) {
        activeButton.classList.remove('text-gray-700', 'hover:bg-gray-100');
        activeButton.classList.add('bg-blue-600', 'text-white');
      }

      const sidebar = document.getElementById('sidebar');
      if (window.innerWidth < 768) {
        sidebar.classList.add('hidden');
        document.getElementById('menu-icon').style.display = 'block';
        document.getElementById('close-icon').style.display = 'none';
      }

      window.scrollTo(0, 0);
    }

    function toggleMobileMenu() {
      const sidebar = document.getElementById('sidebar');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');

      sidebar.classList.toggle('hidden');

      if (sidebar.classList.contains('hidden')) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      } else {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      lucide.createIcons();
    });
  </script>

</body>
</html>`;

// Write the file
fs.writeFileSync(outputFile, htmlTemplate, 'utf8');
const stats = fs.statSync(outputFile);
console.log('\n✓ HTML file generated successfully!');
console.log('  Location:', outputFile);
console.log('  Total sections:', sections.length);
console.log('  File size:', (stats.size / 1024).toFixed(2), 'KB');
console.log('\nYou can now open the file with double-click or in any browser!');
