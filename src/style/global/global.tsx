import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: "StratosSkyeng";
        scrollbar-width: 0;

        &::-webkit-scrollbar {
            width: 0;
        }

        &::-moz-scrollbar {
            width: 0;
        }
    }

    a {
        display: block;
        text-decoration: none;
        cursor: pointer;
    }

    img {
        display: block;
        height: auto;
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    @-webkit-keyframes loading-animation {
        0% {
            background: #dadbdb;
        }
        100% {
            background: #f4f9f6;
        }
    }
    @keyframes loading-animation {
        0% {
            background: #dadbdb;
        }
        100% {
            background: #f4f9f6;
        }
    }
`;
