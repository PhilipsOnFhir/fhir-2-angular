import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Ratio } from './STU3_Ratio'

export class STU3_MedicationAdministration_Dosage      extends STU3_BackboneElement
{

   static def : string = 'MedicationAdministration_Dosage';
   text : string ;
   site : STU3_CodeableConcept ;
   route : STU3_CodeableConcept ;
   method : STU3_CodeableConcept ;
   dose : STU3_Quantity ;
   rateRatio : STU3_Ratio ;
   rateQuantity : STU3_Quantity ;
}
