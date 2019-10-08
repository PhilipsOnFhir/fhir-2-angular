import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ObservationStatusEnum } from './STU3_ObservationStatusEnum'
import { STU3_Observation_Component } from './STU3_Observation_Component'
import { STU3_Observation_ReferenceRange } from './STU3_Observation_ReferenceRange'
import { STU3_Observation_Related } from './STU3_Observation_Related'
import { STU3_Period } from './STU3_Period'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Range } from './STU3_Range'
import { STU3_Ratio } from './STU3_Ratio'
import { STU3_Reference } from './STU3_Reference'
import { STU3_SampledData } from './STU3_SampledData'

export class STU3_Observation      extends STU3_DomainResource
{

   static def : string = 'Observation';
   identifier : STU3_Identifier [];
   basedOn : STU3_Reference [];
   status : STU3_ObservationStatusEnum ;
   category : STU3_CodeableConcept [];
   code : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : STU3_Period ;
   issued : string ;
   performer : STU3_Reference [];
   valueQuantity : STU3_Quantity ;
   valueCodeableConcept : STU3_CodeableConcept ;
   valueString : string ;
   valueBoolean : boolean ;
   valueRange : STU3_Range ;
   valueRatio : STU3_Ratio ;
   valueSampledData : STU3_SampledData ;
   valueAttachment : STU3_Attachment ;
   valueTime : string ;
   valueDateTime : string ;
   valuePeriod : STU3_Period ;
   dataAbsentReason : STU3_CodeableConcept ;
   interpretation : STU3_CodeableConcept ;
   comment : string ;
   bodySite : STU3_CodeableConcept ;
   method : STU3_CodeableConcept ;
   specimen : STU3_Reference ;
   device : STU3_Reference ;
   referenceRange : STU3_Observation_ReferenceRange [];
   related : STU3_Observation_Related [];
   component : STU3_Observation_Component [];
}
