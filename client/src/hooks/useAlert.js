import { useState, useEffect } from 'react';

const useAlert = (initialMessage = '', timeout = 5000) => {
    const [message, setMessage] = useState(initialMessage);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, timeout);
            return () => clearTimeout(timer);
        }
    }, [message, timeout]);

    return [message, setMessage];
};

export default useAlert;