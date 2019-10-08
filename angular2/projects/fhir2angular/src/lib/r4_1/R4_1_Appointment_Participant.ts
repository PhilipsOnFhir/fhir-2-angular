import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ParticipantRequiredEnum } from './R4_1_ParticipantRequiredEnum'
import { R4_1_ParticipationStatusEnum } from './R4_1_ParticipationStatusEnum'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Appointment_Participant      extends R4_1_BackboneElement
{

   static def : string = 'Appointment_Participant';
   type : R4_1_CodeableConcept [];
   actor : R4_1_Reference ;
   required : R4_1_ParticipantRequiredEnum ;
   status : R4_1_ParticipationStatusEnum ;
   period : R4_1_Period ;
}
