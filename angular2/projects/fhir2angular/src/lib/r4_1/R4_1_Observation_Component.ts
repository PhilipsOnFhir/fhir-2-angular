import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Observation_ReferenceRange } from './R4_1_Observation_ReferenceRange'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Ratio } from './R4_1_Ratio'
import { R4_1_SampledData } from './R4_1_SampledData'

export class R4_1_Observation_Component      extends R4_1_BackboneElement
{

   static def : string = 'Observation_Component';
   code : R4_1_CodeableConcept ;
   valueQuantity : R4_1_Quantity ;
   valueCodeableConcept : R4_1_CodeableConcept ;
   valueString : string ;
   valueBoolean : boolean ;
   valueInteger : string ;
   valueRange : R4_1_Range ;
   valueRatio : R4_1_Ratio ;
   valueSampledData : R4_1_SampledData ;
   valueTime : string ;
   valueDateTime : string ;
   valuePeriod : R4_1_Period ;
   dataAbsentReason : R4_1_CodeableConcept ;
   interpretation : R4_1_CodeableConcept [];
   referenceRange : R4_1_Observation_ReferenceRange [];
}
