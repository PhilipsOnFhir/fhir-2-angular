import { R4_1_ActionParticipantTypeEnum } from './R4_1_ActionParticipantTypeEnum'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_PlanDefinition_Participant      extends R4_1_BackboneElement
{

   static def : string = 'PlanDefinition_Participant';
   type : R4_1_ActionParticipantTypeEnum ;
   role : R4_1_CodeableConcept ;
}
