const __{{NAMESPACE}}_adafruit_setup_json = {
    "colour": "{{COLOR}}",

    // Adds statement connector at top and bottom
    "previousStatement": null,
    "nextStatement": null,

    "message0": "%1",
    "args0": [
        {
            "type": "field_label",
            "text": "Set up adafruit.io"
        }
    ],

    "message1": "%1 %2",
    "args1": [
        {
            "type": "field_label",
            "text": "Username"
        },
        {
            "type": "field_input",
            "text": "",
            "spellcheck": false,
            "name": "USER"
        }
    ],

    "message2": "%1 %2",
    "args2": [
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

    "message3": "%1 %2",
    "args3": [
        {
            "type": "field_label",
            "text": "Feed"
        },
        {
            "type": "field_input",
            "text": "",
            "spellcheck": false,
            "name": "FEED"
        }
    ],
};

window.Blockly.Blocks['__{{NAMESPACE}}_adafruit_setup'] = {
    init: function() {
        this.jsonInit(__tactilenews_adafruit_setup_json);
    },
};

window.Blockly.Python['__{{NAMESPACE}}_adafruit_setup'] = function(block) {
    const user = block.getFieldValue('USER');
    const key = block.getFieldValue('KEY');
    const feed = block.getFieldValue('FEED');

    // Import MicroPython MQTT client
    window.Blockly.Python.definitions_['tactilenews_adafruit_setup_import'] = 'from m5mqtt import M5mqtt';

    // We store user and feed as properties of the MQTT client, so that
    // users only have to provide them once during setup and we can easily
    // reference them when publishing a message or subscribing to a feed.
    let code = '';
    code += `m5mqtt = M5mqtt('m5-stack-user', 'io.adafruit.com', 1883, '${user}', '${key}', 300)\n`;
    code += `m5mqtt._tactilenews_user = '${user}'\n`;
    code += `m5mqtt._tactilenews_feed = '${feed}'\n`;

    // Register subscription handler if present
    if(window._tactilenews_adafruit_subscribe_handler) {
        code += `m5mqtt.subscribe('${user}/feeds/${feed}', _tactilenews_adafruit_handler)\n`;
    }

    code += `m5mqtt.start()\n`;

    return code;
};
