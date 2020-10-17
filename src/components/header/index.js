import React from 'react';
import {View, Header as NBHeader} from 'native-base';
import {styles} from './styles';
import {primaryColor} from '../../styles';

const Header = ({children, ...props}) => (
  <View>
    <NBHeader
      style={styles.header}
      androidStatusBarColor={primaryColor}
      {...props}>
      {children}
    </NBHeader>
  </View>
);

export default Header;
