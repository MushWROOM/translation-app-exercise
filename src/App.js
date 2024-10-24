import React, {Suspense} from 'react';
import styled from 'styled-components';
import HeaderPanel from './components/HeaderPanel/HeaderPanel';
import {GlobalStyle} from './styles/appDefaultStyles';
import ResourcesContainer from './containers/ResourcesContainer/ResourcesContainer';
import {headerPanelHeight, VerticalContainer} from './styles/commonStyles';

const ApplicationContainer = styled(VerticalContainer)`
    min-height: calc(100vh - ${headerPanelHeight});
`;

const MainContainer = styled.main`
    display: flex;
    flex: 1;
    position: relative;
    top: ${headerPanelHeight};
`;

function App() {

    return (
        <Suspense fallback={<div>Loading page...</div>}>
            <GlobalStyle/>
            <ApplicationContainer>
                <HeaderPanel/>
                <MainContainer>
                    <ResourcesContainer/>
                </MainContainer>
            </ApplicationContainer>
        </Suspense>
    );
}

export default App;