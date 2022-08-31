import React, {useRef, useState} from 'react';
import {
  Animated,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import useInterval from './useInterval';

type Props = {
  images: string[];
};

const Carousel: React.FC<Props> = ({images}) => {
  const animation = useRef(new Animated.Value(0));

  const [currentImage, setCurrentImage] = useState(0);

  useInterval(() => handleAnimation(), 5000);

  const handleAnimation = () => {
    let newCurrentImage = currentImage + 1;
    if (newCurrentImage >= images.length) {
      newCurrentImage = 0;
    }
    Animated.spring(animation.current, {
      toValue: -(Dimensions.get('screen').width * newCurrentImage),
      useNativeDriver: true,
    }).start();
    setCurrentImage(newCurrentImage);
  };

  return (
    <React.Fragment>
      <View>
        <Animated.View
          style={[
            styles.container,
            {transform: [{translateX: animation.current}]},
          ]}>
          {images.map((image) => (
            <Image
              source={{
                uri: image,
              }}
              style={styles.image}
            />
          ))}
        </Animated.View>
        <View style={styles.indicatorContainer}>
          {images.map((_, index) => (
            <View
              style={[
                styles.indicator,
                currentImage === index ? styles.activeIndicator : undefined,
              ]}
            />
          ))}
        </View>
      </View>
      <Button onPress={handleAnimation} title="Test" />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'cover',
    height: 500,
    width: Dimensions.get('screen').width,
  },
  indicator: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  activeIndicator: {
    backgroundColor: 'white',
  },
  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    bottom: 10,
    zIndex: 2,
  },
});

export default Carousel;