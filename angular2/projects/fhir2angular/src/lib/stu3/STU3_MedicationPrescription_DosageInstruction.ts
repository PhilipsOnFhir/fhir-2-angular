import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Range } from './STU3_Range'
import { STU3_Ratio } from './STU3_Ratio'
import { STU3_Timing } from './STU3_Timing'

export class STU3_MedicationPrescription_DosageInstruction      extends STU3_BackboneElement
{

   static def : string = 'MedicationPrescription_DosageInstruction';
   text : string ;
   additionalInstructions : STU3_CodeableConcept ;
   timing : STU3_Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : STU3_CodeableConcept ;
   site : STU3_CodeableConcept ;
   route : STU3_CodeableConcept ;
   method : STU3_CodeableConcept ;
   doseRange : STU3_Range ;
   doseQuantity : string ;
   rateRatio : STU3_Ratio ;
   rateQuantity : STU3_Quantity ;
   rateRange : STU3_Range ;
   maxDosePerPeriod : STU3_Ratio ;
}
