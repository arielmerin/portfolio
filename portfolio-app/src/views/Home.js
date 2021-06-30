import React from 'react'
import styled from 'styled-components'
import Header from "../components/Header";
import SocialMedia from "../components/SocialMedia";


const HomeContainer = styled.div`
		width: 100vw;
		min-height: 100vh;
		height: 100%;
		background-color: #19456B;
		& p{
		color: white;
		text-align: center;
		width: 80vw;
		margin: 1em auto;
		}
		& p span{
			font-weight: bold;
		}
	`

const NameContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 2em auto;
`
const HeroContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 1em auto;
`
const Home = () =>{
	return <HomeContainer>
		<Header/>
		<NameContainer>
			<img src="./nombre.svg" alt=""/>
		</NameContainer>
		<HeroContainer>
			<img src="./ariel.png" alt=""/>
		</HeroContainer>
		<p>Computer science student & frontend developer, on my way to <span>fullstack</span></p>
		<SocialMedia/>
	</HomeContainer>
}


export default Home;