import {createContext, useState, useEffect} from 'react';

const NavigationContext = createContext();

function NavigationProvider ({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler)
        return () => {window.removeEventListener('popstate', handler)};
    }, []);

    const navigate = (to) => {
        // 'to' is to the path we are going to go to.
        window.history.pushState({}, '', to)
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    )
};

export {NavigationProvider};
export default NavigationContext;