import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '../constants';
import { dynamicSize } from '../helpers/DynamicSize';

export default class RightIcon extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => console.log('called')}>
        <Icon
          containerStyle={{ marginRight: dynamicSize(10) }}
          iconStyle={{ marginLeft: dynamicSize(10) }}
          name="mixcloud"
          type="font-awesome"
          color={Colors.mainBlueColor}
          size={20}
        />
      </TouchableOpacity>
    );
  }
}
