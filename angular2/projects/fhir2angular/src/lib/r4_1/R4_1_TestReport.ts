import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_TestReportResultEnum } from './R4_1_TestReportResultEnum'
import { R4_1_TestReportStatusEnum } from './R4_1_TestReportStatusEnum'
import { R4_1_TestReport_Participant } from './R4_1_TestReport_Participant'
import { R4_1_TestReport_Setup } from './R4_1_TestReport_Setup'
import { R4_1_TestReport_Teardown } from './R4_1_TestReport_Teardown'
import { R4_1_TestReport_Test } from './R4_1_TestReport_Test'

export class R4_1_TestReport      extends R4_1_DomainResource
{

   static def : string = 'TestReport';
   identifier : R4_1_Identifier ;
   name : string ;
   status : R4_1_TestReportStatusEnum ;
   testScript : R4_1_Reference ;
   result : R4_1_TestReportResultEnum ;
   score : string ;
   tester : string ;
   issued : string ;
   participant : R4_1_TestReport_Participant [];
   setup : R4_1_TestReport_Setup ;
   test : R4_1_TestReport_Test [];
   teardown : R4_1_TestReport_Teardown ;
}
