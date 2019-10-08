import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_ParticipantStatusEnum } from './DSTU2_ParticipantStatusEnum'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_AppointmentResponse      extends DSTU2_DomainResource
{

   static def : string = 'AppointmentResponse';
   identifier : DSTU2_Identifier [];
   appointment : DSTU2_Reference ;
   start : string ;
   end : string ;
   participantType : DSTU2_CodeableConcept [];
   actor : DSTU2_Reference ;
   participantStatus : DSTU2_ParticipantStatusEnum ;
   comment : string ;
}
