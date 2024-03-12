import React from "react";
import { Meta } from "@storybook/react-native";
import { Textfields } from "./Textfields";
import { Text, View } from 'tamagui';

export const TextfieldsMeta: Meta<typeof Textfields> = {
    title: "Textfields",
    component: Textfields,
    args: {
      num1: 6,
      num2: 12, 
      defaultText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      fontSize: 14,
      helperText: 'Error Text',
      maxLength: 1000
  },

    decorators: [
        (Story) => (
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Text style={{ color: 'white'}}></Text>
            <Story />
          </View>
        ),
      ],
    };

export default TextfieldsMeta;

export const Placeholder = {
  name: 'placeholder',
    /* 
    borderColor: colorScheme.boraami[300]
    backgroundColor: theme === 'light' ? colorScheme.boraami[50] : colorScheme.boraami[900]}}>
               
    scroll:
      backgroundColor: theme === 'light' ? colorScheme.boraami[200] : colorScheme.boraami[500]
                           
    placeholder text:
     color: theme === 'light' ? colorScheme.boraami[500] : colorScheme.boraami[500] }}
                  
    helper text: 
     color: theme === 'light' ? colorScheme.mono[600] : colorScheme.mono[300] }}
  */
};

export const Default = {
  name: 'default',

  /* 
    borderColor: colorScheme.boraami[400]
    backgroundColor: theme === 'light' ? colorScheme.boraami[100] : colorScheme.boraami[900]}}>
                                 
    scroll:
             backgroundColor: theme === 'light' ? colorScheme.boraami[200] : colorScheme.boraami[500]
                     
    placeholder text:
    color: theme === 'light' ? colorScheme.boraami[800] : colorScheme.boraami[50] }}

    helper text: 
      color: theme === 'light' ? colorScheme.mono[600] : colorScheme.mono[300] }}
  */
};

export const Focused = {
  name: 'focused',

  /* 
    borderColor: colorScheme.boraami[400]
    backgroundColor: theme === 'light' ? colorScheme.boraami[100] : colorScheme.boraami[900]}}>
                                 
    scroll:
             backgroundColor: theme === 'light' ? colorScheme.boraami[200] : colorScheme.boraami[500]
                     
    placeholder text:
    color: theme === 'light' ? colorScheme.boraami[800] : colorScheme.boraami[50] }}

    helper text: 
      color: theme === 'light' ? colorScheme.mono[600] : colorScheme.mono[300] }}
  */

};

export const Error = {
  name: 'error',

/* 
    borderColor: colorScheme.bwl[700]
    backgroundColor: theme === 'light' ? colorScheme.bwl[50] : colorScheme.bwl[900]}}
                    
    scroll:
      backgroundColor: theme === 'light' ? colorScheme.boraami[200] : colorScheme.boraami[500]
                    
    placeholder text:
      color: theme === 'light' ? colorScheme.mono[800] : colorScheme.boraami[50] }}
                 
    helper text: 
     color: theme === 'light' ? colorScheme.bwl[700] : colorScheme.bwl[400] }}            
*/

};

export const Disabled = {
  name: 'disabled',

/* 
    borderColor: theme === 'light' ? colorScheme.boraami[200] : colorScheme.boraami[600]
    backgroundColor: theme === 'light' ? colorScheme.boraami[50] : colorScheme.boraami[900]}}
   
    scroll:
      backgroundColor: theme === 'light' ? colorScheme.mono[300] : colorScheme.boraami[700]
    
    placeholder text:
      color: theme === 'light' ? colorScheme.boraami[300] : colorScheme.boraami[600] }}
      
    helper text: 
      color: theme === 'light' ? colorScheme.mono[300] : colorScheme.mono[500] }}       
*/
};
