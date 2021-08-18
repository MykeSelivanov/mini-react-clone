import { useState } from './Shmeact.js';

export default function Component({ propCount }) {
    const [count, setCount] = useState(10);
    const propCountDoubled = 0;

    setTimeout(() => {
        setCount(currentCount => currentCount++);
    }, 1000);

    return `
        State: ${count}
        Prop: ${propCount}
        Prop Doubled: ${propCountDoubled}
    `
}