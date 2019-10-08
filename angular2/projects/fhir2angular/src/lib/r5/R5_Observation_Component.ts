import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Observation_ReferenceRange } from './R5_Observation_ReferenceRange'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'
import { R5_Ratio } from './R5_Ratio'
import { R5_SampledData } from './R5_SampledData'

export class R5_Observation_Component      extends R5_BackboneElement
{

   static def : string = 'Observation_Component';
   code : R5_CodeableConcept ;
   valueQuantity : R5_Quantity ;
   valueCodeableConcept : R5_CodeableConcept ;
   valueString : string ;
   valueBoolean : boolean ;
   valueInteger : string ;
   valueRange : R5_Range ;
   valueRatio : R5_Ratio ;
   valueSampledData : R5_SampledData ;
   valueTime : string ;
   valueDateTime : string ;
   valuePeriod : R5_Period ;
   dataAbsentReason : R5_CodeableConcept ;
   interpretation : R5_CodeableConcept [];
   referenceRange : R5_Observation_ReferenceRange [];
}
