import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    margin-top:175px;
    margin-bottom:20px;
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

    form{
        margin-top:70px;
        width:100%;
        max-width:891px;
        display:flex;
        flex-direction:column;
        align-items:center;

        input{
            width:100%;
            height:64px;
            border-radius:5px;
            border: 1px solid #151D41;
            padding: 0 20px;
            margin-bottom:36px;
            font-size:18px;
        }

        textarea{
            width:100%;
            height:148px;
            border-radius:5px;
            border: 1px solid #151D41;
            padding: 20px;
            margin-bottom:36px;
            resize:none;
            font-size:18px;
        }

        >div{
            width:100%;
            display:flex;
            flex-direction:row;

            input{
                margin-bottom:0;
            }

            margin-bottom:36px;
            
            input:first-child{
                margin-right:10px;
            }
        }

        button{
            width:213px;
            height:57px;
            background-color:#F97270;
            color:#fff;
            border:none;
            transition: background-color 0.2s;

            &:hover{
                background-color:${shade(0.2, "#F97270")};
            }
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

        form{
            >div{
                flex-direction:column;

                input:first-child{
                    margin-bottom:36px;
                }
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
