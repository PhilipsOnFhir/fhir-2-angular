import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ObservationStatusEnum } from './R4_1_ObservationStatusEnum'
import { R4_1_Observation_Component } from './R4_1_Observation_Component'
import { R4_1_Observation_ReferenceRange } from './R4_1_Observation_ReferenceRange'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Ratio } from './R4_1_Ratio'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_SampledData } from './R4_1_SampledData'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_Observation      extends R4_1_DomainResource
{

   static def : string = 'Observation';
   identifier : R4_1_Identifier [];
   basedOn : R4_1_Reference [];
   partOf : R4_1_Reference [];
   status : R4_1_ObservationStatusEnum ;
   category : R4_1_CodeableConcept [];
   code : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   focus : R4_1_Reference [];
   encounter : R4_1_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : R4_1_Period ;
   effectiveTiming : R4_1_Timing ;
   effectiveInstant : string ;
   issued : string ;
   performer : R4_1_Reference [];
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
   note : R4_1_Annotation [];
   bodySite : R4_1_CodeableConcept ;
   method : R4_1_CodeableConcept ;
   specimen : R4_1_Reference ;
   device : R4_1_Reference ;
   referenceRange : R4_1_Observation_ReferenceRange [];
   hasMember : R4_1_Reference [];
   derivedFrom : R4_1_Reference [];
   component : R4_1_Observation_Component [];
}
