'use strict';

var hide = true;

var onToggle = function onToggle() {
    hide = !hide;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onToggle },
            hide ? 'Show details' : 'Hide details'
        ),
        !hide && React.createElement(
            'p',
            null,
            'Hidden details'
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();