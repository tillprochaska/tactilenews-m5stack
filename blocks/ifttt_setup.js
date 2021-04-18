const __{{NAMESPACE}}_ifttt_setup_json = {
    "colour": "{{COLOR}}",

    // Adds statement connector at top and bottom
    "previousStatement": null,
    "nextStatement": null,

    "message0": "%1",
    "args0": [
        {
            "type": "field_label",
            "text": "Set up IFTTT"
        }
    ],

    "message1": "%1 %2",
    "args1": [
        {
            "type": "field_label",
            "text": "Key"
        },
        {
            "type": "field_input",
            "text": "",
            "spellcheck": false,
            "name": "KEY"
        }
    ],
};

window.Blockly.Blocks['__{{NAMESPACE}}_ifttt_setup'] = {
    init: function() {
        this.jsonInit(__{{NAMESPACE}}_ifttt_setup_json);
    },
};

window.Blockly.Python['__{{NAMESPACE}}_ifttt_setup'] = function(block) {
    const key = block.getFieldValue('KEY');
    window.Blockly.Python.definitions_['tactilenews_ifttt_setup_config'] = `_tactilenews_ifttt = { 'key': '${key}' }\n`;

    return '\n';
};
