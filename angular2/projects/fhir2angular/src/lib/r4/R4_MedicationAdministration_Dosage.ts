import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_Ratio } from './R4_Ratio'

export class R4_MedicationAdministration_Dosage      extends R4_BackboneElement
{

   static def : string = 'MedicationAdministration_Dosage';
   text : string ;
   site : R4_CodeableConcept ;
   route : R4_CodeableConcept ;
   method : R4_CodeableConcept ;
   dose : R4_Quantity ;
   rateRatio : R4_Ratio ;
   rateQuantity : R4_Quantity ;
}
