import React from 'react';

function SnippetSelector(props) {
    return (
        <div>
            <h5 className="pt-2 pl-2 pb-2">Choose a snippet</h5>
            {
                props.snippets && props.snippets.length &&
                <table className="table table-bordered table-striped ml-2">
                <tbody>
                {
                    props.snippets.map(s => <tr key={s.id} onClick={() => props.handleSnippetChange(s.id)}><td className="pt-2 pb-2">{s.name}</td></tr>)
                }
                </tbody>
                </table>
            }
        </div>
    );
}
export default SnippetSelector;
