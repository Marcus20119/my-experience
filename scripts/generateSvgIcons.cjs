const fs = require('fs');
const path = require('path');

const PATH_TO_SVG_FILE = '../src/shared/assets/svgs';
const PATH_TO_GENERATED_FILE = '../src/shared/assets/svgs/generatedIcons.ts';

const iconsDir = path.join(__dirname, PATH_TO_SVG_FILE);
const outputFilePath = path.join(__dirname, PATH_TO_GENERATED_FILE);

const getSvgContent = filePath => {
  const svgContent = fs.readFileSync(filePath, 'utf-8');

  const widthMatch = svgContent.match(/width="([^"]+)"/);
  const heightMatch = svgContent.match(/height="([^"]+)"/);

  return {
    body: svgContent.replace(/\n/g, ''),
    width: widthMatch ? Number(widthMatch[1]) : undefined,
    height: heightMatch ? Number(heightMatch[1]) : undefined,
  };
};

const generateIconsObject = () => {
  const files = fs.readdirSync(iconsDir);
  const icons = [];

  files.forEach(file => {
    if (path.extname(file) === '.svg') {
      const iconName = path.basename(file, '.svg');
      const svgContent = getSvgContent(path.join(iconsDir, file));

      if (svgContent) {
        icons.push({
          name: iconName,
          content: svgContent,
        });
      }
    }
  });

  return icons;
};

const writeIconsFile = icons => {
  const fileContent = `/* eslint-disable perfectionist/sort-objects */
// This file is auto-generated by generateIcons.js
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/naming-convention */
export const icons: {name: string; content: {body: string; width?: null | number; height?: null | number}}[] = ${JSON.stringify(icons, null, 2)};
`;

  fs.writeFileSync(outputFilePath, fileContent, 'utf8');
  console.log(`Generated ${outputFilePath}`);
};

const icons = generateIconsObject();
writeIconsFile(icons);
