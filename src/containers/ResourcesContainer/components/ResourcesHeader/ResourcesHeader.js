import React from 'react';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";

import {HeaderText, SubHeaderText} from '../../../../styles/commonStyles';
import resolveNamespace from "../../../../../localizationMacro.macro";

const ResourceHeaderText = styled(HeaderText)`
    color: #686868;
    margin-bottom: 3px;
`;

function ResourcesHeader() {
    const namespace = resolveNamespace;
    const { t } = useTranslation(namespace);


    return (
        <>
            <ResourceHeaderText>{t('TITLE')}</ResourceHeaderText>
            <SubHeaderText>{t('SUBTITLE')}</SubHeaderText>
        </>
    );
}



export default ResourcesHeader