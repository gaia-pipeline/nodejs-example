const nodesdk = require('@gaia-pipeline/nodesdk');

function PrintArgs(args) {
    for (let i = 0; i < args.length; i++) {
        console.error('Key: ' + args[i].key + '; Value: ' + args[i].value);
    }
}

// Serve
try {
    nodesdk.Serve([
        {
            handler: PrintArgs,
            title: 'Print Arguments',
            description: 'This job prints out all given arguments.',
            args: [
                {
                    description: 'Please provide the username:',
                    // This will use a textfield in the UI. You can also use
                    // "textarea", "boolean" and "vault".
                    type: 'textfield',
                    key: 'username'
                }
            ]
        },
    ]);
} catch (err) {
    console.error(err);
}
