import React from 'react';
import { Button } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: true,
  label: 'Button',
};
