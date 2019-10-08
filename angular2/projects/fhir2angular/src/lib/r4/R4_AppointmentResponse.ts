import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ParticipationStatusEnum } from './R4_ParticipationStatusEnum'
import { R4_Reference } from './R4_Reference'

export class R4_AppointmentResponse      extends R4_DomainResource
{

   static def : string = 'AppointmentResponse';
   identifier : R4_Identifier [];
   appointment : R4_Reference ;
   start : string ;
   end : string ;
   participantType : R4_CodeableConcept [];
   actor : R4_Reference ;
   participantStatus : R4_ParticipationStatusEnum ;
   comment : string ;
}
