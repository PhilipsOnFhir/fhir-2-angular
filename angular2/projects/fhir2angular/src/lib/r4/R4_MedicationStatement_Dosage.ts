import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Range } from './R4_Range'
import { R4_Ratio } from './R4_Ratio'
import { R4_Reference } from './R4_Reference'
import { R4_SimpleQuantity } from './R4_SimpleQuantity'
import { R4_Timing } from './R4_Timing'

export class R4_MedicationStatement_Dosage      extends R4_BackboneElement
{

   static def : string = 'MedicationStatement_Dosage';
   text : string ;
   timing : R4_Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : R4_CodeableConcept ;
   siteCodeableConcept : R4_CodeableConcept ;
   siteReference : R4_Reference ;
   route : R4_CodeableConcept ;
   method : R4_CodeableConcept ;
   quantityQuantity : R4_SimpleQuantity ;
   quantityRange : R4_Range ;
   rateRatio : R4_Ratio ;
   rateRange : R4_Range ;
   maxDosePerPeriod : R4_Ratio ;
}
