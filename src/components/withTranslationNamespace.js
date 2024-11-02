import React from 'react';
import { withTranslation } from 'react-i18next';
import namespaceList from '../namespaceList.json';

const withTranslationNamespace = (WrappedComponent) => {
    const componentName = WrappedComponent.displayName || WrappedComponent.name;
    const namespace = namespaceList[componentName];

    return withTranslation(namespace)(WrappedComponent);
};

export default withTranslationNamespace;
