import React, {useContext} from 'react';
import { SnippetContext } from '../snippet-context';
import AttributeDescriptionTypeSelector from '../attribute-description-type-selector';

function AttributeDescriptionEditor(props) {
    const {snippet} = useContext(SnippetContext);
    const {settings} = snippet;

    //console.log(`AttributeDescriptionEditor.js: (snippet)\n${JSON.stringify(snippet)}`);
    //<pre>DescriptionEditor (snippet.settings): {JSON.stringify(snippet.settings)}</pre>

    return (
        <div>
            {
            <div>
            <div className="form-inline pb-2">
                <input name="name" autoComplete="off" placeholder="Enter attribute name" style={{width:"100%"}}
                    value={settings.name} onChange={(e) => props.updateState(e.target.name, e.target.value)} />
            </div>

            <div className="form-inline">
                <label className="form-label pr-2" htmlFor="type">Type</label>
                <AttributeDescriptionTypeSelector handleChange={(value) => props.updateState("type", value)} value={settings.type} />
            </div>

            <div className="form-check pt-2" hidden={!settings.showOffset}>
                <input name="isOffset" className="form-check-input" type="checkbox" 
                    checked={settings.isOffset || false} onChange={(e) => props.updateState(e.target.name, e.target.checked)} />
                <label className="form-check-label" htmlFor="isOffset">Is an offset attribute</label>
            </div>

            <div className="pt-2" hidden={!settings.showRegex}>
                <div>Regex</div>

                <div className="form-inline pt-2" hidden={settings.hasLookForward}>
                    <input name="hasLookBack" className="form-check-input" type="checkbox" 
                        checked={settings.hasLookBack} onChange={(e) => props.updateState(e.target.name, e.target.checked)} />
                    <label className="form-check-label pr-2" htmlFor="hasLookBack">Has look back</label>

                    {
                        settings.hasLookBack &&
                        <>
                            <input name="lookBackRegex" className="form-check-input" type="input" 
                            value={settings.lookBackRegex} onChange={(e) => props.updateState(e.target.name, e.target.value)} />
                            <input name="lookBackOnAnyChar" className="form-check-input" type="checkbox" 
                                checked={settings.lookBackOnAnyChar} onChange={(e) => props.updateState(e.target.name, e.target.checked)} />
                            <label className="form-check-label pr-2" htmlFor="lookBackOnAnyChar">Use .+</label>
                        </>
                    }
                </div>

                <div className="pt-2">
                    <input name="regex" autoComplete="off" placeholder="Enter regex pattern" style={{width:"100%"}}
                        value={settings.regex} onChange={(e) => props.updateState(e.target.name, e.target.value)} />
                </div>

                <div className="form-inline pt-2" hidden={settings.hasLookBack}>
                    <input name="hasLookForward" className="form-check-input" type="checkbox" 
                        checked={settings.hasLookForward} onChange={(e) => props.updateState(e.target.name, e.target.checked)} />
                    <label className="form-check-label pr-2" htmlFor="hasLookForward">Has look forward</label>

                    {
                        settings.hasLookForward &&
                        <>
                            <input name="lookForwardRegex" className="form-check-input" type="input" 
                                value={settings.lookForwardRegex} onChange={(e) => props.updateState(e.target.name, e.target.value)} />

                            <input name="lookForwardOnAnyChar" className="form-check-input" type="checkbox" 
                                checked={settings.lookForwardOnAnyChar} onChange={(e) => props.updateState(e.target.name, e.target.checked)} />
                            <label className="form-check-label pr-2" htmlFor="lookForwardOnAnyChar">Use .+</label>
                        </>
                    }
                </div>

            </div>

            <div className="pt-2" hidden={!settings.showReference}>
                <div>Reference</div>
                <div className="form-inline pb-2">
                    <input name="referenceName" autoComplete="off" placeholder="Enter reference name" style={{width:"100%"}}
                        value={settings.referenceName} onChange={(e) => props.updateState(e.target.name, e.target.value)} />
                </div>
            </div>
            
            </div>
            }
        </div>
    );
}
export default AttributeDescriptionEditor;
