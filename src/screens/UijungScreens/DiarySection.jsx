import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const DiarySection = ({
    locations,
    setLocations,
    people,
    setPeople,
    purchasedItems,
    setPurchasedItems,
    expenses,
    setExpenses,
    news,
    setNews,
    plans,
    setPlans,
    importantTasks,
    handleTimeChange,
  }) => {
    return (
        <View style={styles.mainSection}>
            <View style={styles.row}>
                <Text style={styles.cellTitle}>방문한 장소</Text>
                <TextInput
                    style={[styles.cellContent, styles.inputSpacing]}
                    value={locations}
                    onChangeText={setLocations}
                />
                <Text style={styles.cellTitle}>오늘 만난 사람</Text>
                <TextInput
                    style={styles.cellContent}
                    value={people}
                    onChangeText={setPeople}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.cellTitle}>구입한 물건</Text>
                <TextInput
                    style={[styles.cellContent, styles.inputSpacing]}
                    value={purchasedItems}
                    onChangeText={setPurchasedItems}
                />
                <Text style={styles.cellTitle}>지출 금액</Text>
                <TextInput
                    style={styles.cellContent}
                    value={expenses}
                    onChangeText={setExpenses}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.cellTitle}>오늘의 뉴스</Text>
                <TextInput
                    style={styles.cellContent}
                    value={news}
                    onChangeText={setNews}
                />
            </View>
            <View style={styles.timeSection}>
                <View style={styles.timeRow}>
                    <Text style={styles.timeText}>시간</Text>
                    <Text style={styles.timeText}>중요한 일</Text>
                </View>
                {["오전 5시 - 8시", "오전 8시 - 12시", "오후 12시 - 5시", "오후 5시 - 10시"].map((time, index) => (
                    <View key={index} style={styles.timeRow}>
                        <Text style={styles.timeText}>{time}</Text>
                        <TextInput
                            style={styles.cellContent}
                            value={importantTasks[index]} // props로 전달된 값 사용
                            onChangeText={(text) => handleTimeChange(index, text)} // props로 전달된 함수 사용
                        />
                    </View>
                ))}

            </View>
            <View style={styles.row}>
                <Text style={styles.cellTitle}>내일 계획</Text>
                <TextInput
                    style={styles.cellContent}
                    value={plans}
                    onChangeText={setPlans}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainSection: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 11,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    cellTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#444',
        flex: 2,
        marginRight: 1,
    },
    cellContent: {
        fontSize: 14,
        color: '#666',
        flex: 2,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        marginLeft: 10,
        paddingVertical: 6,
        textAlign: 'center',
    },
    timeSection: {
        marginTop: 25,
        borderTopWidth: 1,
        borderColor: '#ddd',
        paddingTop: 14,
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 7,
    },
    timeText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#555',
        flex: 1,
        marginRight: 15,
    },
    inputSpacing: {
        marginRight: 15,
    }
});

export default DiarySection;
