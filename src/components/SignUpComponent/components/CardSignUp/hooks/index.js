import {useContext, useState} from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../../../../../contexts/authContext'

const SignUpFormHook = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [name, setName] = useState('');
    const [nick, setNick] = useState('');

    const { signUp } = useContext(AuthContext);

    const handleSignUp = () => {
        if (password === confirmedPassword){
            setPassword(password);
            signUp(email,password,name,nick);
        } else {
            Alert.alert("The passwords doesn`t match");
        }
    }

    return { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        confirmedPassword, 
        setConfirmedPassword,
        name,
        setName, 
        nick, 
        setNick,
        handleSignUp
    };

}

export default SignUpFormHook;