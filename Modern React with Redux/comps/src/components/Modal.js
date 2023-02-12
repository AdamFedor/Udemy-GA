import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({onClose, children, actionBar}) {
    useEffect(()=> {
        // prevent the scroll, by adding the class
        document.body.classList.add('overflow-hidden');
        // when the modal is removed, this cleanup function removes it
        return () => {document.body.classList.remove('overflow-hidden');}
    },[]);

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
    
};

export default Modal;