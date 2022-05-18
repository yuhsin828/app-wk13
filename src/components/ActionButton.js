import React from 'react';
import { Center, Pressable, Actionsheet, useDisclose } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionScreen from '../screens/ActionScreen';
import { Marker } from 'react-native-maps';


export default (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, site } = props;

  return (
    <>
      <Marker
        coordinate={{
          latitude: Number(site.lat),
          longitude: Number(site.lng),
        }}
        key={site.sno}
        title={`${site.sna} ${site.sbi}/${site.bemp}`}
        description={site.ar}
        onPress={onOpen}
      >
        <Center bg="#fcf4eb" borderRadius={50} p={3 * zoomRatio} borderWidth={zoomRatio} borderColor="#e87e0c">
          <Ionicons name={"bicycle-outline"} size={30 * zoomRatio} color="#e87e0c" />
        </Center>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <ActionScreen onClose={onClose} site={site} />
        </Actionsheet>
      </Marker>

      {/* <Pressable onPress={onOpen}> */}

      {/* </Pressable> */}

    </>
  );
}
