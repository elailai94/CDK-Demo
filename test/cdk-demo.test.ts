import * as CdkDemo from "../lib/cdk-demo-stack";
import * as cdk from "aws-cdk-lib";

import { Template } from "aws-cdk-lib/assertions";

test("vpc created", () => {
  const app = new cdk.App();
  const stack = new CdkDemo.CdkDemoStack(app, "TestStack");

  const template = Template.fromStack(stack);
  template.resourceCountIs("AWS::EC2::VPC", 1);
});
