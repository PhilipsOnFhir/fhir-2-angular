import { R5_ActionParticipantTypeEnum } from './R5_ActionParticipantTypeEnum'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_PlanDefinition_Participant      extends R5_BackboneElement
{

   static def : string = 'PlanDefinition_Participant';
   type : R5_ActionParticipantTypeEnum ;
   role : R5_CodeableConcept ;
}
