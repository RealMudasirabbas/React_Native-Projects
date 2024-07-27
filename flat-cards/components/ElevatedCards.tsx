import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'


export default function ElevatedCards() {
  return (
    <View>
    <Text style={styles.headingText}>Elevated Cards</Text>
    <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>😊</Text>
        </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10,
    
    },
    container: {
        padding: 5,
    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 5,
    },
    elevatedCard: {
        backgroundColor: "#CAD5A4",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "#333",
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
})