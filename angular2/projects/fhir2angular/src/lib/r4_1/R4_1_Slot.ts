import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_SlotStatusEnum } from './R4_1_SlotStatusEnum'

export class R4_1_Slot      extends R4_1_DomainResource
{

   static def : string = 'Slot';
   identifier : R4_1_Identifier [];
   serviceCategory : R4_1_CodeableConcept [];
   serviceType : R4_1_CodeableConcept [];
   specialty : R4_1_CodeableConcept [];
   appointmentType : R4_1_CodeableConcept ;
   schedule : R4_1_Reference ;
   status : R4_1_SlotStatusEnum ;
   start : string ;
   end : string ;
   overbooked : boolean ;
   comment : string ;
}
