import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class NavigationBar extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Me', icon: '' },
      { key: 'albums', title: 'Compete', icon: '' },
      { key: 'recents', title: 'Rewards', icon: '' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }

  AppRegistry.registerComponent('ComponentDemo', () => App);
}
