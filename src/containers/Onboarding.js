import React, { Component } from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  Colors,
  metrics,
  carouselData
} from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

const { width, height } = Dimensions.get('window');

class Landing extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  }

  state = {
    activeDotIndex: 0,
  }

  onSnapToItem = (index) => {
    this.setState({ activeDotIndex: index });
  }

  goMainPage = () => {
    const { navigation } = this.props;
    navigation.navigate('home');
  }

  renderItem = (item) => {
    const { image, comment } = item.item;
    return (
      <ImageBackground source={image} style={styles.imageContainer}>
        <Image source={comment} style={styles.commentImage} />
        <TouchableOpacity style={styles.skipButton} onPress={this.goMainPage}>
          <Text>test</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }

  renderPagination = () => {
    const { activeDotIndex } = this.state;
    const dotStyle = {
      height: dynamicSize(8),
      width: dynamicSize(8),
      borderRadius: dynamicSize(1)
    };
    const inactiveDotStyle = {
      height: dynamicSize(15),
      width: dynamicSize(15),
      borderRadius: dynamicSize(1)
    };
    return (
      <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeDotIndex}
        dotStyle={dotStyle}
        inactiveDotStyle={inactiveDotStyle}
        inactiveDotOpacity={1}
        dotColor={Colors.inActiveBlue}
        inactiveDotColor={Colors.mainBlue}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          data={carouselData}
          renderItem={this.renderItem}
          sliderWidth={metrics.screenWidth}
          itemWidth={metrics.screenWidth}
          onSnapToItem={this.onSnapToItem}
          showsHorizontalScrollIndicator={false}
          snapOnAndroid
          hasParallaxImages
          removeClippedSubviews={false}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
        />
        <View style={styles.footer}>
          {this.renderPagination()}
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  comment: {
    fontSize: getFontSize(16),
    color: Colors.white,
    textAlign: 'center',
    marginTop: dynamicSize(10),
    width: width - dynamicSize(60)
  },
  footer: {
    position: 'absolute',
    bottom: 60,
    width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentImage: {
    width: width - dynamicSize(40),
    height: height - dynamicSize(250),
    borderRadius: dynamicSize(15)
  },
  skipButton: {
    width: dynamicSize(120),
    height: dynamicSize(30),
    borderRadius: dynamicSize(5),
    backgroundColor: Colors.inActiveBlue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40
  },
  skipText: {
    fontSize: getFontSize(13),
    color: Colors.white,
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(Landing);
