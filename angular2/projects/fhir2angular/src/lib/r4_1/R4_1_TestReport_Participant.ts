import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TestReportParticipantTypeEnum } from './R4_1_TestReportParticipantTypeEnum'

export class R4_1_TestReport_Participant      extends R4_1_BackboneElement
{

   static def : string = 'TestReport_Participant';
   type : R4_1_TestReportParticipantTypeEnum ;
   uri : string ;
   display : string ;
}
