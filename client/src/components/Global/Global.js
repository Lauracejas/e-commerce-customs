import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    position: relative;
    min-height: 100vh;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    
   background-image: url("https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1500");
    // background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
   
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
 
 .footer {
  padding-top: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #00233A;
  text-align: center;
}
 
  
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }


`