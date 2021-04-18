const __{{NAMESPACE}}_ifttt_publish_json = {
    "colour": "{{COLOR}}",

    // Adds statement connector at top and bottom
    "previousStatement": null,
    "nextStatement": null,

    "message0": "%1",
    "args0": [
        {
            "type": "field_label",
            "text": "Trigger IFTTT webhook",
        },
    ],

    "message1": "%1 %2",
    "args1": [
        {
            "type": "field_label",
            "text": "Event",
        },
        {
            "type": "field_input",
            "name": "EVENT"
        },
    ],
};

window.Blockly.Blocks['__{{NAMESPACE}}_ifttt_publish'] = {
    init: function() {
        this.jsonInit(__tactilenews_ifttt_publish_json);
    },
};

window.Blockly.Python['__{{NAMESPACE}}_ifttt_publish'] = function(block) {
    const event = block.getFieldValue('EVENT');

    // Import HTTP client library
    window.Blockly.Python.definitions_['tactilenews_ifttt_publish_import'] = 'import urequests\n';

    let code = '';
    code += `try:\n`;
    code += `  key = _tactilenews_ifttt['key']\n`;
    code += `  url = 'https://maker.ifttt.com/trigger/${event}/with/key/' + key\n`;
    code += `  req = urequests.request(method='POST', url=url, headers={})\n`;
    code += `except:\n`;
    code += `  pass\n`;

    return code;
};
