import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';
import IncomeScreen from '../screens/IncomeScreen';
import ExpensesScreen from '../screens/ExpensesScreen';
import IncomeSourceScreen from '../screens/IncomeSourceScreen';
import ExpenseSourceScreen from '../screens/ExpenseSourceScreen';
import RecentActivity from '../screens/RecentActivity';
import AddIncome from '../screens/AddIncome';
import TasksScreen from '../screens/TasksScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const Appstack = () => {
  return (
    <Stack.Navigator
      initialRouteName="startscreen"
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='startscreen' component={StartScreen} />
        <Stack.Screen name='homescreen' component={HomeScreen} />
        <Stack.Screen name='balance' component={IncomeScreen} />
        <Stack.Screen name='expenses' component={ExpensesScreen} />
        <Stack.Screen name='incomesource' component={IncomeSourceScreen} />
        <Stack.Screen name='expensessource' component={ExpenseSourceScreen} />
        <Stack.Screen name='recentactivity' component={RecentActivity} />
        <Stack.Screen name='addincome' component={AddIncome} />
        <Stack.Screen name='tasks' component={TasksScreen} />
        <Stack.Screen name='profile' component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default Appstack;