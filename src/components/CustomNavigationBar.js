import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';
import { bgNav } from '../constants/images';

const { width } = Dimensions.get('window');

export default class CustomNavigationBar extends Component {
  goBack = () => {
    this.props.navigation.goBack();
  }

  openDrawer = () => {
    this.props.navigation.navigate('DrawerToggle');
  }

  render() {
    const { title, subTitle, leftButton, leftButtonColor, rightButton, rightButtonColor, navImage } = this.props;
    return (
      <View style={styles.background}>
        <ImageBackground source={bgNav} style={styles.mainBg}>
          <Text style={styles.subTitle}>
            {subTitle}
          </Text>
          <Text style={styles.title}>
            {title}
          </Text>
          {leftButton &&
            <Icon
              name={leftButton}
              type="font-awesome"
              color={leftButtonColor ? leftButtonColor : Colors.white}
              size={dynamicSize(18)}
              containerStyle={styles.leftButton}
              onPress={this.goBack}
            />
          }
          {rightButton &&
            <Icon
              name={rightButton}
              type="font-awesome"
              color={rightButtonColor ? rightButtonColor : Colors.white}
              size={dynamicSize(18)}
              containerStyle={styles.rightButton}
              onPress={this.openDrawer}
            />
          }
          {navImage &&
            <View style={styles.imageView}>
              <Image source={navImage} style={styles.navImage} />
            </View>
          }
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  background: {
    width,
    backgroundColor: Colors.white
  },
  mainBg: {
    width: '100%',
    height: dynamicSize(106),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftButton: {
    position: 'absolute',
    left: dynamicSize(20),
    top: dynamicSize(40)
  },
  rightButton: {
    position: 'absolute',
    right: dynamicSize(20),
    top: dynamicSize(40)
  },
  subTitle: {
    fontSize: getFontSize(10),
    color: Colors.white,
    fontWeight: 'bold'
  },
  title: {
    fontSize: getFontSize(22),
    color: Colors.white,
    fontWeight: 'bold'
  },
  navImage: {
    width: dynamicSize(50),
    height: dynamicSize(50),
    borderRadius: dynamicSize(25),
  },
  imageView: {
    width: dynamicSize(54),
    height: dynamicSize(54),
    borderRadius: dynamicSize(27),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: dynamicSize(-20),
  }
};
