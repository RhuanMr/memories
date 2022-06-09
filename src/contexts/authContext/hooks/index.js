import React, {useState} from 'react';
import database from '../../../services/firebaseConnection';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { set, ref, getDatabase, child, get } from 'firebase/database';
import AsyncStorage from '@react-native-community/async-storage';

const authContextHooks = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const db = database;
    const signUp = async (email, password, name, nick) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then( async (userCredential) => {
            let uid = userCredential.user.uid;
            await set(ref(db, 'users/' + uid), {
                uid: uid,
                name: name,
                email: email,
                nick: nick,
            })
            setUser({
                uid: uid,
                name: name,
                email: email,
                nick: nick,
            })
            storageUser(user)
        }).catch((error) => {
            alert(error.code);
        })

    }

    const signIn = async (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then( async (userCredential) => {
            const userDB = userCredential.user
            const dbRef = ref(getDatabase());
            get(child(dbRef, `/users/${userDB.uid}`))
            .then((snapshot) => {
                if(snapshot.exists()) {
                    setUser({
                        uid: userDB.uid,
                        name: snapshot.val().name,
                        email: snapshot.val().email,
                        nick: snapshot.val().nick, 
                    })
                    storageUser(user)
                }
            })    
        }).catch((error) => {
            console.error(error)
        });
    }

    const storageUser = async (data) => {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    } 

    return { user, setUser, signUp, signIn };
};

export default authContextHooks;
