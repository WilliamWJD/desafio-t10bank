import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
    }
    
    ul{
        list-style:none;
    }

    a{
        text-decoration:none;
    }

    h1, h2, h3, h4, h5, button{
        font-family:'Josefin Sans', sans-serif;
    }
    
    button{
        cursor: pointer;
    }
`;