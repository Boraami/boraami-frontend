import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

  const SolInfoTag = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$info-solid-fill", //serendipity[600]
    height: '$s-sm',
    width: '$s-sm',
    color: '$info-solid-text',
    icon: <MaterialCommunityIcons name="lightbulb" size={20} color="white" />
  })
  
  const OutInfoTag = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'info-outline-border',//serendipity[600]
    height: '$s-sm',
    width: '$s-sm',
    color:  '$info-outline-text', //serendipity[200]
    icon: <MaterialCommunityIcons name="lightbulb" size={20} color="$info-solid-fill" />
  })
  
  const SolSucTag = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$success-solid-fill", //singularity[500]
    height: '$s-sm',
    width: '$s-sm',
    color: '$success-solid-text',
    icon: <AntDesign name="check" size={24} color="white" />
  })
  
  const OutSucTag = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'$success-outline-border',///singularity[200]
    height: '$s-sm',
    width: '$s-sm',
    color: '$success-outline-text', //singularity[500]
    icon: <AntDesign name="check" size={24} color="$success-outline-text" />
  })
  
  const SolErrTag = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$error-solid-fill", //bwl[600]
    height: '$s-sm',
    width: '$s-sm',
    color: '$error-solid-text',
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="white" />
  })
  
  const OutErrTag = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'$error-outline-border',//bwl[200]
    height: '$s-sm',
    width: '$s-sm',
    color:  '$error-outline-text', //bwl[600]
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="$error-outline-text" />
  })
  
  const SolWarnTag = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$warning-solid-fill", //ptd[400]
    height: '$s-sm',
    width: '$s-sm',
    color: '$warning-solid-tex',
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="white" />
  })
  
  const OutWarnTag = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'$warning-outline-borde',//ptd[200]
    height: '$s-sm',
    width: '$s-sm',
    color:  '$warning-outline-text', //ptd[400]
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="$warning-outline-text" />
  })
  
  const SolDefltTag = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$default-solid-fill", //boraami[600]
    height: '$s-sm',
    width: '$s-sm',
    color: '$default-solid-text',
    icon: <Entypo name="heart" size={24} color="white" />
  })
  
  const OutDefltTag = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'$default-solid-text',//boraami[200]
    height: '$s-sm',
    width: '$s-sm',
    color:  '#$default-outline-text', //boraami[600]
    icon: <Entypo name="heart" size={24} color="$default-outline-text" />
  })