import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height: 128px;
    background-color:#F97270;
`;

export const NavBar = styled.div`
    height:100%;
    max-width:1100px;
    margin: 0 auto;

    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
`;

export const Nav = styled.ul`
    display: flex;
    flex-direction: row;
`;

export const NavItem = styled.li`
    font-family:'Josefin Sans', sans-serif;
    color:#fff;
    margin-right:40px;
    font-weight:bold;
    font-size:15px;
    cursor:pointer;

    &:last-child{
        margin-right:0;
    }
`;

