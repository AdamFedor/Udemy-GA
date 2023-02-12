import { useContext } from "react";
import NavigationContext from "../context/navigation";

// for link and route file
function useNavigation() {
    return useContext(NavigationContext);
}

export default useNavigation;