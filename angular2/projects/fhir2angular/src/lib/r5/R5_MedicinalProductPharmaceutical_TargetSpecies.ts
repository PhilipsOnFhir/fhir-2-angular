import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicinalProductPharmaceutical_WithdrawalPeriod } from './R5_MedicinalProductPharmaceutical_WithdrawalPeriod'

export class R5_MedicinalProductPharmaceutical_TargetSpecies      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductPharmaceutical_TargetSpecies';
   code : R5_CodeableConcept ;
   withdrawalPeriod : R5_MedicinalProductPharmaceutical_WithdrawalPeriod [];
}
