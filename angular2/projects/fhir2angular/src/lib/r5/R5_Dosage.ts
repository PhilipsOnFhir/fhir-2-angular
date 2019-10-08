import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Dosage_DoseAndRate } from './R5_Dosage_DoseAndRate'
import { R5_Quantity } from './R5_Quantity'
import { R5_Ratio } from './R5_Ratio'
import { R5_Timing } from './R5_Timing'

export class R5_Dosage      extends R5_BackboneElement
{

   static def : string = 'Dosage';
   sequence : string ;
   text : string ;
   additionalInstruction : R5_CodeableConcept [];
   patientInstruction : string ;
   timing : R5_Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : R5_CodeableConcept ;
   site : R5_CodeableConcept ;
   route : R5_CodeableConcept ;
   method : R5_CodeableConcept ;
   doseAndRate : R5_Dosage_DoseAndRate [];
   maxDosePerPeriod : R5_Ratio ;
   maxDosePerAdministration : R5_Quantity ;
   maxDosePerLifetime : R5_Quantity ;
}
