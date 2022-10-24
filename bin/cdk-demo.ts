#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";

import { CdkDemoStack } from "../lib/cdk-demo-stack";

const app = new cdk.App();
const stack = new CdkDemoStack(app, "CdkDemoStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

cdk.Tags.of(stack).add("App", "Demo");
cdk.Tags.of(stack).add("Environment", "Development");
