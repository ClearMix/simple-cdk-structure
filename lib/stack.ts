import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface NewStackProps {
}

export class NewStack extends Stack {
  constructor(scope: Construct, id: string, props: NewStackProps) {
    super(scope, id);



  }

}
