import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { Text } from 'react-native';
import React, { useState, useEffect } from 'react';

// Placeholder function for screen time tracking
const trackScreenTime = () => {
  // Integrate iOS Screen Time or Android Digital Wellbeing APIs here
  return Math.floor(Math.random() * 180); // Simulated screen time in minutes
};

export default function App() {
  const [screenTime, setScreenTime] = useState(0);
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const time = trackScreenTime();
    setScreenTime(time);
    calculatePoints(time);
  }, []);

  const calculatePoints = (time) => {
    const threshold = 120; // Example threshold in minutes
    if (time < threshold) {
      setPoints(points + (threshold - time));
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const handleCheckIn = () => {
    // Logic for daily check-in and claiming rewards
    alert('Daily check-in complete! Points claimed.');
  };

  return (
    <Card containerStyle={styles.card}>
      <Card.Title>Daily Summary</Card.Title>
      <Card.Divider/>
      <Text style={styles.text}>Today's Screen Time: {screenTime} minutes</Text>
      <Text style={styles.text}>Points Earned: {points}</Text>
      <Text style={styles.text}>Current Streak: {streak} days</Text>
      <Button title="Daily Check-In" onPress={handleCheckIn} buttonStyle={styles.button} />
      <StatusBar style="auto" />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2089dc',
    borderRadius: 5,
  },
});
