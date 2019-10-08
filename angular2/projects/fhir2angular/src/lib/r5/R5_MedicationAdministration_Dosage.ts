import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_Ratio } from './R5_Ratio'

export class R5_MedicationAdministration_Dosage      extends R5_BackboneElement
{

   static def : string = 'MedicationAdministration_Dosage';
   text : string ;
   site : R5_CodeableConcept ;
   route : R5_CodeableConcept ;
   method : R5_CodeableConcept ;
   dose : R5_Quantity ;
   rateRatio : R5_Ratio ;
   rateQuantity : R5_Quantity ;
}
