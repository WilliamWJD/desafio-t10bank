import { shade } from 'polished';
import styled from 'styled-components';

interface PropsProgress{
    progressStatus:number;
}

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
            width:604px;
            height:13px;
            position:absolute;
            border-radius:10px;
            bottom:3px;
            align-items:center;
            left:13%;
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
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top:107px;

    @media(max-width:734px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`;

export const ServicesDescription = styled.div`
    max-width:442px;
    height:517px;
    background-color:#F97270;
    box-shadow: 0px 20px 20px #7682B72E;
    padding:50px;

    display:flex;
    flex-direction:column;
    justify-content:center;

    img{
        width: 109px;
        height: 108px;
        border:1px solid #fff;
        border-radius:50%;
        padding: 20px;
        margin-bottom:37px;
    }

    h1{
        font-weight:normal;
        font-size:32px;
        color:#fff;
        margin-bottom:47px;
    }

    p{
        font-size:16px;
        color:#fff;
        line-height:28px;
        margin-bottom:30px;
    }

    button{
        width:151px;
        height:39px;
        border:none;
        background-color:#fff;
        font-size:16px;
        transition:background-color 0.2s;

        &:hover{
            background-color:${shade(0.2,"#fff")};
        }
    }

    @media(max-width:734px){
        margin-top:50px;
    }
   
`;

export const ProgressDesign = styled.div`
    width:100%;
    max-width:521px;
    height:287px;
    box-shadow: 0px 20px 20px #7682B72E;
    border-radius: 5px;
    opacity:1;
    padding:66px 33px 65px 33px;

    display:flex;
    flex-direction:column;
    justify-content:center;

    h1{
        font-size:45px;
        color:#151D41;
    }

    span{
        font-size:27px;
        color:#151D41;
    }

    p{
        font-size:18px;
        color:#686868;
        margin-top:10px;
    }

    @media(max-width:520px){
        h1{
            font-size:40px;
        }

        span{
            font-size:20px;
        }

        p{
            font-size:15px;
        }
    }
`;

export const Progress = styled.div`
    width:100%;
    height:5px;
    background-color:#F9727033;
    margin: 15px 0 35px 0;
`;

export const ProgressDone = styled.div<PropsProgress>`
    width:${props=>props.progressStatus}%;
    height:5px;
    background-color:#F97270;
`;


