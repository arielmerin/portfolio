import styled from 'styled-components'
import {Link} from 'react-router-dom'
import ButtonLink from "./ButtonLink";
import breakpoint from "../breakpoints";


/**
 * This sections is the first in-appear in the page,
 * @mobile: Allows the A merino logo
 * @desktop lodges the buttons and the logo
 */
const HeaderComponent = styled.header`
	width: 100vw;
	background-color: #19456B;
	display: none;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
`

const ButtonsContainer = styled.div`
	display: none;
	@media only screen and ${breakpoint.device.lg}{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}
	`

const LogoContainer = styled.picture`
margin: 10px;
`

const Header = () =>{
	return <HeaderComponent>
	<LogoContainer>
		<Link to="/" replace>
			<img src="./logo.svg" alt="logo-ariel-merino"/>
		</Link>
	</LogoContainer>
	<ButtonsContainer>
		<ButtonLink displayText="Acerca de mí" linkTo="/about" />
		<ButtonLink displayText="Terapia" linkTo="/therapy" />
		<ButtonLink displayText="Proyectos" linkTo="/projects" replace/>
		<ButtonLink displayText="Contacto" linkTo="/contact" replace/>
	</ButtonsContainer>


	</HeaderComponent>
}

export default Header