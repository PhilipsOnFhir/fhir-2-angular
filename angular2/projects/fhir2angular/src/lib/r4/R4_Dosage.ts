import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Dosage_DoseAndRate } from './R4_Dosage_DoseAndRate'
import { R4_Quantity } from './R4_Quantity'
import { R4_Ratio } from './R4_Ratio'
import { R4_Timing } from './R4_Timing'

export class R4_Dosage      extends R4_BackboneElement
{

   static def : string = 'Dosage';
   sequence : string ;
   text : string ;
   additionalInstruction : R4_CodeableConcept [];
   patientInstruction : string ;
   timing : R4_Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : R4_CodeableConcept ;
   site : R4_CodeableConcept ;
   route : R4_CodeableConcept ;
   method : R4_CodeableConcept ;
   doseAndRate : R4_Dosage_DoseAndRate [];
   maxDosePerPeriod : R4_Ratio ;
   maxDosePerAdministration : R4_Quantity ;
   maxDosePerLifetime : R4_Quantity ;
}
