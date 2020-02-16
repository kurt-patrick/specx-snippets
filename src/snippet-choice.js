class SnippetChoice {
    constructor(id, name, Component, generator, settings, editorSettings) {
        this.id = id;
        this.name = name;
        this.Component = Component;
        this.generator = generator;
        this.settings = settings || {};
        this.editorSettings = editorSettings || {};
    }
}
export default SnippetChoice;