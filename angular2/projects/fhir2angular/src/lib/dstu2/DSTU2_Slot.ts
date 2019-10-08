import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SlotStatusEnum } from './DSTU2_SlotStatusEnum'

export class DSTU2_Slot      extends DSTU2_DomainResource
{

   static def : string = 'Slot';
   identifier : DSTU2_Identifier [];
   type : DSTU2_CodeableConcept ;
   schedule : DSTU2_Reference ;
   freeBusyType : DSTU2_SlotStatusEnum ;
   start : string ;
   end : string ;
   overbooked : boolean ;
   comment : string ;
}
