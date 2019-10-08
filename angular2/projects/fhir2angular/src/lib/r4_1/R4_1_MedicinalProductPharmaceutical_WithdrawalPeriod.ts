import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_MedicinalProductPharmaceutical_WithdrawalPeriod      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductPharmaceutical_WithdrawalPeriod';
   tissue : R4_1_CodeableConcept ;
   value : R4_1_Quantity ;
   supportingInformation : string ;
}
