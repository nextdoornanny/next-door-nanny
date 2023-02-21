
import { useUserAuth } from "../contexts/UserAuthContext";
import React, { useState } from 'react';
import styled from '@emotion/styled'
import { Navigation, Header, NavMenuItem, MobileNavMenuItem, MobileNavigation } from '../components/StyledComponents';
import { Link } from "react-router-dom";
import { NavDropdown, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";


const ResponsiveLogoHolder = styled.div`
            cursor: pointer;
            font-size: 1.5rem;
            position: absolute;
            left: 0; 
            color: ${props => props.isDark ? 'white' : 'black'};
            text-decoration: none !important;
            @media (max-width: 1200px) {
                left: 0;
            }
        `

const BurgerButton = styled.button`
            display: none;
            & > span > span {
                background-color: ${props => props.isDark ? 'white !important' : 'black !important'};
            }
                &:before{
                    background-color: ${props => props.isDark ? 'white !important' : 'black !important'};
                }
                &:after{
                    background-color: ${props => props.isDark ? 'white !important' : 'black !important'};
                }
        `
const BrandName = styled.a`
            font-size: 2rem;
            font-family: NotoSemiBold !important;
            text-decoration: none;
            color: black;
        `
const NavLink = styled(NavDropdown)`
        color: black !important;
        & > a {
            font-family: NotoSemiBold !important;
            color: black !important;
        }
        `

export const NavBar = () => {
    const [showForParents, setShowForParents] = useState(false);
    const [openBurger, setOpenBurger] = useState(false);
    const [showForNannies, setShowForNannies] = useState(false);
    const [howItWorks, setHowItWorks] = useState(false);
    const { logOut, user } = useUserAuth();
    console.log(user, "user")
    return (
        <div style={{ position: 'relative', backgroundColor: "white", zIndex: "9999" }}>
            <Header>
                <ResponsiveLogoHolder>
                    <BrandName href='/'>Next Door Nannies</BrandName>
                </ResponsiveLogoHolder>
                {openBurger && <MobileNavigation openBurger={openBurger}>
                    <>
                        <MobileNavMenuItem>
                            <NavLink show={showForParents}
                                onMouseEnter={() => setShowForParents(!showForParents)}
                                onMouseLeave={() => setShowForParents(false)}
                                className='strike'
                                title="For Parents"
                                style={{ color: "black" }}
                                id="collasible-nav-dropdown">
                                <NavMenuItem href="/nanny-types/nanny-housekeeper">Nanny housekeeper</NavMenuItem>
                                <NavMenuItem href="/nanny-types/live-in-live-out-nanny">Live in/live out Nanny</NavMenuItem>
                                <NavMenuItem href="/nanny-types/au-pair">Au pair</NavMenuItem>
                                <NavMenuItem href="/nanny-types/maternity-nanny">Maternity Nanny</NavMenuItem>
                                <NavMenuItem href="/nanny-types/overseas-nanny">Overseas Nanny</NavMenuItem>
                                <NavMenuItem href="#">Governess</NavMenuItem>
                                <NavMenuItem href="/nanny-types/rota-nanny">Rota Nanny</NavMenuItem>
                                <NavMenuItem style={{ marginLeft: "5px" }} href="/client-registration">Register as a parent</NavMenuItem>
                            </NavLink>
                        </MobileNavMenuItem>
                        <MobileNavMenuItem>
                            <NavLink
                                show={showForNannies}
                                onMouseEnter={() => setShowForNannies(!showForNannies)}
                                onMouseLeave={() => setShowForNannies(false)}
                                title="For Nannies">
                                <NavMenuItem href="#">Job Listings</NavMenuItem>
                                <NavMenuItem href="#">Nanny registration</NavMenuItem>
                                <NavMenuItem href="/payroll-hr">Payroll & HMRC</NavMenuItem>
                            </NavLink>
                        </MobileNavMenuItem>
                        <MobileNavMenuItem className='strike'>
                            <NavLink
                                show={howItWorks}
                                onMouseEnter={() => setHowItWorks(!howItWorks)}
                                onMouseLeave={() => setHowItWorks(false)}
                                title="How it works"
                                style={{ color: "black" }}
                                id="collasible-nav-dropdown"
                            >
                                <NavMenuItem href="#">Process</NavMenuItem>
                                <NavMenuItem href="/nanny-registration">Register as a nanny</NavMenuItem>
                                <NavMenuItem href="/payroll-hr">Payroll & HMRC</NavMenuItem>
                                <NavMenuItem href="#">Our services</NavMenuItem>
                            </NavLink>
                        </MobileNavMenuItem>
                        <MobileNavMenuItem className='strike' ><Link to='/sale'>Resources</Link></MobileNavMenuItem>
                        <MobileNavMenuItem className='strike'><Link to='/souvenirs'>About</Link></MobileNavMenuItem>
                    </>
                </MobileNavigation>}
                <Navigation id='content-desktop-nav'>
                    <Nav style={{ display: "flex", alignItems: "center" }} className="mr-auto">
                        <NavLink
                            show={showForParents}
                            onMouseEnter={() => setShowForParents(!showForParents)}
                            onMouseLeave={() => setShowForParents(false)}
                            title="For Parents"
                            style={{ color: "black" }}
                            id="collasible-nav-dropdown"
                        >
                            <NavMenuItem href="/nanny-types/nanny-housekeeper">Nanny housekeeper</NavMenuItem>
                            <NavMenuItem href="/nanny-types/live-in-live-out-nanny">Live in/live out Nanny</NavMenuItem>
                            <NavMenuItem href="/nanny-types/au-pair">Au pair</NavMenuItem>
                            <NavMenuItem href="/nanny-types/maternity-nanny">Maternity Nanny</NavMenuItem>
                            <NavMenuItem href="/nanny-types/overseas-nanny">Overseas Nanny</NavMenuItem>
                            <NavMenuItem href="#">Governess</NavMenuItem>
                            <NavMenuItem href="/nanny-types/rota-nanny">Rota Nanny</NavMenuItem>
                            <NavMenuItem style={{ marginLeft: "5px" }} href="/client-registration">Register as a parent</NavMenuItem>
                        </NavLink>
                        <NavLink
                            show={showForNannies}
                            onMouseEnter={() => setShowForNannies(!showForNannies)}
                            onMouseLeave={() => setShowForNannies(false)}
                            title="For Nannies">
                            <NavMenuItem href="#">Job Listings</NavMenuItem>
                            <NavMenuItem href="/nanny-registration">Register as a nanny</NavMenuItem>
                            <NavMenuItem href="/payroll-hr">Payroll & HMRC</NavMenuItem>
                        </NavLink>
                        <NavLink
                            show={howItWorks}
                            onMouseEnter={() => setHowItWorks(!howItWorks)}
                            onMouseLeave={() => setHowItWorks(false)}
                            title="How it works"
                            style={{ color: "black" }}
                            id="collasible-nav-dropdown"
                        >
                            <NavMenuItem href="#">Process</NavMenuItem>
                            <NavMenuItem href="/nanny-registration">Register as a nanny</NavMenuItem>
                            <NavMenuItem href="/payroll-hr">Payroll & HMRC</NavMenuItem>
                            <NavMenuItem href="#">Our services</NavMenuItem>
                        </NavLink>
                        {!user ? <NavMenuItem href="/auth"><Button variant="primary">Log in/Sign up</Button></NavMenuItem> : <NavMenuItem onClick={logOut}><Button variant="primary">Log out</Button></NavMenuItem>}
                    </Nav>
                </Navigation>
                <BurgerButton onClick={() => setOpenBurger(!openBurger)} id='content-mobile-nav' className={`hamburger hamburger--slider ${openBurger && 'is-active'}`} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </BurgerButton>
            </Header>
        </div>
    )
}

export default NavBar;