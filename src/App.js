import React, {useState} from 'react';
import SnippetChoice from './snippet-choice';
import SnippetSelector from './snippet-selector';
import SnippetEditor from './snippet-editor';
import SnippetViewer from './snippet-viewer';
import AttributeDescriptionEditor from './editors/attribute-description-editor';
import { SnippetContext } from './snippet-context';
import AttributeDescriptionXmlGenerator from './generators/attribute-description-xml-generator';

function App() {
  const [snippet, setSnippet] = useState(null);
  const createAttributeSettings = (values) => {
    const state = {
      name: '',
      type: 'Text',
      hasLookBack: false,
      lookBackRegex: '',
      lookBackOnAnyChar: false,
      regex: '',
      hasLookForward: false,
      lookForwardRegex: '',
      lookForwardOnAnyChar: false,
      referenceName: '',
      isOffset: false,
      showReference: false,
      showRegex: true,
      showOffset: false,
    };
    return { ...state, ...values};
  };

  const createAttributeEditorSettings = (values) => {
    const state = {
      showReference: false,
      showRegex: true,
      showOffset: false,
    };
    return { ...state, ...values};
  };

  const createAttributeChoice = (id, name, settings, editorSettings) => 
    new SnippetChoice(
      id, name, AttributeDescriptionEditor, 
      new AttributeDescriptionXmlGenerator(), 
      createAttributeSettings(settings || {}),
      createAttributeEditorSettings(editorSettings || {})
    );

  
  const snippets = [
    createAttributeChoice(1, 'Attribute (Regex)', {'showOffset': true}),
    createAttributeChoice(2, 'Attribute (Offset)', {'isOffset': true, 'showOffset': true}),
    createAttributeChoice(3, 'Attribute (Reference)', {'showReference': true, 'showRegex': false}),
    new SnippetChoice(4, 'Something else ...'),
  ];

  const handleSnippetChange = (id) => {
    if (snippet && snippet.id === id) {
      return;
    }
    const newSnippet = {
      ...snippets.find(value => id === value.id),
    };
    setSnippet(newSnippet);
    //console.log(`App.js:\n${JSON.stringify(newSnippet)}`);
  };

  const updateState = (name, value) => {
    const newSnippet = {
        ...snippet,
    }
    newSnippet.settings[name] = value;
    setSnippet(newSnippet);
};


  return (
    <SnippetContext.Provider value={{ snippet, setSnippet }}>
      <div className="App">
        <main>
          <div className="row border border-1">
            <div className="col-2 border border-1 vh-100">
              <SnippetSelector snippets={snippets} handleSnippetChange={handleSnippetChange} />
            </div>
            <div className="col-4 border border-1 ">
              <SnippetEditor updateState={updateState} />
            </div>
            <div className="col-6 border border-1 ">
              <SnippetViewer />
            </div>
          </div>
        </main>
      </div>
      </SnippetContext.Provider>
  );
}

export default App;
