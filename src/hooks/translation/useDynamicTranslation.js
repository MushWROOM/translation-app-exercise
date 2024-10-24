import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {TranslationUtils} from "../../utils/translation";

const useDynamicTranslation = (componentName) => {
    const { t, i18n } = useTranslation(componentName);
    useEffect(() => {
        TranslationUtils.loadComponentNamespace(componentName);
    }, [componentName, i18n]);

    return { t };
};

export default useDynamicTranslation;