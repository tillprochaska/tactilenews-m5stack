const __{{NAMESPACE}}_adafruit_publish_json = {
    "colour": "{{COLOR}}",

    // Adds statement connector at top and bottom
    "previousStatement": null,
    "nextStatement": null,

    "message0": "%1 %2 %3",
    "args0": [
        {
            "type": "field_label",
            "text": "Send",
        },
        {
            "type": "input_value",
            "name": "MESSAGE"
        },
        {
            "type": "field_label",
            "text": "to adafruit.io",
        },
    ],
};

window.Blockly.Blocks['__{{NAMESPACE}}_adafruit_publish'] = {
    init: function() {
        this.jsonInit(__tactilenews_adafruit_publish_json);
    },
};

window.Blockly.Python['__{{NAMESPACE}}_adafruit_publish'] = function(block) {
    const message = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_NONE);

    // Import MicroPython MQTT implementation
    window.Blockly.Python.definitions_['import_m5mqtt'] = 'from m5mqtt import M5mqtt';

    // Adafruit topics follow the pattern 'USER/feeds/FEED'.
    // We store username and feed in the instance of the MQTT client,
    // so that users need to provide them only once during setup.

    return (
        `user = m5mqtt._tactilenews_user\n` +
        `feed = m5mqtt._tactilenews_feed\n` +
        `endpoint = user + '/feeds/' + feed\n` +
        `m5mqtt.publish(endpoint, ${message})\n`
    );
};
