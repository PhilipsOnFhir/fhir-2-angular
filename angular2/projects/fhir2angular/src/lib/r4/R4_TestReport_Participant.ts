import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestReportParticipantTypeEnum } from './R4_TestReportParticipantTypeEnum'

export class R4_TestReport_Participant      extends R4_BackboneElement
{

   static def : string = 'TestReport_Participant';
   type : R4_TestReportParticipantTypeEnum ;
   uri : string ;
   display : string ;
}
