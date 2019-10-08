import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'
import { STU3_SupplyStatusEnum } from './STU3_SupplyStatusEnum'
import { STU3_Supply_Dispense } from './STU3_Supply_Dispense'

export class STU3_Supply      extends STU3_DomainResource
{

   static def : string = 'Supply';
   kind : STU3_CodeableConcept ;
   identifier : STU3_Identifier ;
   status : STU3_SupplyStatusEnum ;
   orderedItem : STU3_Reference ;
   patient : STU3_Reference ;
   dispense : STU3_Supply_Dispense [];
}
