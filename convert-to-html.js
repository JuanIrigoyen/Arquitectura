const fs = require('fs');
const path = require('path');

// Leer todas las secciones
const sectionsDir = path.join(__dirname, 'src', 'components', 'sections');
const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx'));

let allSections = '';

files.forEach(file => {
  const content = fs.readFileSync(path.join(sectionsDir, file), 'utf-8');

  // Extraer el nombre de la sección del archivo
  const sectionName = file.replace('Section.tsx', '').replace(/([A-Z])/g, '-$1').toLowerCase().substring(1);

  // Extraer el JSX (entre el return y el último paréntesis)
  const jsxMatch = content.match(/return\s*\(([\s\S]*)\);?\s*export/);

  if (jsxMatch) {
    let jsx = jsxMatch[1].trim();

    // Convertir className a class
    jsx = jsx.replace(/className=/g, 'class=');

    // Convertir {' '} a espacios
    jsx = jsx.replace(/\{\s*'\s*'\s*\}/g, ' ');

    // Remover import de CheckIcon y reemplazar <CheckIcon /> por SVG inline
    jsx = jsx.replace(/<CheckIcon\s*\/>/g, `
      <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
    `);

    // Agregar la sección al HTML
    allSections += `\n        <!-- ${sectionName.toUpperCase()} SECTION -->\n`;
    allSections += `        <div id="${sectionName}-section" class="section-content">\n`;
    allSections += `          ${jsx}\n`;
    allSections += `        </div>\n`;
  }
});

console.log('Total secciones procesadas:', files.length);
fs.writeFileSync(path.join(__dirname, 'sections-output.html'), allSections);
console.log('Archivo generado: sections-output.html');
