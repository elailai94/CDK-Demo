#!/usr/bin/env node

import "source-map-support/register";

import * as cdk from "aws-cdk-lib";

import { CdkDemoStack } from "../lib/cdk-demo-stack";

const app = new cdk.App();
const stack = new CdkDemoStack(app, "CdkDemoStack", {
  env: { account: "064103198336", region: "us-east-1" },
});

cdk.Tags.of(stack).add("App", "Demo");
cdk.Tags.of(stack).add("Environment", "Development");
