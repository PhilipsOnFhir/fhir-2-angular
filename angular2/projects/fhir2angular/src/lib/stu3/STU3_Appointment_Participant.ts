import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ParticipantRequiredEnum } from './STU3_ParticipantRequiredEnum'
import { STU3_ParticipationStatusEnum } from './STU3_ParticipationStatusEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Appointment_Participant      extends STU3_BackboneElement
{

   static def : string = 'Appointment_Participant';
   type : STU3_CodeableConcept [];
   actor : STU3_Reference ;
   required : STU3_ParticipantRequiredEnum ;
   status : STU3_ParticipationStatusEnum ;
}
