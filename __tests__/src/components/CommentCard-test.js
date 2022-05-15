import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';

import {CommentCard} from '../../../src/components';

it('renders correctly', async () => {
  async () => {
    renderer.create(<CommentCard />);
  };
});
