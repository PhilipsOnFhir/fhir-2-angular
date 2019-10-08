import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'
import { R4_TestReportResultEnum } from './R4_TestReportResultEnum'
import { R4_TestReportStatusEnum } from './R4_TestReportStatusEnum'
import { R4_TestReport_Participant } from './R4_TestReport_Participant'
import { R4_TestReport_Setup } from './R4_TestReport_Setup'
import { R4_TestReport_Teardown } from './R4_TestReport_Teardown'
import { R4_TestReport_Test } from './R4_TestReport_Test'

export class R4_TestReport      extends R4_DomainResource
{

   static def : string = 'TestReport';
   identifier : R4_Identifier ;
   name : string ;
   status : R4_TestReportStatusEnum ;
   testScript : R4_Reference ;
   result : R4_TestReportResultEnum ;
   score : string ;
   tester : string ;
   issued : string ;
   participant : R4_TestReport_Participant [];
   setup : R4_TestReport_Setup ;
   test : R4_TestReport_Test [];
   teardown : R4_TestReport_Teardown ;
}
