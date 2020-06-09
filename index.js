const nodesdk = require('gaiatestnodesdk');

function DoSomethingAwesome(args) {
    console.error('This output will be streamed back to gaia and will be displayed in the pipeline logs.');

    // An error occurred? Throw it back so gaia knows that this job failed.
    // throw new Error('My error message');
}

// Serve
try {
    nodesdk.Serve([{
        handler: DoSomethingAwesome,
        title: 'DoSomethingAwesome',
        description: 'This job does something awesome.'
    }]);
} catch (err) {
    console.error(err);
}
