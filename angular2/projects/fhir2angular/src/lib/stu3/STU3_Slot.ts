import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'
import { STU3_SlotStatusEnum } from './STU3_SlotStatusEnum'

export class STU3_Slot      extends STU3_DomainResource
{

   static def : string = 'Slot';
   identifier : STU3_Identifier [];
   serviceCategory : STU3_CodeableConcept ;
   serviceType : STU3_CodeableConcept [];
   specialty : STU3_CodeableConcept [];
   appointmentType : STU3_CodeableConcept ;
   schedule : STU3_Reference ;
   status : STU3_SlotStatusEnum ;
   start : string ;
   end : string ;
   overbooked : boolean ;
   comment : string ;
}
