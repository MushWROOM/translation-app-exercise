const fs = require('fs');
const path = require('path');
const glob = require('glob');

const srcDir = path.join(__dirname, 'src');
const destDir = path.join(__dirname, 'public/locales');


function copyLocales() {

    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    glob(`${srcDir}/**/locales/**/strings.json`, {}, (err, files) => {
        if (err) {
            console.error('Error finding locale files:', err);
            return;
        }

        files.forEach(file => {
            const relativePath = path.relative(srcDir, file);
            const pathParts = relativePath.split(path.sep);

            const lngIndex = pathParts.indexOf('locales') + 1;
            const lng = pathParts[lngIndex];
            const namespace = pathParts[lngIndex - 2];

            const destLangDir = path.join(destDir, lng, namespace);
            if (!fs.existsSync(destLangDir)) {
                fs.mkdirSync(destLangDir, { recursive: true });
            }

            const destFile = path.join(destLangDir, 'strings.json');
            fs.copyFileSync(file, destFile);
            console.log(`Copied ${file} to ${destFile}`);
        });
    });
}


copyLocales();
