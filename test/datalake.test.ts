import { Template } from 'aws-cdk-lib/assertions';
import { App, Stack } from 'aws-cdk-lib/core';
import { DataLake, Stage, Pipeline, DataProduct, LakeType } from '../src';
import * as pipelines from '../test/pipelines';

const stage = Stage.ALPHA;
const dataProductAccountId = '123456789012';

const pipes: Array<Pipeline> = [
  pipelines.ReviewsPipeline(),
  pipelines.IoTDataPipeline(stage),
];

const taxiPipes: Array<Pipeline> = [
  pipelines.YellowPipeline(),
  pipelines.GreenPipeline(),
];

const dataProducts: Array<DataProduct> = [{
  pipelines: pipes,
  accountId: dataProductAccountId,
  databaseName: 'data-product',
},
{
  pipelines: taxiPipes,
  accountId: dataProductAccountId,
  databaseName: 'taxi-product',
}];

describe('default', () => {
  const app = new App();
  const stack = new Stack(app, 'testStack', {
    env: {
      region: 'us-east-1',
      account: dataProductAccountId,
    },
  });

  const datalake = new DataLake(stack, 'datalake', {
    name: 'test-lake',
    stageName: stage,
    dataProducts: dataProducts,
    createDefaultDatabase: true,
    lakeType: LakeType.DATA_PRODUCT_AND_CATALOG,
    createAthenaWorkgroup: true,
  });

  test('Check Resources', () => {
    expect(datalake.stageName).toMatch(Stage.ALPHA);
    expect(Object.keys(datalake.dataSets).length).toEqual(4);
    expect(Object.keys(datalake.dataStreams).length).toEqual(1);
    // expect(stack).toHaveResource('AWS::S3::Bucket');
    // expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });
  it('Should match snapshot', () => {
    // When
    const t = Template.fromStack(stack);
    expect(t).toMatchSnapshot();
  });
});