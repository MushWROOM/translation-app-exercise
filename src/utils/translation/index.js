import i18n from 'i18next';

const loadComponentNamespace = async (componentName) => {
    const namespace = componentName;
    if (!i18n.hasResourceBundle(i18n.language, namespace)) {
        await i18n.loadNamespaces(namespace);
    }
};

export const TranslationUtils = {
    loadComponentNamespace: loadComponentNamespace
}
