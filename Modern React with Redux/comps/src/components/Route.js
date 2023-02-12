import useNavigation from '../hooks/use-navigation';

function Route({path,children}) {
    // const {currentPath} = useContext(NavigationContext); // this was the old solution, but with the hook:
    const {currentPath} = useNavigation();
    if (path=== currentPath) {
        return children;
    }
    return null;
}

export default Route;