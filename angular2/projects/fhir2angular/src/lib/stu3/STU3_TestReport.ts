import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'
import { STU3_TestReportResultEnum } from './STU3_TestReportResultEnum'
import { STU3_TestReportStatusEnum } from './STU3_TestReportStatusEnum'
import { STU3_TestReport_Participant } from './STU3_TestReport_Participant'
import { STU3_TestReport_Setup } from './STU3_TestReport_Setup'
import { STU3_TestReport_Teardown } from './STU3_TestReport_Teardown'
import { STU3_TestReport_Test } from './STU3_TestReport_Test'

export class STU3_TestReport      extends STU3_DomainResource
{

   static def : string = 'TestReport';
   identifier : STU3_Identifier ;
   name : string ;
   status : STU3_TestReportStatusEnum ;
   testScript : STU3_Reference ;
   result : STU3_TestReportResultEnum ;
   score : string ;
   tester : string ;
   issued : string ;
   participant : STU3_TestReport_Participant [];
   setup : STU3_TestReport_Setup ;
   test : STU3_TestReport_Test [];
   teardown : STU3_TestReport_Teardown ;
}
