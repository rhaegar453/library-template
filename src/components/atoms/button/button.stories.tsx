import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args:any) => (
  <Button {...args}>Hello World</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
