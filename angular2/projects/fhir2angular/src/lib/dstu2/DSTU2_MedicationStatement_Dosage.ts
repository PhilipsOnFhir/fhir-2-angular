import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Range } from './DSTU2_Range'
import { DSTU2_Ratio } from './DSTU2_Ratio'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_MedicationStatement_Dosage      extends DSTU2_BackboneElement
{

   static def : string = 'MedicationStatement_Dosage';
   text : string ;
   timing : DSTU2_Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : DSTU2_CodeableConcept ;
   siteCodeableConcept : DSTU2_CodeableConcept ;
   siteReference : DSTU2_Reference ;
   route : DSTU2_CodeableConcept ;
   method : DSTU2_CodeableConcept ;
   quantityQuantity : DSTU2_SimpleQuantity ;
   quantityRange : DSTU2_Range ;
   rateRatio : DSTU2_Ratio ;
   rateRange : DSTU2_Range ;
   maxDosePerPeriod : DSTU2_Ratio ;
}
