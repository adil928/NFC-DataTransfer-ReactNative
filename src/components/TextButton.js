import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import { Colors } from '../constants';
import { getFontSize } from '../helpers/DynamicSize';

export default class TextButton extends Component {
  render() {
    const { label, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.label}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  label: {
    fontSize: getFontSize(12),
    color: Colors.simpleTextColor
  },
};
