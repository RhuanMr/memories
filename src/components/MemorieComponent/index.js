import React from "react";
import PageComponent from "../utils/Page";
import CardMemorie from "./components/CardMemorie";
import MemoriesHeader from "./components/MemoriesHeader";
import MemoriesComponentHooks from "./hooks";
import styles from "./styles";

const MemoriesComponent = ({ route, navigation }) => {
    const {title, date}  = route.params;

    const {
        handlePress,
    } = MemoriesComponentHooks(navigation);

    return (
        <PageComponent backButton={true} onPress={handlePress}>
            <MemoriesHeader />
            <CardMemorie title={title} date={date} />
        </PageComponent>
    );
}

export default MemoriesComponent;