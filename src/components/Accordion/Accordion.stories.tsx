import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Accordion from './Accordion';
import OnOff from '../OnOff/OnOff';
import {action} from '@storybook/addon-actions';


export default {
  component: Accordion,
  title: 'Accordion',
} as ComponentMeta<typeof Accordion>;


const Template:ComponentStory<typeof Accordion>  = args => <Accordion {...args} />;

export const Error = Template.bind({});
Error.args = {
  title: 'hfoudhs fiashf djfhosfi',
  collapsed:true,
  onChange:action('fvjhs'),
  items:[
    {title:'fas', value:'1'},
    {title:'fadfss', value:'2'},
    {title:'fsdfgsdas', value:'3'},
  ],
  onClickItems:action('click item')
};

export const Red:ComponentStory<typeof Accordion>  = () =>{
  const [collapsed, setCollapsed] = useState(true)

  return <Accordion
    collapsed={collapsed}
    title={'dd'}
    onChange={()=>setCollapsed(!collapsed)}
    items={[
      {title:'fas', value:'1'},
      {title:'fadfss', value:'2'},
      {title:'fsdfgsdas', value:'3'},
    ]
    }
    onClickItems={action('click item')}
  />;
}