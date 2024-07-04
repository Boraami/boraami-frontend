import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = () => (
  <Svg
    width={28}
    height={28}
    fill="none"
    // {...props}
  >
    <Circle cx={14} cy={14} r={8.7} stroke="#AA7AFF" strokeWidth={2.6} />
    <Circle
      cx={14}
      cy={14}
      r={8.7}
      stroke="#000"
      strokeOpacity={0.16}
      strokeWidth={2.6}
    />
    <Path
      fill="#B48BFF"
      d="M19.555 3.873a.5.5 0 0 1 .89 0l.938 1.837a.5.5 0 0 0 .367.267l2.038.324a.5.5 0 0 1 .275.847l-1.458 1.46a.5.5 0 0 0-.14.431l.321 2.038a.5.5 0 0 1-.72.524l-1.84-.936a.5.5 0 0 0-.453 0l-1.839.936a.5.5 0 0 1-.72-.524l.321-2.038a.5.5 0 0 0-.14-.431l-1.458-1.46a.5.5 0 0 1 .275-.847l2.038-.324a.5.5 0 0 0 .367-.267l.938-1.837Z"
    />
    <Path
      fill="#fff"
      fillOpacity={0.8}
      d="M19.555 3.873a.5.5 0 0 1 .89 0l.938 1.837a.5.5 0 0 0 .367.267l2.038.324a.5.5 0 0 1 .275.847l-1.458 1.46a.5.5 0 0 0-.14.431l.321 2.038a.5.5 0 0 1-.72.524l-1.84-.936a.5.5 0 0 0-.453 0l-1.839.936a.5.5 0 0 1-.72-.524l.321-2.038a.5.5 0 0 0-.14-.431l-1.458-1.46a.5.5 0 0 1 .275-.847l2.038-.324a.5.5 0 0 0 .367-.267l.938-1.837Z"
    />
  </Svg>
)
export default SvgComponent
