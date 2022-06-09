import {useContext, useState} from 'react';
import {Alert} from 'react-native';
import { AuthContext } from '../../../../../contexts/authContext';

const SignInCardHooks = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signIn} = useContext(AuthContext);

    const handleSignIn = () => {
        signIn(email,password);
    }
    
    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn
    }
};

export default SignInCardHooks;
