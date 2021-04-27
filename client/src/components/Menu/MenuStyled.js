import styled from 'styled-components';

export const StyledMenu = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
background: ${({ theme }) => theme.primaryDarkTwo};
background-image: url('https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
     background-blend-mode: exclusion;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
height: 100vh;
text-align: left;
padding: 3rem;
position: absolute;

top: 5;
left: 0;
transition: transform 0.3s ease-in-out;
@media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
a {
  font-size: 3rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
  transition: color 0.3s linear;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }
  &:hover {
    color: ${({ theme }) => theme.primaryDarkTwo};
  }
  .button {
    background: black;
  }
}
@media only screen and (max-width: 580px) {
  height: 150vh;
}
`;