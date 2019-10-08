import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Quantity } from './DSTU2_Quantity'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SupplyDispenseStatusEnum } from './DSTU2_SupplyDispenseStatusEnum'

export class DSTU2_Supply_Dispense      extends DSTU2_BackboneElement
{

   static def : string = 'Supply_Dispense';
   identifier : DSTU2_Identifier ;
   status : DSTU2_SupplyDispenseStatusEnum ;
   type : DSTU2_CodeableConcept ;
   quantity : DSTU2_Quantity ;
   suppliedItem : DSTU2_Reference ;
   supplier : DSTU2_Reference ;
   whenPrepared : DSTU2_Period ;
   whenHandedOver : string ;
   destination : DSTU2_Reference ;
   receiver : DSTU2_Reference [];
}
