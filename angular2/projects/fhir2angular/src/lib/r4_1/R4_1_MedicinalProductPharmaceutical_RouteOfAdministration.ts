import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicinalProductPharmaceutical_TargetSpecies } from './R4_1_MedicinalProductPharmaceutical_TargetSpecies'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Ratio } from './R4_1_Ratio'

export class R4_1_MedicinalProductPharmaceutical_RouteOfAdministration      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductPharmaceutical_RouteOfAdministration';
   code : R4_1_CodeableConcept ;
   firstDose : R4_1_Quantity ;
   maxSingleDose : R4_1_Quantity ;
   maxDosePerDay : R4_1_Quantity ;
   maxDosePerTreatmentPeriod : R4_1_Ratio ;
   maxTreatmentPeriod : string ;
   targetSpecies : R4_1_MedicinalProductPharmaceutical_TargetSpecies [];
}
