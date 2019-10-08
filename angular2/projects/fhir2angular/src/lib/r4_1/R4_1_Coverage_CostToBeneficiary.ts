import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coverage_Exception } from './R4_1_Coverage_Exception'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_Coverage_CostToBeneficiary      extends R4_1_BackboneElement
{

   static def : string = 'Coverage_CostToBeneficiary';
   type : R4_1_CodeableConcept ;
   valueQuantity : R4_1_Quantity ;
   valueMoney : R4_1_Money ;
   exception : R4_1_Coverage_Exception [];
}
