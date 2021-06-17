import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const ButtonLinkComponent = styled.button`
	height: 45px;
	width: 190px;
	left: 772px;
	top: 27px;
	border: none;
	border-radius: 20px;
	
	color: white;
	font-size: 1em;
	background-color: transparent;
	
	&:hover{
		cursor: pointer;
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;		background-color: #1f5787;
	}
	`

const ButtonLink = ({displayText, linkTo}) => {
	return <Link to={linkTo} replace>
		<ButtonLinkComponent>
			{displayText}
		</ButtonLinkComponent>
	</Link>

}

export default ButtonLink