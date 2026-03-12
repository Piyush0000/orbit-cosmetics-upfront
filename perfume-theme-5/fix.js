const fs = require('fs');
let content = fs.readFileSync('components/Header.tsx', 'utf8');
content = content.trimEnd(); // Removes trailing whitespace and newlines
if (content.endsWith('}')) {
    content = content.slice(0, -1).trimEnd();
}
content += '\n';
fs.writeFileSync('components/Header.tsx', content);
