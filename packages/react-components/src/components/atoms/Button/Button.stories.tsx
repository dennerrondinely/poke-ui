import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Default: Story = (args) => <Button {...args} />;