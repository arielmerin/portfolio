import React, {createContext, useContext, useState} from 'react';
const authContext = createContext();

const useAuthProvider = () => {
	const [userAuth, setUserAuth] = useState('') ;
	const signIn = (trainer) => {
		setUserAuth(trainer)
	}
	const signOut = ()=> setUserAuth('')
	return{
		userAuth,
		signIn,
		signOut
	}
}

export const ProvideAuth = ({children}) =>{
	const auth = useAuthProvider()
	return <authContext.Provider value={auth}>
		{children}
	</authContext.Provider>
}

export const useAuth = () => useContext(authContext)