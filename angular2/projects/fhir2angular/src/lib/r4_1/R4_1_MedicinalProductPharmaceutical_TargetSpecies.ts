import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicinalProductPharmaceutical_WithdrawalPeriod } from './R4_1_MedicinalProductPharmaceutical_WithdrawalPeriod'

export class R4_1_MedicinalProductPharmaceutical_TargetSpecies      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductPharmaceutical_TargetSpecies';
   code : R4_1_CodeableConcept ;
   withdrawalPeriod : R4_1_MedicinalProductPharmaceutical_WithdrawalPeriod [];
}
