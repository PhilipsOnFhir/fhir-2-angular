import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicinalProductPharmaceutical_TargetSpecies } from './R5_MedicinalProductPharmaceutical_TargetSpecies'
import { R5_Quantity } from './R5_Quantity'
import { R5_Ratio } from './R5_Ratio'

export class R5_MedicinalProductPharmaceutical_RouteOfAdministration      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductPharmaceutical_RouteOfAdministration';
   code : R5_CodeableConcept ;
   firstDose : R5_Quantity ;
   maxSingleDose : R5_Quantity ;
   maxDosePerDay : R5_Quantity ;
   maxDosePerTreatmentPeriod : R5_Ratio ;
   maxTreatmentPeriod : string ;
   targetSpecies : R5_MedicinalProductPharmaceutical_TargetSpecies [];
}
