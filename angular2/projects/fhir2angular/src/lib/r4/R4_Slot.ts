import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'
import { R4_SlotStatusEnum } from './R4_SlotStatusEnum'

export class R4_Slot      extends R4_DomainResource
{

   static def : string = 'Slot';
   identifier : R4_Identifier [];
   serviceCategory : R4_CodeableConcept [];
   serviceType : R4_CodeableConcept [];
   specialty : R4_CodeableConcept [];
   appointmentType : R4_CodeableConcept ;
   schedule : R4_Reference ;
   status : R4_SlotStatusEnum ;
   start : string ;
   end : string ;
   overbooked : boolean ;
   comment : string ;
}
