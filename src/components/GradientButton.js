import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

export default class GradientButton extends Component {
  render() {
    const { label, leftIcon, rightIcon, onPress, leftIconColor, rightIconColor, textColor } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.background}>
        <LinearGradient
          colors={['#185A9D', '#0196A1']}
          style={styles.background}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 0.8, y: 1.0 }}
        >
          <View style={styles.leftView}>
            {typeof leftIcon === 'number'
              ? (
                <View style={styles.iconView}>
                  <Image
                    source={leftIcon}
                    style={styles.leftIcon}
                />
                </View>
              )
              : (
                <Icon
                  name={leftIcon}
                  type="font-awesome"
                  color={leftIconColor ? leftIconColor : Colors.white}
                  size={dynamicSize(18)}
              />
              )
            }
          </View>
          <View style={styles.centerView}>
            <Text style={{ fontSize: getFontSize(14), color: textColor ? textColor : Colors.black }}>
              {label}
            </Text>
          </View>
          <View style={styles.rightView}>
            {rightIcon
              && (
              <Icon
                name={rightIcon}
                type="font-awesome"
                color={rightIconColor ? rightIconColor : Colors.mainBlueColor}
                size={dynamicSize(18)}
              />
              )
            }
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = {
  background: {
    width: dynamicSize(295),
    height: dynamicSize(44),
    flexDirection: 'row',
    borderRadius: dynamicSize(3),
  },
  leftView: {
    width: dynamicSize(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconView: {
    width: dynamicSize(30),
    height: dynamicSize(30),
    backgroundColor: Colors.white,
    borderRadius: dynamicSize(15)
  },
  leftIcon: {
    width: dynamicSize(30),
    height: dynamicSize(30),
    // backgroundColor: Colors.white,
    borderRadius: dynamicSize(15)
  },
  centerView: {
    width: dynamicSize(195),
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightView: {
    width: dynamicSize(50),
    justifyContent: 'center',
    alignItems: 'center'
  }
};
