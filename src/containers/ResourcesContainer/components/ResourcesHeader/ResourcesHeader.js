import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

import {HeaderText, SubHeaderText} from '../../../../styles/commonStyles';
import withTranslationNamespace from "../../../../components/withTranslationNamespace";

const ResourceHeaderText = styled(HeaderText)`
    color: #686868;
    margin-bottom: 3px;
`;

function ResourcesHeader({t}) {
    return (
        <>
            <ResourceHeaderText>{t('TITLE')}</ResourceHeaderText>
            <SubHeaderText>{t('SUBTITLE')}</SubHeaderText>
        </>
    );
}

ResourcesHeader.propTypes = {
    t: PropTypes.func
};


export default withTranslationNamespace(ResourcesHeader)