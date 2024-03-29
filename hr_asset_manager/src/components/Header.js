/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type {Node} from 'react';

import {
  ImageBackground,
  StyleSheet, 
  Text,
  useColorScheme,
} from 'react-native';

import Colors from './Colors';
import HermesBadge from './HermesBadge';
import React from 'react';

const Header = (): Node => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <ImageBackground
      accessibilityRole="image"
      testID="new-app-screen-header"
      source={require('./usage-tracker.webp')} //logo.png
      style={[
        styles.background,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}
      imageStyle={styles.logo}>
      <HermesBadge />
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Welcome to
        {'\n'}
        the Significant Other Usage Tracker
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 0.8,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: 0,
    marginBottom: 0,
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
});

export default Header;
