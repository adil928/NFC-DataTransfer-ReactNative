import React, { Component } from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dynamicSize } from '../helpers/DynamicSize';
import { Colors } from '../constants';

class Result extends Component {

  static propTypes = {
    bitcoincashURL: PropTypes.string,
  }

  static defaultProps = {
    bitcoincashURL: null,
  }

  static navigationOptions = () => {
    return {
      title: 'Menu',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#2B72BF',
        height: dynamicSize(60)
      },
      headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
      headerLeft: (
        null
      ),
      headerRight: (
        null
      ),
    };
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  openBrowser(url) {
    const uri = `https://${url}`;
    Linking.openURL(uri)
      .catch((err) => {
        console.warn(err);
      });
  }

  openBitcoinCashApp(url) {
    console.log('open bitcoin cash app', url);
  }

  render() {
    const { bitcoincashURL } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          BITCOIN CASH
        </Text>
        <View style={{ padding: 10, marginTop: 20, backgroundColor: '#e0e0e0', width: dynamicSize(200) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 15 }}>URL:</Text>
            <Text>{bitcoincashURL}</Text>
          </View>
        </View>
        <View style={{ padding: 10, marginTop: 20, backgroundColor: '#e0e0e0', width: dynamicSize(200) }}>
          <TouchableOpacity
            style={{ marginTop: 20, borderWidth: 1, borderColor: 'blue', padding: 10 }}
            onPress={this.openBitcoinCashApp.bind(this, bitcoincashURL)}>
            <Text style={{ color: 'blue' }}>Open BitcoinCash App</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 20, borderWidth: 1, borderColor: 'blue', padding: 10 }}
            onPress={this.openBrowser.bind(this, bitcoincashURL)}>
            <Text style={{ color: 'blue' }}>Open Browser</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
};

function mapStateToProps(state) {
  const { bitcoincashURL } = state.toJS().bitcoincash;
  return {
    bitcoincashURL,
  };
}

export default connect(mapStateToProps, undefined)(Result);
