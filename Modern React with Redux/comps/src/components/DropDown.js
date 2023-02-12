import {useState, useEffect, useRef} from 'react';
import {GoChevronDown} from 'react-icons/go';
import Panel from './Panel';

function DropDown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);
    // short for "div element"
    const divEl =useRef();
    useEffect(() => {
        const handler = (event) => {
            // if not access to the element, then there's nothing to do here.
            if(!divEl.current){
                return;
            }
            // if click was not inside our element
            // is the clicked part different than the event?
            if (!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        };
        // everytime click is done, the handler above is called.
        document.addEventListener('click', handler, true)
        // Cleanup function used when second argument is an empty array
        // This cleans it up after. And done fresh each render
        return () => {document.removeEventListener('click',handler)};
    }, []);
    const handleClick = () => {
        // the functional style is the most correct
        // setIsOpen(!isOpen) is too quick of actions, otherwise it's fine
        setIsOpen((currentIsOpen) => !currentIsOpen)
    };
    const handleOptionClick = (option) => {
        // Close the drop down
        setIsOpen(false);
        // What did the user click on?
        onChange(option);
    };
    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    });
    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg"/>
            </Panel>
                {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
)};

export default DropDown;