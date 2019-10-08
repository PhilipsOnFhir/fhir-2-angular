import { STU3_ActionParticipantTypeEnum } from './STU3_ActionParticipantTypeEnum'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ActivityDefinition_Participant      extends STU3_BackboneElement
{

   static def : string = 'ActivityDefinition_Participant';
   type : STU3_ActionParticipantTypeEnum ;
   role : STU3_CodeableConcept ;
}
