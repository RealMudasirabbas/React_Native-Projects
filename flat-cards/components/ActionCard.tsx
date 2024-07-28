import { StyleSheet, Text, View,Linking, Image,TouchableOpacity } from "react-native";
import React from "react";

export default function ActionCard() {

    function openWebsite(websiteUrl: string) {
        Linking.openURL(websiteUrl);
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Learning React Native
                    </Text>
                </View>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    }}
                />

                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quaerat aperiam maiores, soluta sequi ea
                        temporibus officiis id ut fugit a? Placeat, quisquam
                        iure odit tenetur esse corporis nostrum deleniti omnis.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite("https://chaicode.com")}
                    >
                        <Text style={styles.buttonText}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            openWebsite("https://github.com/RealMudasirAbbas")
                        }
                    >
                        <Text style={styles.buttonText}>Follow me on Github</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10,
    },

    card: {
        width: 360,
        height: 350,
        borderRadius: 8,
        marginHorizontal: 15,
        marginVertical: 15,
    },
    elevatedCard: {
        backgroundColor: "#E07C24",
        elevation: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "#333",
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    headingContainer: {
        flexDirection: "row",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "500",
    },
    cardImage: {
        height: 180,
    },
    bodyContainer: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 6,
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10,
    },
    cardFooter: {
        color: "#000000",
        fontSize: 14,
        fontWeight: "500",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "500",
        backgroundColor: "#0A3D62",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
    },
});
