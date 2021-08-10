const { AwsCdkConstructLibrary, ProjectType, NpmAccess, DependenciesUpgradeMechanism, Stability } = require('projen');

const CDK_VERSION = '1.117.0';

const project = new AwsCdkConstructLibrary({
  author: 'Randy Ridgley',
  authorAddress: 'randy.ridgley@gmail.com',
  description: 'AWS CDK Constructs that can be used to create datalakes/meshes and more',
  stability: Stability.EXPERIMENTAL,
  cdkVersion: CDK_VERSION,
  defaultReleaseBranch: 'main',
  name: 'cdk-datalake-constructs',
  repositoryUrl: 'https://github.com/randyridgley/cdk-datalake-constructs.git',
  projectType: ProjectType.LIB,
  jsiiFqn: 'projen.AwsCdkConstructLibrary',
  npmAccess: NpmAccess.PUBLIC,
  cdkAssert: true,
  licensed: true,
  license: 'MIT',
  packageName: 'cdk-datalake-constructs',
  gitpod: true,
  devenv: true,
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/assets',
    '@aws-cdk/aws-autoscaling',
    '@aws-cdk/aws-autoscaling-common',
    '@aws-cdk/aws-applicationautoscaling',
    '@aws-cdk/aws-autoscaling-hooktargets',
    '@aws-cdk/aws-apigateway',
    '@aws-cdk/aws-athena',
    '@aws-cdk/aws-certificatemanager',
    '@aws-cdk/aws-cloudwatch',
    '@aws-cdk/aws-cognito',
    '@aws-cdk/aws-codebuild',
    '@aws-cdk/aws-codestarnotifications',
    '@aws-cdk/aws-codepipeline',
    '@aws-cdk/aws-codeguruprofiler',
    '@aws-cdk/aws-codecommit',
    '@aws-cdk/aws-cloudformation',
    '@aws-cdk/cloud-assembly-schema',
    '@aws-cdk/aws-dynamodb',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-ecs',
    '@aws-cdk/aws-ecr',
    '@aws-cdk/aws-ecr-assets',
    '@aws-cdk/aws-efs',
    '@aws-cdk/aws-emr',
    '@aws-cdk/aws-eks',
    '@aws-cdk/aws-elasticloadbalancing',
    '@aws-cdk/aws-events',
    '@aws-cdk/aws-events-targets',
    '@aws-cdk/aws-elasticloadbalancingv2',
    '@aws-cdk/aws-glue',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-kinesis',
    '@aws-cdk/aws-kinesisanalytics',
    '@aws-cdk/aws-kinesisfirehose',
    '@aws-cdk/aws-kms',
    '@aws-cdk/aws-lakeformation',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-lambda-nodejs',
    '@aws-cdk/aws-logs',
    '@aws-cdk/aws-route53',
    '@aws-cdk/aws-s3-assets',
    '@aws-cdk/aws-s3-deployment',
    '@aws-cdk/aws-s3-notifications',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-sagemaker',
    '@aws-cdk/aws-sam',
    '@aws-cdk/aws-secretsmanager',
    '@aws-cdk/aws-sns',
    '@aws-cdk/aws-sns-subscriptions',
    '@aws-cdk/aws-sqs',
    '@aws-cdk/aws-servicecatalog',
    '@aws-cdk/aws-servicediscovery',
    '@aws-cdk/aws-signer',
    '@aws-cdk/aws-ssm',
    '@aws-cdk/aws-stepfunctions',
    '@aws-cdk/aws-stepfunctions-tasks',
    '@aws-cdk/custom-resources',
    '@aws-cdk/region-info',
    '@aws-cdk/aws-lambda-python',
  ],
  cdkTestDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-athena',
    '@aws-cdk/aws-cloudwatch',
    '@aws-cdk/custom-resources',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-events',
    '@aws-cdk/aws-events-targets',
    '@aws-cdk/aws-glue',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-kinesis',
    '@aws-cdk/aws-kinesisfirehose',
    '@aws-cdk/aws-kms',
    '@aws-cdk/aws-lakeformation',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-logs',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-s3-assets',
    '@aws-cdk/aws-s3-notifications',
    '@aws-cdk/aws-sagemaker',
    '@aws-cdk/aws-sns',
    '@aws-cdk/aws-stepfunctions',
    '@aws-cdk/aws-stepfunctions-tasks',
  ],
  gitignore: [
    'src/emr-studio.ts',
    'src/emr-cluster-sc.ts',
    'src/etl/kda-studio.ts',
    'src/etl/glue-notebook.ts',
    'workflows/*',
    '.DS_Store',
  ],
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: 'PROJEN_GITHUB_TOKEN',
    },
  }),
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['randyridgley'],
  },
  docgen: true,
  eslint: true,
  mergify: true,
  antitamper: true,
  releaseWorkflow: true,
  buildWorkflow: true,
  minNodeVersion: '14.15.0',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  npmTokenSecret: 'NPM_TOKEN',
  releaseToNpm: true,
  publishToPypi: {
    distName: 'cdk-datalake-constructs',
    module: 'cdk_datalake_constructs',
  },
  // publishToMaven: {
  //   javaPackage: 'io.github.randyridgley.cdk.datalake.constructs',
  //   mavenGroupId: 'io.github.randyridgley.cdk.datalake.constructs',
  //   mavenArtifactId: 'cdk-datalake-constructs',
  // },
  publishToGo: {
    gitUserName: 'randyridgley',
    gitUserEmail: 'randy.ridgley@gmail.com',
    moduleName: 'github.com/randyridgley/cdk-datalake-constructs',
  },
  // publishToNuget: {
  //   dotNetNamespace: 'Cdk.Datalake.Constructs',
  //   packageId: 'Cdk.Datalake.Constructs',
  // },
  releaseToNpm: false,
  catalog: {
    announce: false,
    twitter: 'randyridgley',
  },
  keywords: ['aws',
    'aws-cdk',
    'aws-ses',
    'cdk-construct',
    'cdk',
    'datalake',
    'datamesh',
    'lakeformation',
    'glue'],
  pullRequestTemplateContents: [
    '',
    '----',
    '',
    '*By submitting this pull request, I confirm that my contribution is made under the terms of the MIT license*',
  ],
});

project.tasks.tryFind('package').prependExec('go env -w GOSUMDB=off');

const common_exclude = [
  'cdk.out', 'cdk.context.json', 'images', 'yarn-error.log', '.DS_Store', 'coverage',
];
project.npmignore.exclude(...common_exclude, 'maven_release*');
project.gitignore.exclude(...common_exclude);

project.gitpod.addTasks({
  name: 'Setup',
  init: 'yarn install',
  command: 'npx projen build',
});

const openCoverage = project.addTask('coverage');
openCoverage.exec('npx projen test && open coverage/lcov-report/index.html');
project.npmignore.exclude('examples');

project.synth();