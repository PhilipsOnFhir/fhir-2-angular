import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coverage_Exception } from './R5_Coverage_Exception'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Money } from './R5_Money'
import { R5_Quantity } from './R5_Quantity'

export class R5_Coverage_CostToBeneficiary      extends R5_BackboneElement
{

   static def : string = 'Coverage_CostToBeneficiary';
   type : R5_CodeableConcept ;
   valueQuantity : R5_Quantity ;
   valueMoney : R5_Money ;
   exception : R5_Coverage_Exception [];
}
