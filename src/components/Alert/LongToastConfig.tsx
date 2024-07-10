import React from 'react';
import { LongAlert } from './LongAlert';

interface LongToastProps {
    shade?: "solid" | "subtle" | "outline";
    text1?: string;
    text2?: string;
    props?: any;
}

const LongToastConfig = {
  custom: ({ shade = "solid", text1 = "", text2 = "", props }: LongToastProps) => (
    <LongAlert shade={shade} alert={text1} content={text2} {...props} />
  ),
};

export default LongToastConfig;
