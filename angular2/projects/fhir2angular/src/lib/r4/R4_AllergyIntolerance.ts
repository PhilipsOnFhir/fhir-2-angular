import { R4_AllergyIntoleranceCategoryEnum } from './R4_AllergyIntoleranceCategoryEnum'
import { R4_AllergyIntoleranceCriticalityEnum } from './R4_AllergyIntoleranceCriticalityEnum'
import { R4_AllergyIntoleranceTypeEnum } from './R4_AllergyIntoleranceTypeEnum'
import { R4_AllergyIntolerance_Reaction } from './R4_AllergyIntolerance_Reaction'
import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Range } from './R4_Range'
import { R4_Reference } from './R4_Reference'

export class R4_AllergyIntolerance      extends R4_DomainResource
{

   static def : string = 'AllergyIntolerance';
   identifier : R4_Identifier [];
   clinicalStatus : R4_CodeableConcept ;
   verificationStatus : R4_CodeableConcept ;
   type : R4_AllergyIntoleranceTypeEnum ;
   category : R4_AllergyIntoleranceCategoryEnum [];
   criticality : R4_AllergyIntoleranceCriticalityEnum ;
   code : R4_CodeableConcept ;
   patient : R4_Reference ;
   encounter : R4_Reference ;
   onsetDateTime : string ;
   onsetAge : string ;
   onsetPeriod : R4_Period ;
   onsetRange : R4_Range ;
   onsetString : string ;
   recordedDate : string ;
   recorder : R4_Reference ;
   asserter : R4_Reference ;
   lastOccurrence : string ;
   note : R4_Annotation [];
   reaction : R4_AllergyIntolerance_Reaction [];
}
