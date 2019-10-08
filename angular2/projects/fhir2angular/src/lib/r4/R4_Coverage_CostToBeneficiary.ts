import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coverage_Exception } from './R4_Coverage_Exception'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Money } from './R4_Money'
import { R4_Quantity } from './R4_Quantity'

export class R4_Coverage_CostToBeneficiary      extends R4_BackboneElement
{

   static def : string = 'Coverage_CostToBeneficiary';
   type : R4_CodeableConcept ;
   valueQuantity : R4_Quantity ;
   valueMoney : R4_Money ;
   exception : R4_Coverage_Exception [];
}
