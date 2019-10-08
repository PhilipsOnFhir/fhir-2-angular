import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Range } from './DSTU2_Range'
import { DSTU2_Ratio } from './DSTU2_Ratio'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_MedicationAdministration_Dosage      extends DSTU2_BackboneElement
{

   static def : string = 'MedicationAdministration_Dosage';
   text : string ;
   siteCodeableConcept : DSTU2_CodeableConcept ;
   siteReference : DSTU2_Reference ;
   route : DSTU2_CodeableConcept ;
   method : DSTU2_CodeableConcept ;
   quantity : DSTU2_SimpleQuantity ;
   rateRatio : DSTU2_Ratio ;
   rateRange : DSTU2_Range ;
}
