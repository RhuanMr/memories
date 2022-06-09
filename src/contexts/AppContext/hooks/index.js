import React, {useState} from 'react';
import database from '../../../services/firebaseConnection';
import { set, ref, getDatabase, child, get } from 'firebase/database';
import AsyncStorage from '@react-native-community/async-storage';

const appContextHooks = () => {
    const [memoriesList, setMemoriesList] = useState([]);
    const db = database;
    const dbRef = ref(getDatabase());
    const userDB =  await JSON.parse(AsyncStorage.getItem('Auth_user'));

    async function readMemories() {
        await get(child(dbRef, `/users/${userDB}/memories`)).then((snapshot) => {
            if(snapshot.exists()) {
                // setMemoriesList({
                //     uid: userDB.uid,
                //     name: snapshot.val().name,
                //     email: snapshot.val().email,
                //     nick: snapshot.val().nick, 
                // })
                console.log({ snapshot: snapshot })
            }
        }).catch((error) => {
            console.error(error)
        });
    }

    return { memoriesList, readMemories }

};

export default appContextHooks;