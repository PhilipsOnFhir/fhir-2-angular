import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SupplyStatusEnum } from './DSTU2_SupplyStatusEnum'
import { DSTU2_Supply_Dispense } from './DSTU2_Supply_Dispense'

export class DSTU2_Supply      extends DSTU2_DomainResource
{

   static def : string = 'Supply';
   kind : DSTU2_CodeableConcept ;
   identifier : DSTU2_Identifier ;
   status : DSTU2_SupplyStatusEnum ;
   orderedItem : DSTU2_Reference ;
   patient : DSTU2_Reference ;
   dispense : DSTU2_Supply_Dispense [];
}
