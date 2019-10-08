import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'
import { R5_TestReportResultEnum } from './R5_TestReportResultEnum'
import { R5_TestReportStatusEnum } from './R5_TestReportStatusEnum'
import { R5_TestReport_Participant } from './R5_TestReport_Participant'
import { R5_TestReport_Setup } from './R5_TestReport_Setup'
import { R5_TestReport_Teardown } from './R5_TestReport_Teardown'
import { R5_TestReport_Test } from './R5_TestReport_Test'

export class R5_TestReport      extends R5_DomainResource
{

   static def : string = 'TestReport';
   identifier : R5_Identifier ;
   name : string ;
   status : R5_TestReportStatusEnum ;
   testScript : R5_Reference ;
   result : R5_TestReportResultEnum ;
   score : string ;
   tester : string ;
   issued : string ;
   participant : R5_TestReport_Participant [];
   setup : R5_TestReport_Setup ;
   test : R5_TestReport_Test [];
   teardown : R5_TestReport_Teardown ;
}
