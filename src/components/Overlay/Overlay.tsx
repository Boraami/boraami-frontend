import { XStack} from "tamagui";
import { Badge } from "../Badge/Badge";
export function Overlay(){
    return(
        <XStack 
        width={"100%"}
        height={"100%"}
        opacity={0.4}
        backgroundColor={"$overlay-bg-color"}>
        </XStack>
    )
}