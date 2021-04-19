const __{{NAMESPACE}}_ifttt_publish_json = {
    "colour": "{{COLOR}}",

    // Adds statement connector at top and bottom
    "previousStatement": null,
    "nextStatement": null,

    "inputsInline": true,

    "message0": "Trigger IFTTT webhook %1 with data %2",
    "args0": [
        {
            "type": "field_input",
            "name": "EVENT"
        },
        {
            "type": "input_value",
            "name": "DATA"
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
    const data = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_NONE);

    // Import HTTP client library
    window.Blockly.Python.definitions_['tactilenews_ifttt_publish_import'] = 'import urequests\n';

    let code = '';
    code += `try:\n`;
    code += `  data = str(${data || '\'\''})\n`;
    code += `  key = _tactilenews_ifttt['key']\n`;
    code += `  url = 'https://maker.ifttt.com/trigger/${event}/with/key/' + key\n`;
    code += `  req = urequests.request(method='POST', url=url, headers={}, json={'value1': ${data}})\n`;
    code += `except:\n`;
    code += `  pass\n`;

    return code;
};
