import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

export default class LineButton extends Component {
  render() {
    const { label, leftIcon, rightIcon, onPress, rightIconColor } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.background}>
        <View style={styles.leftView}>
          {leftIcon &&
            <Icon
              name={leftIcon}
              type="font-awesome"
              color={Colors.mainBlueColor}
              size={dynamicSize(15)}
            />
          }
        </View>
        <View style={styles.centerView}>
          <Text style={styles.label}>
            {label}
          </Text>
        </View>
        <View style={styles.rightView}>
          {rightIcon &&
            <Icon
              name={rightIcon}
              type="font-awesome"
              color={rightIconColor ? rightIconColor : Colors.mainBlueColor}
              size={dynamicSize(15)}
            />
          }
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  background: {
    width: dynamicSize(295),
    height: dynamicSize(44),
    flexDirection: 'row',
    backgroundColor: Colors.blackOpacity20,
    borderRadius: dynamicSize(3),
    borderWidth: dynamicSize(2),
    borderColor: Colors.white
  },
  leftView: {
    width: dynamicSize(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerView: {
    width: dynamicSize(195),
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: getFontSize(14),
    color: Colors.black
  },
  rightView: {
    width: dynamicSize(50),
    justifyContent: 'center',
    alignItems: 'center'
  }
};
