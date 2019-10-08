import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'
import { STU3_SupplyDispenseStatusEnum } from './STU3_SupplyDispenseStatusEnum'

export class STU3_Supply_Dispense      extends STU3_BackboneElement
{

   static def : string = 'Supply_Dispense';
   identifier : STU3_Identifier ;
   status : STU3_SupplyDispenseStatusEnum ;
   type : STU3_CodeableConcept ;
   quantity : STU3_Quantity ;
   suppliedItem : STU3_Reference ;
   supplier : STU3_Reference ;
   whenPrepared : STU3_Period ;
   whenHandedOver : string ;
   destination : STU3_Reference ;
   receiver : STU3_Reference [];
}
