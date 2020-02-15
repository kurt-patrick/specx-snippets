import React, {useContext} from 'react';
import { SnippetContext } from './snippet-context';

function SnippetViewer(props) {
    const {snippet} = useContext(SnippetContext);
    const isUndefinedOrNull = value => value === undefined || value === null;

    if (isUndefinedOrNull(snippet) || isUndefinedOrNull(snippet.Component)) {
        return (
            <div className="pt-2 pl-2 pb-2">
                <h5>Snippet Viewer</h5>
                <em>Choose a snippet to generate some xml...</em>
            </div>
        );
    }

    const {settings} = snippet;
    const {generator} = snippet;
    const xml = generator.process(settings);

    return (
        <div>
            <h5 className="pt-2 pl-2 pb-2">Snippet Viewer</h5>
            {
                settings && 
                <pre>{xml}</pre>
            }
        </div>
    );
}
export default SnippetViewer;
