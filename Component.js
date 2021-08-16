import { useState } from './Shmeact.js';

export default function Component({ propCount }) {
    const [count, setCount] = useState(10);
    const count = 0;
    const propCountDoubled = 0;

    return `
        State: ${count}
        Prop: ${propCount}
        Prop Doubled: ${propCountDoubled}
    `
}