import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ContactList() {
    // a random array of contacts
    const contactList = [
        {
            name: "John",
            status: "Online",
            imageUrl:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },

        {
            name: "Jane",

            status: "Offline",
            imageUrl:
                "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Joe",

            status: "Busy",
            imageUrl:
                "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contactList.map((contact) => (
                    <View key={contact.name} style={styles.userCard}>
                        <Image
                            source={{ uri: contact.imageUrl }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{contact.name}</Text>
                            <Text style={styles.userStatus}>
                                {contact.status}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    container: {
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    userCard: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 8,
        backgroundColor: "#8DF5AF",
        padding: 8,
        borderRadius: 12,
        elevation: 2,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "#333",
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    userImage: {
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: 25,
        objectFit: "cover",
    },
    userName: {
        fontSize: 15,
        fontWeight: "500",
    },
    userStatus: {
        fontSize: 15,
        fontWeight: "500",
    },
});
