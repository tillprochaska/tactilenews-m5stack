const __{{NAMESPACE}}_adafruit_topic_data_json = {
    "colour": "{{COLOR}}",
    "output": "String",

    "message0": "%1",
    "args0": [
        {
            "type": "field_label",
            "text": "adafruit.io data",
        },
    ],
};

window.Blockly.Blocks['__{{NAMESPACE}}_adafruit_topic_data'] = {
    init: function() {
        this.jsonInit(__tactilenews_adafruit_topic_data_json);
    },
};

window.Blockly.Python['__{{NAMESPACE}}_adafruit_topic_data'] = function(block) {
    return ['(topic_data or \'\')', Blockly.Python.ORDER_MEMBER];
};
