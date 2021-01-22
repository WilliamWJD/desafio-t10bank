import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width:100%;
`;

export const Content = styled.div`
  width:100%;
  margin-top:100px;

  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items:center;

  img{
    width:426px;
    height:395px;
  }
`;

export const HomeDescription = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:60px;

  h1{
    font-size:50px;
    line-height:55px;
    margin-bottom:15px;
    font-weight:400;
  }

  span{
    font-family:'Josefin Sans', sans-serif;
    font-size:25px;
    color:#455A64;
    margin-bottom:50px;
  }

  button{
    border:none;
    width:179px;
    height:44px;
    border-radius:26px;
    background-color:#F97270;
    color:#fff;
    font-weight:bold;
    transition: background-color 0.2s;

    &:hover{
      background-color:${shade(0.2,'#F97270')}
    }
  }
`;
