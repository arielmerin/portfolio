import React from 'react';
import styled from 'styled-components';

const SocialMediaContainer = styled.div`
	display: flex;
	width: 60vw;
	justify-content: space-between;
	margin: 0 auto 1rem ;
	background-color: inherit;
`

const SocialMedia = () =>{
	return <SocialMediaContainer>
		<a href="https://www.instagram.com/arieeel.merino/" rel="noreferrer" target="_blank">
			<img src="./socialmedia/instagram.svg" alt=""/>
		</a>
		<a href="https://www.facebook.com/ar.iellette/" rel="noreferrer" target="_blank">
			<img src="./socialmedia/facebook.svg" alt=""/>
		</a>
		<a href="https://twitter.com/arielmerinos" rel="noreferrer" target="_blank">
			<img src="./socialmedia/twitter.svg" alt=""/>
		</a>
		<a href="https://github.com/arielmerin" target="_blank" rel="noreferrer" >
			<img src="./socialmedia/github.svg" alt=""/>
		</a>
		<a href="https://www.linkedin.com/in/arielmerino/" target="_blank" rel="noreferrer" >
			<img src="./socialmedia/linked.svg" alt=""/>
		</a>
	</SocialMediaContainer>
}

export default SocialMedia;