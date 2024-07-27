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
                <View>
                    <Text style={styles.cardTitle}>Fairy Meadows</Text>
                    <Text style={styles.cardLabel}>Sakardu</Text>
                    <Text style={styles.cardDescription}>
                        Fairy Meadows is a stunning alpine meadow located in the
                        Gilgit-Baltistan region of Pakistan, at the base of
                        Nanga Parbat, the world's ninth highest mountain. Known
                        for its breathtaking views and lush greenery, it serves
                        as a popular trekking destination for adventure
                        enthusiasts and nature lovers. The area offers serene
                        landscapes, dense forests, and the majestic sight of the
                        Nanga Parbat peak. Accessing Fairy Meadows involves a
                        challenging journey, including a jeep ride and a trek,
                        adding to the allure of this remote and picturesque
                        destination.
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

    card: {},
    elevatedCard: {},
    cardImage: {
        height: 180,
    },

    cardTitle: {},
    cardLabel: {},
    cardDescription: {},
    cardFooter: {},
});
