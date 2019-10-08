import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Dosage_DoseAndRate } from './R4_1_Dosage_DoseAndRate'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Ratio } from './R4_1_Ratio'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_Dosage      extends R4_1_BackboneElement
{

   static def : string = 'Dosage';
   sequence : string ;
   text : string ;
   additionalInstruction : R4_1_CodeableConcept [];
   patientInstruction : string ;
   timing : R4_1_Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : R4_1_CodeableConcept ;
   site : R4_1_CodeableConcept ;
   route : R4_1_CodeableConcept ;
   method : R4_1_CodeableConcept ;
   doseAndRate : R4_1_Dosage_DoseAndRate [];
   maxDosePerPeriod : R4_1_Ratio ;
   maxDosePerAdministration : R4_1_Quantity ;
   maxDosePerLifetime : R4_1_Quantity ;
}
