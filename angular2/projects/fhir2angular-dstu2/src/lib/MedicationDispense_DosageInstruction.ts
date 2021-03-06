import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Range } from './Range'
import { Ratio } from './Ratio'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'
import { Timing } from './Timing'

export class MedicationDispense_DosageInstruction      extends BackboneElement
{

   static def : string = 'MedicationDispense_DosageInstruction';
   text : string ;
   additionalInstructions : CodeableConcept ;
   timing : Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : CodeableConcept ;
   siteCodeableConcept : CodeableConcept ;
   siteReference : Reference ;
   route : CodeableConcept ;
   method : CodeableConcept ;
   doseRange : Range ;
   doseQuantity : SimpleQuantity ;
   rateRatio : Ratio ;
   rateRange : Range ;
   maxDosePerPeriod : Ratio ;
}
