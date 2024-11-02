import i18n from "i18next";
import HttpBackend from "i18next-http-backend/cjs";
import {initReactI18next} from "react-i18next";
import namespaceList from './namespaceList.json';

const savedLanguage = localStorage.getItem('language') || 'en-US';


i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en-US',
        lng: savedLanguage,
        supportedLngs: ['en-US', 'es-ES'],
        defaultNS:'common',
        ns: ['common'],
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}/strings.json',
        },
        react: {
            useSuspense: true,
        },
        load: 'currentOnly'
    });

i18n.on('loaded', () => {
    Object.values(namespaceList).forEach((namespace) => {
        if (!i18n.hasResourceBundle(i18n.language, namespace)) {
            i18n.loadNamespaces(namespace);
        }

})});


export default i18n;