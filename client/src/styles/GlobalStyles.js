import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    /*  
        Text - font-family: 'Nunito Sans', sans-serif;
        Headings - font-family: 'Raleway', sans-serif;
    */
    * { 
        font-family: 'Nunito Sans', sans-serif;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background-color: ${(props) => props.theme.bodyBg};
        color: ${(props) => props.theme.dark};
        
        -webkit-font-smoothing: antialiased;
        min-height: 100vh;
    }



    h1,h2,h3,h4,h5,h6{
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
    }
`;
