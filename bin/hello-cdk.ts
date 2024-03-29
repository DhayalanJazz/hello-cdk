#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HelloCdkStack } from '../lib/hello-cdk-stack';

const app = new cdk.App();
new HelloCdkStack(app, 'HelloCdkStack', {


  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  env: { account: 'YOUR_ACCOUNT_NUMBER', region: 'YOUR_REGION' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});