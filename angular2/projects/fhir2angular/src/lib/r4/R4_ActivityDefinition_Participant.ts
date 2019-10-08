import { R4_ActionParticipantTypeEnum } from './R4_ActionParticipantTypeEnum'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ActivityDefinition_Participant      extends R4_BackboneElement
{

   static def : string = 'ActivityDefinition_Participant';
   type : R4_ActionParticipantTypeEnum ;
   role : R4_CodeableConcept ;
}
