import { useState, useEffect } from './ReactClone.js';

export default function Component({ propCount, buttonElement }) {
    const [count, setCount] = useState(10);
    const propCountDoubled = 0;

    useEffect(() => {
        const handler = () => setCount(currentCount => { console.log(typeof currentCount); return currentCount + 1});
        buttonElement.addEventListener('click', handler);

        return () => buttonElement.removeEventListener('click', handler);
    }, [buttonElement]);

    return `
        State: ${count}
        Prop: ${propCount}
        Prop Doubled: ${propCountDoubled}
    `
}