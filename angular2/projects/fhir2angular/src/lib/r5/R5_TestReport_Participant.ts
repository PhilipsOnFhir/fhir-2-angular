import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestReportParticipantTypeEnum } from './R5_TestReportParticipantTypeEnum'

export class R5_TestReport_Participant      extends R5_BackboneElement
{

   static def : string = 'TestReport_Participant';
   type : R5_TestReportParticipantTypeEnum ;
   uri : string ;
   display : string ;
}
