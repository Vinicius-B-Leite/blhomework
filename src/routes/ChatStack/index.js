import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react'; import Chat from '../../screens/Chat';
import ChatRoom from '../../screens/ChatRoom';


const Stack = createStackNavigator()

export default function ChatStackRotutes(route) {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            detachPreviousScreen: false,
            cardStyle: { backgroundColor: 'transparent' },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
            <Stack.Screen name='Chat' component={Chat} />
            <Stack.Screen name='Chatroom' component={ChatRoom} />
        </Stack.Navigator>
    );
}