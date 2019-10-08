import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicinalProductPharmaceutical_WithdrawalPeriod } from './R4_MedicinalProductPharmaceutical_WithdrawalPeriod'

export class R4_MedicinalProductPharmaceutical_TargetSpecies      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductPharmaceutical_TargetSpecies';
   code : R4_CodeableConcept ;
   withdrawalPeriod : R4_MedicinalProductPharmaceutical_WithdrawalPeriod [];
}
