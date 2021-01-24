import styled, { keyframes } from 'styled-components';

interface PropsContainer{
    showMenu:boolean
}

const appearFromLeft = keyframes`
  from{
    opacity:0;
    transform: translateX(50px);
  }
  to{
    opacity:1;
    tranform:translateX(0)
  }
`;

export const Container = styled.div<PropsContainer>`
    svg{
        display:none;
    }

    @media(max-width:745px){
        svg{
            display:flex;
        }
    }
`;

export const Nav = styled.div<PropsContainer>`
    width:200px;
    height:350px;
    background-color:#151D41;
    position:absolute;
    right:0;
    top:0;
    border-top-left-radius:20px;
    border-bottom-left-radius:60px;

    animation: ${appearFromLeft} 1s;

    display:${props=>props.showMenu ? 'flex' : 'none'};
    flex-direction:column;
    align-items:center;
    justify-content:center;

    svg{
        position:absolute;
        right:0;
        top:0;
    }
`;

export const NavItem = styled.div`
    margin-bottom:25px;
    
    a{
        color:#F97270ff;
        font-weight:bold;
    }
`;

