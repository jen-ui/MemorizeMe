import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

type TabIconProps = {
  icon: ImageSourcePropType | undefined;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({icon,color,name,focused}:TabIconProps) => {
    return (
      <View className="flex-1 items-center justify-center">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          style={{ width: 40, height: 30 }}
            />  
        {/* <Text className={`${focused?'font-pbold': 'font-psemibold'}`}>{name}</Text> */}
      </View>
    );
}

const TabLayout = () => {
    return (
      <>
        <Tabs
        
          screenOptions={{
            tabBarActiveTintColor: "#FFA001",
            tabBarInactiveTintColor: "#CDCDE0",
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "white",
              borderTopWidth: 1,
              borderTopColor: "black",
                height: 84,
              
            },
          }}
          
        >
          <Tabs.Screen
            name="home"
            options={{
                
              title: "Home",
                headerShown: false,
              
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.deck}
                  color={color}
                  name="Home"
                  focused={focused}
                  />
            
              ),
            }}
          />

          <Tabs.Screen
            name="stats"
            options={{
              title: "Stats",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.stats}
                  color={color}
                  name="Stats"
                  focused={focused}
                />
              ),
            }}
          />
        </Tabs>
      </>
    );
}

export default TabLayout

const styles = StyleSheet.create({})