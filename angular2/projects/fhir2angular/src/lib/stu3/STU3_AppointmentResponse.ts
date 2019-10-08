import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ParticipationStatusEnum } from './STU3_ParticipationStatusEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_AppointmentResponse      extends STU3_DomainResource
{

   static def : string = 'AppointmentResponse';
   identifier : STU3_Identifier [];
   appointment : STU3_Reference ;
   start : string ;
   end : string ;
   participantType : STU3_CodeableConcept [];
   actor : STU3_Reference ;
   participantStatus : STU3_ParticipationStatusEnum ;
   comment : string ;
}
