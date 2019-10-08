import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'
import { R5_SlotStatusEnum } from './R5_SlotStatusEnum'

export class R5_Slot      extends R5_DomainResource
{

   static def : string = 'Slot';
   identifier : R5_Identifier [];
   serviceCategory : R5_CodeableConcept [];
   serviceType : R5_CodeableConcept [];
   specialty : R5_CodeableConcept [];
   appointmentType : R5_CodeableConcept ;
   schedule : R5_Reference ;
   status : R5_SlotStatusEnum ;
   start : string ;
   end : string ;
   overbooked : boolean ;
   comment : string ;
}
