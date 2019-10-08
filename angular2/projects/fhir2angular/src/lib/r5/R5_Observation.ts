import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_ObservationStatusEnum } from './R5_ObservationStatusEnum'
import { R5_Observation_Component } from './R5_Observation_Component'
import { R5_Observation_ReferenceRange } from './R5_Observation_ReferenceRange'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'
import { R5_Ratio } from './R5_Ratio'
import { R5_Reference } from './R5_Reference'
import { R5_SampledData } from './R5_SampledData'
import { R5_Timing } from './R5_Timing'

export class R5_Observation      extends R5_DomainResource
{

   static def : string = 'Observation';
   identifier : R5_Identifier [];
   basedOn : R5_Reference [];
   partOf : R5_Reference [];
   status : R5_ObservationStatusEnum ;
   category : R5_CodeableConcept [];
   code : R5_CodeableConcept ;
   subject : R5_Reference ;
   focus : R5_Reference [];
   encounter : R5_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : R5_Period ;
   effectiveTiming : R5_Timing ;
   effectiveInstant : string ;
   issued : string ;
   performer : R5_Reference [];
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
   note : R5_Annotation [];
   bodySite : R5_CodeableConcept ;
   method : R5_CodeableConcept ;
   specimen : R5_Reference ;
   device : R5_Reference ;
   referenceRange : R5_Observation_ReferenceRange [];
   hasMember : R5_Reference [];
   derivedFrom : R5_Reference [];
   component : R5_Observation_Component [];
}
