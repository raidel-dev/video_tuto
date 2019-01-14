/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  ScrollView,
  Title,
  Video,
  Screen,
  Caption,
  Tile,
  Html,
} from '@shoutem/ui';
import { WebView } from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Screen styleName="paper">

        <WebView
          source={{ uri: 'https://cdn-gce.vdocipher.com/playerAssets/1.6.8/vdo/index.html#otp=20160313versUSE323i5v5jHpt4V825yMpFU3JatSMfqyxSGgvhp97NP3ZNZZMHh&playbackInfo=eyJ2aWRlb0lkIjoiNjhkMzFhNmRiMGZjNGE2ZmI4MTg3MzRhMTE1MjU0MTcifQ==' }}
          style={{ marginTop: 20 }}
        />
      </Screen>
    );
  }
}


