import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicinalProductPharmaceutical_TargetSpecies } from './R4_MedicinalProductPharmaceutical_TargetSpecies'
import { R4_Quantity } from './R4_Quantity'
import { R4_Ratio } from './R4_Ratio'

export class R4_MedicinalProductPharmaceutical_RouteOfAdministration      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductPharmaceutical_RouteOfAdministration';
   code : R4_CodeableConcept ;
   firstDose : R4_Quantity ;
   maxSingleDose : R4_Quantity ;
   maxDosePerDay : R4_Quantity ;
   maxDosePerTreatmentPeriod : R4_Ratio ;
   maxTreatmentPeriod : string ;
   targetSpecies : R4_MedicinalProductPharmaceutical_TargetSpecies [];
}
