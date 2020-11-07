import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from '../components/lists';

const initialMessages = [
  {
    id: 1,
    title: 'Jus Tin',
    description: 'Hey, is this item still for sale?',
    image: require('../assets/jus.jpg'),
  },
  {
    id: 2,
    title: 'Jus Tin',
    description:
      'I am interested in this item. When will you be able to post it?',
    image: require('../assets/jus.jpg'),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'Jus Tin',
              description:
                'I am interested in this item. When will you be able to post it?',
              image: require('../assets/jus.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
