import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'
import { R4_SupplyDispenseStatusEnum } from './R4_SupplyDispenseStatusEnum'

export class R4_Supply_Dispense      extends R4_BackboneElement
{

   static def : string = 'Supply_Dispense';
   identifier : R4_Identifier ;
   status : R4_SupplyDispenseStatusEnum ;
   type : R4_CodeableConcept ;
   quantity : R4_Quantity ;
   suppliedItem : R4_Reference ;
   supplier : R4_Reference ;
   whenPrepared : R4_Period ;
   whenHandedOver : string ;
   destination : R4_Reference ;
   receiver : R4_Reference [];
}
