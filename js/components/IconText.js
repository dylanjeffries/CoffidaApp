import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class IconText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Ionicons
          name={this.props.iconName}
          size={this.props.iconSize}
          color={this.props.iconColor}
        />
        <Text style={[styles.text, this.props.textStyle]}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flexDirection: 'row',
  },
  text: {
    marginLeft: 5,
    color: 'white',
    textAlignVertical: 'center',
  },
});

export default IconText;
