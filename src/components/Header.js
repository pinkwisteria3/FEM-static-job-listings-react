import styled from 'styled-components';
import headerMobileImg from '../images/bg-header-mobile.svg';
import headerDesktopImg from '../images/bg-header-desktop.svg';

const HeaderDiv = styled.div`
    background-color:#5CA5A5;
    background-image:url(${headerMobileImg});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    height:9.75rem;
    width:100vw;
    @media (min-width: 68.75rem) {
        background-image:url(${headerDesktopImg});
        max-width:85.375rem;
        margin-left:auto;
        margin-right:auto;
      }
`


function Header() {
    return (
        <HeaderDiv />
    )
}

export default Header
