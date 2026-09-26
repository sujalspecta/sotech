import React, { useState, useRef, useEffect } from 'react';
import CountUp3c from "react-countup";
const CountUp3 = CountUp3c.default || CountUp3c
export default function CounterUp({ count, time }) {
    const [counterOn, setCounterOn] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setCounterOn(true);
                        observer.disconnect(); // Stop observing once it has started counting
                    }
                },
                { threshold: 0.5 } // Adjust this threshold as needed
            );

            if (counterRef.current) {
                observer.observe(counterRef.current);
            }

            return () => {
                if (counterRef.current) {
                    observer.unobserve(counterRef.current);
                }
            };
        } else {
            // Fallback for environments without IntersectionObserver
            setCounterOn(true);
        }
    }, []);

    return (
        <div className="count-text" ref={counterRef}>
            {counterOn && (
                <CountUp3 end={count} duration={time} suffix="" />
            )}
        </div>
    );
}
