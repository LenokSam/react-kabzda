import Rating from '../Rating/Rating';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import OnOff from './OnOff';

export default {
  component: OnOff,
  title: 'OnOff',
} as ComponentMeta<typeof OnOff>;


const Template:ComponentStory<typeof OnOff>  = args => <OnOff {...args} />;

export const On = Template.bind({});
On.args = {
};



export const Off:ComponentStory<typeof OnOff>  = () =>{
  return <OnOff />;

}