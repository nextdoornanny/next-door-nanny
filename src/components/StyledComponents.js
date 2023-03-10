import { Field } from 'formik';
import styled from "@emotion/styled"
import { css } from '@emotion/react';
import Navbar from "react-bootstrap/Navbar"
import { NavDropdown } from 'react-bootstrap';

export const Flex = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    fill: ${props => props.fill};
    margin-left: ${props => props.marginLeft};
    display: flex;
    flex-wrap: ${props => {
                if (props.wrapReverse) return 'wrap-reverse';
                else if (props.noWrap) return 'nowrap';
                return 'wrap';
        }};
    align-self: ${props => props.alignSelf};
    justify-content: ${props => {
                if (props.justifyContent) return props.justifyContent;
                if (props.justifyCenter) return 'center';
                else if (props.justifyAround) return 'space-around';
                else if (props.justifyEvenly) return 'space-evenly';
                else if (props.justifyBetween) return 'space-between';
                else if (props.justifyEnd) return 'flex-end';
                return 'flex-start';
        }};
    align-items: ${props => {
                if (props.alignItems) return props.alignItems;
                else if (props.alignStretch) return 'stretch';
                else if (props.alignEnd) return 'flex-end';
                if (props.alignCenter) return 'center';
                else if (props.alignBaseline) return 'baseline';
                return 'flex-start';
        }};
    align-content: ${props => {
                if (props.alignContent) return props.content;
                else if (props.contentStart) return 'flex-start';
                else if (props.contentEnd) return 'flex-end';
                else if (props.contentCenter) return 'center';
                else if (props.contentBetween) return 'space-between';
                else if (props.contentAround) return 'contentAround';
                return 'stretch';
        }};
    flex-direction: ${props => (props.column ? 'column' : 'row')};
    background: ${props => props.background};
    ${props => props.hover && css`
    &:hover {
        border-radius: 6px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.85);
        border: 1.5px solid #2b89f3;
      }
`}
`;

export const BlueButton = styled.button`
        font-family: Noto !important;
        background-color: #3F53D9;
        font-size: 0.75rem;
        color: white !important;
        height: 40px;
        border: unset;
        margin: 10px;
        padding: 6px;
        cursor: pointer;
`

export const UnderlinedButton = styled.button`
        font-family: Noto !important;
        font-size: 0.75rem;
        height: 40px;
        background-color: white;
        color: black;
        margin: 10px;
        border: unset;
        border-bottom: 1px dotted black;
        padding: 6px;
        cursor: pointer;
`

export const CenteredTitle = styled.h1`
        text-align: center;
        margin: 0 auto;
`

export const Title = styled.h1`
        text-align: left !important;
`

export const DropDownBrands = styled.section`
        // display: none;
        // -webkit-calc(100% - 212px);
        height: calc(100vh -175px);
        position: ${props => props.open ? 'fixed' : 'absolute'};
        display: ${props => props.open ? 'block' : 'unset'};
        top: 170px;
        // bottom: 0;
        left: 0;
        // right: 0;
        width: 100%;
        transition: .5s ease;
        background-color: #fff;
        opacity: ${props => props.open ? '0.8' : '0'};
        z-index: ${props => props.open ? '888888' : '0'};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

`
export const Header = styled.header`
        font-size: 14px;
        line-height: 1;
        letter-spacing: 0.35px;
        // margin-bottom: 10px;
        padding: 0px;
        border: 0px;
        vertical-align: baseline;
        position: relative;
        z-index: 9999;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: auto;
        // border-bottom: 1px solid rgb(242, 242, 242);
`

export const Navigation = styled(Navbar)`
        font-size: 14px;
        z-index: 9999;
        line-height: 1;
        font-family: Noto;
        letter-spacing: 0.35px;
        padding: 0px;
        border: 0px;
        position: relative;
        display: flex;
        -webkit-box-pack: center;
        justify-content: flex-start;
        align-items: baseline;
        @media (max-width: 1200px) {
                display: none;
              }
`
export const NavMenuItem = styled(NavDropdown.Item)`
        font-family: NotoSemiBold !important;
        line-height: 1;
        margin: 0px;
        padding: 0px;
        border: 0px;
        padding-bottom: 2px;
        color: black !important;
        opacity: 1;
        margin-bottom: 4px;
        margin: 6px 16px 4px;
        font-size: 0.928571rem;
        line-height: 17px;
        z-index: 100;
        cursor: pointer;
        & > a{
        text-decoration: none;
        color: white;
        &:hover{
                width: 100%;
        }
        }
`
export const MobileNavigation = styled.nav`
        max-width: 300px;
        width: 100%;
        height: 650px;
        position: fixed;
        border-radius: 6px;
        box-shadow: 0 0 5px 0 rgba(102, 102, 102, 0.5);
        top: 67px;
        right: 0;
        z-index: 99999;
        color: ${props => props.isDark ? 'white' : 'black'};
        background-color: ${props => props.isDark ? '#1D1D1D' : 'white'};
        // display: ${({ openBurger }) => openBurger ? 'flex' : 'none'};
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space
        transform: ${({ openBurger }) => openBurger ? 'translateX(-40px)' : 'translateX(-100%)'};
        transition: transform 0.6s ease-in-out !important;  
        @media (min-width: 1000px) {
                display: none;
              }

`
export const MobileNavMenuItem = styled.div`
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        font-family: Noto !important;
        border-radius: 6px;
        border-bottom: 1px solid rgba(0, 0, 1, 0.06);
        text-decoration: none !important;
        padding-bottom: 2px;
        color: ${props => props.isDark ? 'white !important' : 'black !important'};
        opacity: 1;
        margin-bottom: 4px;
        margin: 6px 16px 4px;
        font-size: 1.2em;
        font-weight: bold;
        line-height: 17px;
        cursor: pointer;
        & > a{
        color: ${props => props.isDark ? 'white !important' : 'black !important'};
        text-decoration: none;
        }
`
export const CartContainer = styled.div`
        position: relative;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        height: 20px;
        background-color: rgb(254, 205, 47);
`
export const AppContainer = styled.div`
        background: white;
        width: 100%;
        display: flex;
        position: relative;
        top: 0px;
        left: 0px;
        flex-direction: column;
        min-height: 100vh;
        z-index: 30;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 27px 0px;
        will-change: transform;
`

export const LogoHolder = styled.div`
        font-size: 14px;
        line-height: 1;
        font-family: ProximaNova-Regular, "Helvetica Neue", Verdana, Arial, sans-serif;
        letter-spacing: 0.35px;
        margin-bottom: 10px;
        padding: 0px;
        border: 0px;
        vertical-align: baseline;
        position: relative;
        -webkit-box-pack: center;
        justify-content: center;
        display: flex;
        // width: 33%;
        align-items: flex-start;
        height: 50px;
        

`
export const DescriptionFlex = styled(Flex)`
    flex-direction: column;
    @media (max-width: 800px){
      width: 100%;
    }
`
export const TitleAndFilter = styled(Flex)`
    flex-direction: row;
    @media (max-width: 800px){
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
`

export const Heading1 = styled.h1`
        font-size: 1.5rem;
        text-align: center;
        line-height: 1;
        font-family: BerlinXBold;
        letter-spacing: 0.35px;
        margin: 15px 0;
        padding: 0px;
        border: 0px;
        vertical-align: baseline;
        padding-bottom: 2px;
        color: black;
        text-transform: uppercase;
        opacity: 1;     
`

export const Footer = styled.footer`
        display: flex;
        // position: absolute;
        bottom: 0;
        width: 100%;
        height: 130px;
        background: ${props => props.isDark ? '#1D1D1D' : 'white'};
        z-index: 999999;
        align-items: center;
        justify-content: space-around; 
        // @media (max-width: 800px) {
        //       }
`

export const PageHeading = styled.h1`
        font-family: Noto;
        font-size: ${props => props.width || '2.3rem'};
        text-align: center;
        color: ${props => props.isDark ? 'white' : 'black'}
`

export const Image = styled.img`
        width: 100%;
        max-width: 720px;
        height: auto;
        border-radius: 6px;
`
export const LoginInput = styled(Field)`
        width: ${props => props.width || '70%'};
        height: 50px;
        background: transparent;
        border: ${props => props.border || '5px solid white'};
        margin: 3%;
        // font-family: CODE;
        color: black;
        &::placeholder {
                font-family: CODE;
                color: black;
        }
`
export const AuthFormBox = styled.form`
        background: rgba(255, 255, 255, 0.6);
        margin-top: 5%;
        max-width: 600px;
        text-align: center;
        padding: 5%;
        border: 0.1px solid rgba(0,0,0,0.4);
        border-radius: 2%;
        z-index: 8888;
        @media (max-width: 800px) {
                margin-top: unset;
                padding: 5%;
              }
`
export const ContainerFlex = styled(Flex)`
  width: 70%;
  margin: 20px 0 0 0;
@media (max-width: 800px) {
  width: 100%;
}
`

export const ContainerFlexHide = styled(Flex)`
width: ${props => props.width};
@media (max-width: 800px) {
  display: none;
}
`

export const Column = styled.div`
    width: ${props => {
                if (props.three) return '33.33%';
                if (props.four) return '25%';
                return '50%';
        }};
    padding: ${props => (props.noPadding ? 0 : '15px')}};
`;
