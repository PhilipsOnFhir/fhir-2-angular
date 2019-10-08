import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Quantity } from './DSTU2_Quantity'
import { DSTU2_Range } from './DSTU2_Range'
import { DSTU2_Ratio } from './DSTU2_Ratio'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_MedicationPrescription_DosageInstruction      extends DSTU2_BackboneElement
{

   static def : string = 'MedicationPrescription_DosageInstruction';
   text : string ;
   additionalInstructions : DSTU2_CodeableConcept ;
   timing : DSTU2_Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : DSTU2_CodeableConcept ;
   site : DSTU2_CodeableConcept ;
   route : DSTU2_CodeableConcept ;
   method : DSTU2_CodeableConcept ;
   doseRange : DSTU2_Range ;
   doseQuantity : DSTU2_SimpleQuantity ;
   rateRatio : DSTU2_Ratio ;
   rateQuantity : DSTU2_Quantity ;
   rateRange : DSTU2_Range ;
   maxDosePerPeriod : DSTU2_Ratio ;
}
