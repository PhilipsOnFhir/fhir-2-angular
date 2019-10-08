import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ObservationStatusEnum } from './R4_ObservationStatusEnum'
import { R4_Observation_Component } from './R4_Observation_Component'
import { R4_Observation_ReferenceRange } from './R4_Observation_ReferenceRange'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_Ratio } from './R4_Ratio'
import { R4_Reference } from './R4_Reference'
import { R4_SampledData } from './R4_SampledData'
import { R4_Timing } from './R4_Timing'

export class R4_Observation      extends R4_DomainResource
{

   static def : string = 'Observation';
   identifier : R4_Identifier [];
   basedOn : R4_Reference [];
   partOf : R4_Reference [];
   status : R4_ObservationStatusEnum ;
   category : R4_CodeableConcept [];
   code : R4_CodeableConcept ;
   subject : R4_Reference ;
   focus : R4_Reference [];
   encounter : R4_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : R4_Period ;
   effectiveTiming : R4_Timing ;
   effectiveInstant : string ;
   issued : string ;
   performer : R4_Reference [];
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
   note : R4_Annotation [];
   bodySite : R4_CodeableConcept ;
   method : R4_CodeableConcept ;
   specimen : R4_Reference ;
   device : R4_Reference ;
   referenceRange : R4_Observation_ReferenceRange [];
   hasMember : R4_Reference [];
   derivedFrom : R4_Reference [];
   component : R4_Observation_Component [];
}
