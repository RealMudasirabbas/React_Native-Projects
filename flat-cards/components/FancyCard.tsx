import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <Image
                    source={{
                        uri: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/12/08174130/skardu-1.jpeg?tr=w-1280,f-jpg,pr-true",
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Fairy Meadows</Text>
                    <Text style={styles.cardLabel}>Sakardu</Text>
                    <Text style={styles.cardDescription}>
                        Fairy Meadows is a stunning alpine meadow located in the
                        Gilgit-Baltistan region of Pakistan, at the base of
                        Nanga Parbat, the world's ninth highest mountain. Known
                        for its breathtaking views and lush greenery.
                    </Text>
                    <Text style={styles.cardFooter}>16 to 20 hours away</Text>
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
        width: 350,
        height: 350,
        borderRadius: 8,
        marginHorizontal: 15,
        marginVertical: 15,
    },
    elevatedCard: {
        backgroundColor: "#FFFFFF",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    cardImage: {
        height: 180,
        marginBottom: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 6,
    },

    cardTitle: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 20,
        marginHorizontal: 10,
    },
    cardLabel: {
        marginHorizontal: 10,
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#000000",
    },
    cardDescription: {
        marginTop: 2,
        marginHorizontal: 10,
        fontSize: 14,
        color: "#000000",
    },
    cardFooter: {
        marginHorizontal: 10,
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#000000",
    },
});
