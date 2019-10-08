import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Ratio } from './R4_1_Ratio'

export class R4_1_MedicationAdministration_Dosage      extends R4_1_BackboneElement
{

   static def : string = 'MedicationAdministration_Dosage';
   text : string ;
   site : R4_1_CodeableConcept ;
   route : R4_1_CodeableConcept ;
   method : R4_1_CodeableConcept ;
   dose : R4_1_Quantity ;
   rateRatio : R4_1_Ratio ;
   rateQuantity : R4_1_Quantity ;
}
