import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    margin-top:175px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    > h1{
        font-size:20px;
        color:#F97270;
        margin-bottom:37px;
        position:relative;
        
        ::before{
            content:'';
            background-color:#F97270;
            opacity:0.1;
            width:120px;
            height:13px;
            position:absolute;
            border-radius:10px;
            bottom:0;
            left:8px;
        }
    }

    strong{
        font-size:40px;
        color:#151D41;
        position:relative;

        ::before{
            content:'';
            background-color:#F97270;
            opacity:0.1;
            width:318px;
            height:13px;
            position:absolute;
            border-radius:10px;
            bottom:3px;
            align-items:center;
        }
    }

    @media(max-width:827px){
        strong{
            font-size:30px;
            ::before{
                width:400px;
                left:16%;
            }
        }
    }

    @media(max-width:610px){
        strong{
            font-size:25px;
            ::before{
                width:300px;
                height:7px;
                left:16%;
            }
        }
    }

    @media(max-width:591px){
        padding:0 10px;
    }

    @media(max-width:520px){
        strong{
            font-size:25px;
            text-align:center;
            ::before{
                display:none
            }
        }
    }
`;

export const Content = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
    flex-direction:row;
    margin-top:95px;
    
`;

export const Item = styled.div`
    width:239px;
    height:303px;
    cursor:pointer;
    transition: 0.2s;
    margin-right:10px;
    
    img{
        object-fit:cover;
    }

    &:hover{
       margin-top:-10px;
    }  

    @media(max-width:1009px){
        margin-bottom:10px;
        transition:none;
        &:hover{
            margin-top:0%;
        }
    }
`;
