import {Selector} from './Selector';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';


export default {
  component: Selector,
  title: 'Selector',
} as ComponentMeta<typeof Selector>;


const Template: ComponentStory<typeof Selector> = args => <Selector {...args} />;

export const Rating1:ComponentStory<typeof Selector> = (args)=> {
const [value, setValue] =useState(1)
  return  <Selector {...args}
                    value={value}
                    onChange={setValue}
  />;
}
Rating1.args = {
  items: [
    {
      value: 1,
      title: 'One'
    },
    {
      value: 2,
      title: 'Two'
    },
    {
      value: 3,
      title: 'Three'
    },

  ]
};

