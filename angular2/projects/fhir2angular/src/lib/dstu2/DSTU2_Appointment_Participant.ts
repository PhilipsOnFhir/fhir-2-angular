import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ParticipantRequiredEnum } from './DSTU2_ParticipantRequiredEnum'
import { DSTU2_ParticipationStatusEnum } from './DSTU2_ParticipationStatusEnum'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Appointment_Participant      extends DSTU2_BackboneElement
{

   static def : string = 'Appointment_Participant';
   type : DSTU2_CodeableConcept [];
   actor : DSTU2_Reference ;
   required : DSTU2_ParticipantRequiredEnum ;
   status : DSTU2_ParticipationStatusEnum ;
}
