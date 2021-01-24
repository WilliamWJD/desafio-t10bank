import { shade } from 'polished';
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
        font-weight:normal;
        margin-bottom:77px;
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
`;

export const Content = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    > img{
        width:385px;
        height:413px;
    }

    @media(max-width:774px){
        > img{
            width:285px;
            height:313px;
        }
    }


    @media(max-width:684px){
       flex-direction:column;
    }
`;

export const AboutDescription = styled.div`
    margin-left:57px;

    h1{
        font-size:21px;
        color:#151D41;
        width:203px;
        margin-bottom:29px;
    }

    p{
        font-size:18px;
        color:#151D41;
        width:321px;
        font-weight:400;
        line-height:24px;
        margin-bottom:29px;
    }

    button{
        border:0;
        width:164px;
        height:52px;
        background-color:#F97270;
        border-radius:5px;
        color:#fff;
        transition: background-color 0.2s;

        &:hover{
            background-color:${shade(0.2, '#F97270')}
        }
    }

    @media(max-width:774px){
        h1{
            font-size:18px
        }

        p{
            font-size:14px;
        }

        button{
            width:145px;
            height:40px;
        }
    }

    @media(max-width:684px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-left:0;

        p{
            text-align:center;
        }
    }
`;

export const ImageAbout = styled.div`
    
`;

