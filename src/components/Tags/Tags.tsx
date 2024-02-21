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
    backgroundColor: "#0284C7", //serendipity[600]
    height: '$s-sm',
    width: '$s-sm',
    color: '$text-invert',
    icon: <MaterialCommunityIcons name="lightbulb" size={20} color="white" />
  })
  
  const OutInfoTag = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'#BAE6FD',//serendipity[600]
    height: '$s-sm',
    width: '$s-sm',
    color:  '#0284C7', //serendipity[200]
    icon: <MaterialCommunityIcons name="lightbulb" size={20} color="#0284C7" />
  })
  
  const SolSucTag = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "#2F9D83", //singularity[500]
    height: '$s-sm',
    width: '$s-sm',
    color: '$text-invert',
    icon: <AntDesign name="check" size={24} color="white" />
  })
  
  const OutSucTag = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'#D5EBE6',///singularity[200]
    height: '$s-sm',
    width: '$s-sm',
    color: '#2F9D83', //singularity[500]
    icon: <AntDesign name="check" size={24} color="#2F9D83" />
  })
  
  const SolErrTag = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "#DB2777", //bwl[600]
    height: '$s-sm',
    width: '$s-sm',
    color: '$text-invert',
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="white" />
  })
  
  const OutErrTag = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'#FBCFE8',//bwl[200]
    height: '$s-sm',
    width: '$s-sm',
    color:  '#DB2777', //bwl[600]
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="#DB2777" />
  })
  
  const SolWarnTag = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "#FB923C", //ptd[400]
    height: '$s-sm',
    width: '$s-sm',
    color: '$text-invert',
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="white" />
  })
  
  const OutWarnTag = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'#FEDEC4',//ptd[200]
    height: '$s-sm',
    width: '$s-sm',
    color:  '#FB923C', //ptd[400]
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="#FB923C" />
  })
  
  const SolDefltTag = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "#744FB5", //boraami[600]
    height: '$s-sm',
    width: '$s-sm',
    color: '$text-invert',
    icon: <Entypo name="heart" size={24} color="white" />
  })
  
  const OutDefltTag = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'#DECCFF',//boraami[200]
    height: '$s-sm',
    width: '$s-sm',
    color:  '#744FB5', //boraami[600]
    icon: <Entypo name="heart" size={24} color="#744FB5" />
  })