import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '../constants';
import { dynamicSize } from '../helpers/DynamicSize';

export default class LeftIcon extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DrawerToggle')}>
        <Icon
          containerStyle={{ marginRight: dynamicSize(10) }}
          iconStyle={{ marginLeft: dynamicSize(10) }}
          name="bars"
          type="font-awesome"
          color={Colors.mainBlueColor}
          size={20}
        />
      </TouchableOpacity>
    );
  }
}
