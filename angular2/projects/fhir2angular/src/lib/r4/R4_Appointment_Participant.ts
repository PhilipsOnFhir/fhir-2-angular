import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ParticipantRequiredEnum } from './R4_ParticipantRequiredEnum'
import { R4_ParticipationStatusEnum } from './R4_ParticipationStatusEnum'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Appointment_Participant      extends R4_BackboneElement
{

   static def : string = 'Appointment_Participant';
   type : R4_CodeableConcept [];
   actor : R4_Reference ;
   required : R4_ParticipantRequiredEnum ;
   status : R4_ParticipationStatusEnum ;
   period : R4_Period ;
}
