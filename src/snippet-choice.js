class SnippetChoice {
    constructor(id, name, Component, generator, settings) {
        this.id = id;
        this.name = name;
        this.Component = Component;
        this.generator = generator;
        this.settings = settings || {};
    }
}
export default SnippetChoice;