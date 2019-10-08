import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'
import { R4_SupplyStatusEnum } from './R4_SupplyStatusEnum'
import { R4_Supply_Dispense } from './R4_Supply_Dispense'

export class R4_Supply      extends R4_DomainResource
{

   static def : string = 'Supply';
   kind : R4_CodeableConcept ;
   identifier : R4_Identifier ;
   status : R4_SupplyStatusEnum ;
   orderedItem : R4_Reference ;
   patient : R4_Reference ;
   dispense : R4_Supply_Dispense [];
}
