import { render } from './Shmeact.js';
import Component from './Component.js';

function renderComponent() {
    render(Component, { propCount: 12 }, document.getElementById('root'));
}

renderComponent();