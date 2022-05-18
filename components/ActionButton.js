import React from 'react';
import { Center, Pressable, Actionsheet, useDisclose } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionScreen from '../screens/ActionScreen';

export default (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, site } = props;

  return (
    <>
      <Pressable onPress={onOpen}>
        <Center bg="#fffbf7" borderRadius={50} p={3 * zoomRatio} borderWidth={2 * zoomRatio} borderColor="#e87e0c">
          <Ionicons name={"bicycle-outline"} size={30 * zoomRatio} color="#e87e0c" />
        </Center>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionScreen onClose={onClose} site={site} />
      </Actionsheet>
    </>
  );
}
