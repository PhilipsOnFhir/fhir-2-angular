import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Range } from './STU3_Range'
import { STU3_Ratio } from './STU3_Ratio'
import { STU3_Timing } from './STU3_Timing'

export class STU3_Dosage      extends STU3_Element
{

   static def : string = 'Dosage';
   sequence : string ;
   text : string ;
   additionalInstruction : STU3_CodeableConcept [];
   patientInstruction : string ;
   timing : STU3_Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : STU3_CodeableConcept ;
   site : STU3_CodeableConcept ;
   route : STU3_CodeableConcept ;
   method : STU3_CodeableConcept ;
   doseRange : STU3_Range ;
   doseQuantity : STU3_Quantity ;
   maxDosePerPeriod : STU3_Ratio ;
   maxDosePerAdministration : STU3_Quantity ;
   maxDosePerLifetime : STU3_Quantity ;
   rateRatio : STU3_Ratio ;
   rateRange : STU3_Range ;
   rateQuantity : STU3_Quantity ;
}
