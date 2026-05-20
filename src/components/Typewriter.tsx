import { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
}

const Typewriter = ({ text, speed = 100 }: TypewriterProps) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.substring(0, i + 1))
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    return (
        <span>
            {displayText}
            <span className="typing-cursor">|</span>  {/* zawsze obecny */}
        </span>
    );
};

export default Typewriter;