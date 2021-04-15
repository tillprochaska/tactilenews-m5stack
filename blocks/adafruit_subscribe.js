const __{{NAMESPACE}}_adafruit_subscribe_json = {
    "colour": "{{COLOR}}",

    "previousStatement": null,
    "nextStatement": null,

    "message0": "New message from adafruit.io",

    "message1": "%1",
    "args1": [
        {
            "type": "input_statement",
            "name": "HANDLER"
        },
    ],
};

window.Blockly.Blocks['__{{NAMESPACE}}_adafruit_subscribe'] = {
    init: function() {
        this.jsonInit(__tactilenews_adafruit_subscribe_json);
    },
};

window.Blockly.Python['__{{NAMESPACE}}_adafruit_subscribe'] = function(block) {
    const handler = Blockly.Python.statementToCode(block, 'HANDLER', Blockly.Python.ORDER_FUNCTION_CALL);

    // Define subscription handler
    let code = '';
    code += 'def _tactilenews_adafruit_handler(topic_data):\n';
    code += handler;
    code += '  pass\n';

    window._tactilenews_adafruit_subscribe_handler = code;
    window.Blockly.Python.definitions_['tactilenews_adafruit_subscribe_handler'] = code;

    return null;
};
