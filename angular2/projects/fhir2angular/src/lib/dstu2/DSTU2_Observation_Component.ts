import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Observation_ReferenceRange } from './DSTU2_Observation_ReferenceRange'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Quantity } from './DSTU2_Quantity'
import { DSTU2_Range } from './DSTU2_Range'
import { DSTU2_Ratio } from './DSTU2_Ratio'
import { DSTU2_SampledData } from './DSTU2_SampledData'

export class DSTU2_Observation_Component      extends DSTU2_BackboneElement
{

   static def : string = 'Observation_Component';
   code : DSTU2_CodeableConcept ;
   valueQuantity : DSTU2_Quantity ;
   valueCodeableConcept : DSTU2_CodeableConcept ;
   valueString : string ;
   valueRange : DSTU2_Range ;
   valueRatio : DSTU2_Ratio ;
   valueSampledData : DSTU2_SampledData ;
   valueAttachment : DSTU2_Attachment ;
   valueTime : string ;
   valueDateTime : string ;
   valuePeriod : DSTU2_Period ;
   dataAbsentReason : DSTU2_CodeableConcept ;
   referenceRange : DSTU2_Observation_ReferenceRange [];
}
