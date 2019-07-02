const nodesdk = require('@gaia-pipeline/nodesdk');

function CreateUser(args) {
    console.error('CreateUser has been started!');
    // Lets sleep a few seconds to simulate that we do something.
    wait(2000);
    console.error('CreateUser has been finished!');
}

function MigrateDB(args) {
    console.error('MigrateDB has been started!');
    // Lets sleep a few seconds to simulate that we do something.
    wait(2000);
    console.error('MigrateDB has been finished!');
}

function CreateNamespace(args) {
    console.error('CreateNamespace has been started!');
    // Lets sleep a few seconds to simulate that we do something.
    wait(2000);
    console.error('CreateNamespace has been finished!');
}

function CreateDeployment(args) {
    console.error('CreateDeployment has been started!');
    // Lets sleep a few seconds to simulate that we do something.
    wait(2000);
    console.error('CreateDeployment has been finished!');
}

function CreateService(args) {
    console.error('CreateService has been started!');
    // Lets sleep a few seconds to simulate that we do something.
    wait(2000);
    console.error('CreateService has been finished!');
}

function CreateIngress(args) {
    console.error('CreateIngress has been started!');
    // Lets sleep a few seconds to simulate that we do something.
    wait(2000);
    console.error('CreateIngress has been finished!');
}

function Cleanup(args) {
    console.error('Cleanup has been started!');
    // Lets sleep a few seconds to simulate that we do something.
    wait(2000);
    console.error('Cleanup has been finished!');
}

// This is not the right way to do it but it works for this example.
// You should not use this for real pipelines/applications.
function wait(ms) {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

// Serve
try {
    nodesdk.Serve([
        {
            handler: CreateUser,
            title: 'Create DB User',
            description: 'Create DB User with least privileged permissions.'
        },
        {
            handler: MigrateDB,
            title: 'DB Migration',
            description: 'Imports newest test data dump and migrates to newest version.',
            dependson: ['Create DB User']
        },
        {
            handler: CreateNamespace,
            title: 'Create K8S Namespace',
            description: 'Create a new Kubernetes namespace for the new test environment.',
            dependson: ['DB Migration']
        },
        {
            handler: CreateDeployment,
            title: 'Create K8S Deployment',
            description: 'Create a new Kubernetes deployment for the new test environment.',
            dependson: ['Create K8S Namespace']
        },
        {
            handler: CreateService,
            title: 'Create K8S Service',
            description: 'Create a new Kubernetes service for the new test environment.',
            dependson: ['Create K8S Namespace']
        },
        {
            handler: CreateIngress,
            title: 'Create K8S Ingress',
            description: 'Create a new Kubernetes ingress for the new test environment.',
            dependson: ['Create K8S Namespace']
        },
        {
            handler: Cleanup,
            title: 'Clean up',
            description: 'Removes all temporary files.',
            dependson: ['Create K8S Deployment', 'Create K8S Service', 'Create K8S Ingress']
        }
    ]);
} catch (err) {
    console.error(err);
}
