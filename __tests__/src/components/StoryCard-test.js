import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';

import {StoryCard} from '../../../src/components';

it('renders correctly', async () => {
  async () => {
    renderer.create(<StoryCard />);
  };
});
