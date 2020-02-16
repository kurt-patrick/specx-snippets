class AttributeDescriptionXmlGenerator {
    process = (settings) => {
        
        const name = (settings.isOffset ? 'OFFSET_' : '') + (settings.name ? settings.name.toUpperCase() : '');

        let regexString = settings.regex;
        const hasLookBack = settings.hasLookBack && settings.lookBackRegex;
        if (hasLookBack) {
            const lookbackChar = settings.lookBackOnAnyChar ? '.+' : "[^\\S\\n]+";
            regexString = `(?<=${settings.lookBackRegex}${lookbackChar})${settings.regex}`;
        }
    
        if (!hasLookBack && settings.hasLookForward && settings.lookForwardRegex) {
            const lookForwardChar = settings.lookForwardOnAnyChar ? '.+' : "[^\\S\\n]+";
            regexString = `${settings.regex}(?=${lookForwardChar}${settings.lookForwardRegex})`;
        }
    
        const builder = require('xmlbuilder');
     
        const optionCollection = builder.create('AttributeDescription')
            .ele('OptionCollection', {'name':name, 'type':settings.type});

        let xml = '';
        if (settings.referenceName || settings.showReference) {
            xml = 
                optionCollection
                    .ele('Reference', {'ref':settings.referenceName.toUpperCase()})
                    .up()
                    .end({ pretty: true});
        } else {
            xml =
                optionCollection
                    .ele('Pattern', {'regex':true}, regexString).up()
                    .ele('Occurrence')
                        .ele('Count', null, 0).up()
                .end({ pretty: true});
        }
    
        
        return xml.replace("<?xml version=\"1.0\"?>\n", "");
    };
}
export default AttributeDescriptionXmlGenerator;
