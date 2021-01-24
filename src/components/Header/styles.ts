import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height: 128px;
    background-color:#F97270;
`;

export const NavBar = styled.div`
    padding: 0 10px 0 10px;
    height:100%;
    max-width:1100px;
    margin: 0 auto;

    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;

    @media(max-width:540px){
        img{
            width:130px;
            height:40px;
        }
    }
`;

export const Nav = styled.ul`
    display: flex;
    flex-direction: row;

    @media(max-width:745px){
        display:none;
    }
`;

export const NavItem = styled.li`
    a{
        font-family:'Josefin Sans', sans-serif;
        color:#fff;
        margin-right:40px;
        font-weight:bold;
        font-size:15px;
    }
    
    cursor:pointer;

    &:last-child{
        margin-right:0;
    }
`;

