import { STU3_Attachment } from './STU3_Attachment'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Observation_ReferenceRange } from './STU3_Observation_ReferenceRange'
import { STU3_Period } from './STU3_Period'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Range } from './STU3_Range'
import { STU3_Ratio } from './STU3_Ratio'
import { STU3_SampledData } from './STU3_SampledData'

export class STU3_Observation_Component      extends STU3_BackboneElement
{

   static def : string = 'Observation_Component';
   code : STU3_CodeableConcept ;
   valueQuantity : STU3_Quantity ;
   valueCodeableConcept : STU3_CodeableConcept ;
   valueString : string ;
   valueRange : STU3_Range ;
   valueRatio : STU3_Ratio ;
   valueSampledData : STU3_SampledData ;
   valueAttachment : STU3_Attachment ;
   valueTime : string ;
   valueDateTime : string ;
   valuePeriod : STU3_Period ;
   dataAbsentReason : STU3_CodeableConcept ;
   interpretation : STU3_CodeableConcept ;
   referenceRange : STU3_Observation_ReferenceRange [];
}
