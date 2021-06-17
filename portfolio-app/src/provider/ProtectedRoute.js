import React from 'react';
import {useAuth} from "./AuthProvider";
import {Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({children, ...props}) =>{
	const auth = useAuth()
	console.log(auth)
	return(
		<Route {...props}
		       render={({location}) => auth.userAuth ? (children) :
			       (<Redirect to={{pathname: '/', state: { from: location} }} />) }
		/>	)
}

export default ProtectedRoute;