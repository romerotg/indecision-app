let hide = true;

const onToggle = () =>
{
    hide = !hide;
    render();
};

const render = () =>
{
    const template =
    (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>{hide ? 'Show details' : 'Hide details'}</button>
            {!hide && <p>Hidden details</p>}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();