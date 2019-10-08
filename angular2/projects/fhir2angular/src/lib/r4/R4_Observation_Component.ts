import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Observation_ReferenceRange } from './R4_Observation_ReferenceRange'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_Ratio } from './R4_Ratio'
import { R4_SampledData } from './R4_SampledData'

export class R4_Observation_Component      extends R4_BackboneElement
{

   static def : string = 'Observation_Component';
   code : R4_CodeableConcept ;
   valueQuantity : R4_Quantity ;
   valueCodeableConcept : R4_CodeableConcept ;
   valueString : string ;
   valueBoolean : boolean ;
   valueInteger : string ;
   valueRange : R4_Range ;
   valueRatio : R4_Ratio ;
   valueSampledData : R4_SampledData ;
   valueTime : string ;
   valueDateTime : string ;
   valuePeriod : R4_Period ;
   dataAbsentReason : R4_CodeableConcept ;
   interpretation : R4_CodeableConcept [];
   referenceRange : R4_Observation_ReferenceRange [];
}
