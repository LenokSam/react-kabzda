import React from 'react';
import Rating from './Rating';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';

export default {
  component: Rating,
  title: 'Rating',
} as ComponentMeta<typeof Rating>;



const Template:ComponentStory<typeof Rating>  = args => <Rating {...args} />;

export const Rating1 = Template.bind({});
Rating1.args = {
  value:1
};

export const F:ComponentStory<typeof Rating>  = () =>{
  return <Rating value={4} />;

}