const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/containers/ResourcesContainer/components');
const outputFile = path.join(__dirname, 'src/namespaceList.json');

const generateNamespaceList = () => {
    const namespaces = {};

    fs.readdirSync(componentsDir).forEach((component) => {
        const localesDir = path.join(componentsDir, component, 'locales');
        if (fs.existsSync(localesDir)) {
            namespaces[component] = component;
        }
    });

    fs.writeFileSync(outputFile, JSON.stringify(namespaces, null, 2));
    console.log('Namespace list generated at src/namespaceList.json');
};

generateNamespaceList();
