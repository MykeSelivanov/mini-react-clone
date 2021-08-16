let globalId = 0;
let globalParent
const componentState = new Map();

export function render(component, props, parent) {
    const state = componentState.get(parent) || { cache: [] };
    componentState.set(parent, { ...state, component, props });

    globalParent = parent;
    const output = component(props);
    globalId = 0;
    parent.textContent = output;
}

export function useState(initialState) {
    const { cache } = componentState.get(globalParent);
    return [initialState, setState];
}