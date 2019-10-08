import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ParticipantRequiredEnum } from './R5_ParticipantRequiredEnum'
import { R5_ParticipationStatusEnum } from './R5_ParticipationStatusEnum'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Appointment_Participant      extends R5_BackboneElement
{

   static def : string = 'Appointment_Participant';
   type : R5_CodeableConcept [];
   actor : R5_Reference ;
   required : R5_ParticipantRequiredEnum ;
   status : R5_ParticipationStatusEnum ;
   period : R5_Period ;
}
