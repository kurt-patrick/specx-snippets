import React, {useContext} from 'react';
import { SnippetContext } from './snippet-context';

function SnippetEditor(props) {
    const {snippet} = useContext(SnippetContext);
    const isUndefinedOrNull = value => value === undefined || value === null;

    if (isUndefinedOrNull(snippet) || isUndefinedOrNull(snippet.Component)) {
        return (
            <div className="pt-2 pl-2 pb-2">
                <h5>Snippet Settings</h5>
                <em>Choose a snippet to load the settings...</em>
            </div>
        );
    }

    const {Component} = snippet;
    
    //<pre>SnippetEditor (snippet.settings): {JSON.stringify(snippet.settings)}</pre>

    return (
        <div>
            <h5 className="pt-2 pl-2 pb-2">{snippet.name} Settings</h5>
            <Component updateState={props.updateState} />
        </div>
    );
}
export default SnippetEditor;
