import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestReportParticipantTypeEnum } from './STU3_TestReportParticipantTypeEnum'

export class STU3_TestReport_Participant      extends STU3_BackboneElement
{

   static def : string = 'TestReport_Participant';
   type : STU3_TestReportParticipantTypeEnum ;
   uri : string ;
   display : string ;
}
