import React from "react";
import { View, ImageBackground, Text} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PageComponent from "../utils/Page";
import CardFeed from "./components/CardFeed";
import FeedHeader from "./components/FeedHeader";
import FeedComponentHooks from "./hooks";
import styles from "./styles";

const Feed = ({children, navigation}) => {

    const {
        handlePress,
    } = FeedComponentHooks(navigation);

    const Data = [
        {
            id: '1',
            date: '24/02/2022',
            title: 'A day to remember',
        },
        {
            id: '2',
            date: '24/02/2022',
            title: 'A day to remember',
        },
        {
            id: '3',
            date: '24/02/2022',
            title: 'A day to remember',
        },
        {
            id: '4',
            date: '24/02/2022',
            title: 'A day to remember',
        },
        {
            id: '5',
            date: '24/02/2022',
            title: 'A day to remember',
        }
    ]

    return (
        <PageComponent>
            <FeedHeader />
            <FlatList 
                data={Data}
                renderItem={({item}) => (<CardFeed date={item.date} title={item.title} onPress={() => handlePress("Memorie", item)} />)}
                keyExtractor={item => item.id}
                style={styles.container}
            />
        </PageComponent>
    );
}

export default Feed;