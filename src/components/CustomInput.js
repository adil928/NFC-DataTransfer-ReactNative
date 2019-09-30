import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

export default class CustomInput extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    secure: PropTypes.bool,
    onChangeText: PropTypes.func.isRequired,
    keyboardType: PropTypes.string,
    errorText: PropTypes.string,
    isError: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onRef: PropTypes.func,
    editable: PropTypes.bool
  }

  static defaultProps = {
    placeholder: '',
    secure: false,
    keyboardType: 'default',
    errorText: '',
    isError: false,
    onRef: () => undefined,
    editable: true
  }

  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  componentDidMount() {
    this.props.onRef(this.input);
  }

  render() {
    const { placeholder, value, secure, keyboardType, editable, isError, errorText, label, placeholderTextColor, width, borderBottomColor } = this.props;
    return (
      <View>
        {
          label === 'none' ? null
          :
          <Text style={styles.labelText}>{label}</Text>
        }
        <View style={[styles.inputView, { borderColor: isError ? 'red' : this.state.focus ? Colors.blue : Colors.lightgray, width: width ? width : undefined, borderBottomColor: borderBottomColor ? borderBottomColor : '#C7C7C7', }]}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secure}
            value={value}
            editable={editable}
            keyboardType={keyboardType}
            underlineColorAndroid="transparent"
            placeholderTextColor={placeholderTextColor ? placeholderTextColor : Colors.blackOpacity54}
            onChangeText={text => this.props.onChangeText(text)}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
        />
        </View>
        {
          errorText.length > 0 && isError ?
            <View style={styles.errorView}>
              <Icon name="close" style={styles.errorIcon} />
              <Text style={styles.errorText}>{errorText}</Text>
            </View>
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    height: dynamicSize(40),
    padding: dynamicSize(5),
    justifyContent: 'center',
    borderBottomWidth: 1,
    backgroundColor: Colors.transparent
  },
  input: {
    flex: 1,
    color: Colors.black,
    padding: 0,
    margin: 0
  },
  labelText: {
    fontSize: getFontSize(16),
    color: Colors.gray,
  },
  errorView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: dynamicSize(5)
  },
  errorIcon: {
    color: 'red',
    fontSize: 12,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    paddingLeft: dynamicSize(5)
  }
});
