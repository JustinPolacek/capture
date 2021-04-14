import React from 'react'
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import {About, Description, Image, Hide} from '../styles'
import styled from 'styled-components';

const ServicesSection = () => {
    return (
             <Services>
            <Description>
                <h2>High <span>Quality</span> Sercies</h2>
                  <Cards>
                    <div className="card">
                        <div className="icon">
                            <img src={clock}  alt="clock" />
                            <h3>efficient</h3>
                        </div>
                        <p>lorem ipsum sklvnoiefnvl lKDN</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork}  alt="teamwork" />
                            <h3>teamwork</h3>
                        </div>
                        <p>lorem ipsum sklvnoiefnvl lKDN</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm}  alt="diaphragm" />
                            <h3>efficient</h3>
                        </div>
                        <p>lorem ipsum sklvnoiefnvl lKDN</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money}  alt="money" />
                            <h3>affordable</h3>
                        </div>
                        <p>lorem ipsum sklvnoiefnvl lKDN</p>
                    </div>
                    </Cards>
                </Description>
                 <Image>
                    <img src={home2} alt="hometwo" />
                    </Image>
               
            </Services>
            
    )
}

const Services = styled(About)`
h2{
    padding-bottom: 5rem;
}

p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;

const Cards = styled.div`
display: flex;
flex-wrap: wrap;

`

const Card = styled.div `

flex-basis: 20rem;

.icon{
    display: flex;
    align-items: center;
}
h3{
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
}

`;




export default ServicesSection;
