import { useRef, useEffect, useCallback, Children, type ReactNode, } from 'react';

interface InfiniteAutoScrollProps {
    children: ReactNode;
    speed?: number;
    pauseOnHover?: boolean;
}

const InfiniteAutoScroll = ({
    children,
    speed = 1.5,
    pauseOnHover = true
}: InfiniteAutoScrollProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);
    const isPaused = useRef(false);

    const childrenArray = Children.toArray(children);
    const duplicatedChildren = [...childrenArray, ...childrenArray];

    const animateScroll = useCallback(() => {
        const container = containerRef.current;
        if (!container || isPaused.current) {
            animationRef.current = requestAnimationFrame(animateScroll);
            return;
        }

        container.scrollLeft += speed;

        const maxScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= maxScroll) {
            container.scrollLeft -= maxScroll;
        }

        animationRef.current = requestAnimationFrame(animateScroll);
    }, [speed]);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animateScroll);
        return () => {
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [animateScroll]);

    const handleMouseEnter = () => {
        if (pauseOnHover) isPaused.current = true;
    };
    const handleMouseLeave = () => {
        if (pauseOnHover) isPaused.current = false;
    };

    return (
        <div
            ref={containerRef}

            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="infinite-scroll-container"
        >
            {
                duplicatedChildren.map((child, idx) => (
                    <div key={idx} style={{ display: 'inline-block' }}>
                        {child}
                    </div>
                ))
            }
        </div >
    );
};

export default InfiniteAutoScroll;