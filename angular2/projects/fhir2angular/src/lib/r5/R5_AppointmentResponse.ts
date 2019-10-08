import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_ParticipationStatusEnum } from './R5_ParticipationStatusEnum'
import { R5_Reference } from './R5_Reference'

export class R5_AppointmentResponse      extends R5_DomainResource
{

   static def : string = 'AppointmentResponse';
   identifier : R5_Identifier [];
   appointment : R5_Reference ;
   start : string ;
   end : string ;
   participantType : R5_CodeableConcept [];
   actor : R5_Reference ;
   participantStatus : R5_ParticipationStatusEnum ;
   comment : string ;
}
