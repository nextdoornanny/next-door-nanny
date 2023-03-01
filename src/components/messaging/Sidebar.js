import React from 'react';
import styled from '@emotion/styled';
import Search from './Search';
import Chats from './Chats';

const StyledSidebar = styled.div`
    flex: 1;
    border-right: 1px solid silver;
`

const Sidebar = (props) => {
    return (
        <StyledSidebar>
            {/* <Nav /> */}
            <Search />
            <Chats />
        </StyledSidebar >
    );
}

export default Sidebar;