import React from 'react';
import {
   Box, VStack,
   Center,
   Text, Pressable,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { VictoryPie } from 'victory-native';

const ActionScreen = ({ onClose, site }) => {
   const {
      sna,
      snaen,
      sbi,
      sarea,
      sareaen,
      mday,
      lat,
      lng,
      ar,
      aren,
      bemp,
   } = site;

   const getTime = (m) => {
      const mday = String(m);
      const year = mday.slice(0, 4);
      const month = Number(mday.slice(5, 7));
      const date = Number(mday.slice(8, 10));
      const hour = Number(mday.slice(11, 13));
      const min = Number(mday.slice(14, 16));
      const sec = Number(mday.slice(17));
      const time = `${year}/${month}/${date} ${hour}:${min}:${sec}`;
      return time;
   }
   return (

      <VStack h="50%" w="100%" bg="blueGray.50" borderRadius={20} >
         <Pressable onPress={onClose} position="absolute" top={2} right={3}>
            <Ionicons name="close-outline" color="gray" size={30} />
         </Pressable>
         <Box borderBottomColor={"white"} w={"15%"} h={1} borderRadius={3} bg="grey" mt={3} alignSelf="center"></Box>
         <Text fontSize="lg" my={6} textAlign="center">{sna.slice(11)}</Text>
         <Box px={6} >
            <Center>
               <Text>{sarea}{ar}</Text>
               <VictoryPie
                  width={250}
                  height={250}
                  colorScale={["#ffc412", "#edddad"]}
                  data={[
                     { x: 1, y: Number(sbi), label: `可借(${sbi})` },
                     { x: 2, y: Number(bemp), label: `可還(${bemp})` },
                  ]}
                  style={{
                     labels: {
                        fontSize: 12, fill: "black",
                        padding: 8,
                     }
                  }}
                  padAngle={({ datum }) => datum.y * 0.2}
                  innerRadius={10}
               />
            </Center>
            <Text fontSize="xs" color="gray" position="absolute" bottom={2} right={6}>{getTime(mday)}</Text>
         </Box>
      </VStack>
   );
};

export default ActionScreen;
