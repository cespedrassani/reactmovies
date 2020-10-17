import React from 'react';
import {CircleFade} from 'react-native-animated-spinkit';
import Modal from 'react-native-modal';

import {View} from 'native-base';
import {PropTypes} from 'prop-types';

import {styles} from './styles';
import {primaryColor} from '../../styles';

const Loader = ({visible, onDismiss, ...otherProps}) => (
  <Modal
    {...otherProps}
    onDismiss={onDismiss}
    animationIn="zoomIn"
    animationInTiming={300}
    animationOut="zoomOut"
    animationOutTiming={300}
    isVisible={visible}>
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <CircleFade color={primaryColor} size={50} />
      </View>
    </View>
  </Modal>
);

Loader.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
};

Loader.defaultProps = {
  visible: false,
  onDismiss: () => {},
};

export default Loader;
