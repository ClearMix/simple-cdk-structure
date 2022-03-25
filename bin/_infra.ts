#!/usr/bin/env node
import { NewStack } from "../lib/stack";
import { App, Tags } from "aws-cdk-lib";

export const app = new App();

Tags.of(app).add("Environment", 'Sandbox');

new NewStack(app, "AppStack", {

});
