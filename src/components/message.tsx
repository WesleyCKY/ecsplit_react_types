import React, { useEffect, useState } from 'react';

interface MessageBoxProps {
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning';
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, type = 'success' }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className={`message ${type} ${isVisible ? 'block' : 'hidden'}`}>
            {message}
        </div>
    );
};

export default MessageBox;