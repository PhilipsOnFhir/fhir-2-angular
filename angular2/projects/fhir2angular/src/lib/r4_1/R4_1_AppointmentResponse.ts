import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ParticipationStatusEnum } from './R4_1_ParticipationStatusEnum'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_AppointmentResponse      extends R4_1_DomainResource
{

   static def : string = 'AppointmentResponse';
   identifier : R4_1_Identifier [];
   appointment : R4_1_Reference ;
   start : string ;
   end : string ;
   participantType : R4_1_CodeableConcept [];
   actor : R4_1_Reference ;
   participantStatus : R4_1_ParticipationStatusEnum ;
   comment : string ;
}
