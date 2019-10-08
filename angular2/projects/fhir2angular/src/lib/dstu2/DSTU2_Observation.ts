import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_ObservationStatusEnum } from './DSTU2_ObservationStatusEnum'
import { DSTU2_Observation_Component } from './DSTU2_Observation_Component'
import { DSTU2_Observation_ReferenceRange } from './DSTU2_Observation_ReferenceRange'
import { DSTU2_Observation_Related } from './DSTU2_Observation_Related'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Quantity } from './DSTU2_Quantity'
import { DSTU2_Range } from './DSTU2_Range'
import { DSTU2_Ratio } from './DSTU2_Ratio'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SampledData } from './DSTU2_SampledData'

export class DSTU2_Observation      extends DSTU2_DomainResource
{

   static def : string = 'Observation';
   identifier : DSTU2_Identifier [];
   status : DSTU2_ObservationStatusEnum ;
   category : DSTU2_CodeableConcept ;
   code : DSTU2_CodeableConcept ;
   subject : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : DSTU2_Period ;
   issued : string ;
   performer : DSTU2_Reference [];
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
   interpretation : DSTU2_CodeableConcept ;
   comments : string ;
   bodySite : DSTU2_CodeableConcept ;
   method : DSTU2_CodeableConcept ;
   specimen : DSTU2_Reference ;
   device : DSTU2_Reference ;
   referenceRange : DSTU2_Observation_ReferenceRange [];
   related : DSTU2_Observation_Related [];
   component : DSTU2_Observation_Component [];
}
