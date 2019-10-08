import { R5_AllergyIntoleranceCategoryEnum } from './R5_AllergyIntoleranceCategoryEnum'
import { R5_AllergyIntoleranceCriticalityEnum } from './R5_AllergyIntoleranceCriticalityEnum'
import { R5_AllergyIntoleranceTypeEnum } from './R5_AllergyIntoleranceTypeEnum'
import { R5_AllergyIntolerance_Reaction } from './R5_AllergyIntolerance_Reaction'
import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Range } from './R5_Range'
import { R5_Reference } from './R5_Reference'

export class R5_AllergyIntolerance      extends R5_DomainResource
{

   static def : string = 'AllergyIntolerance';
   identifier : R5_Identifier [];
   clinicalStatus : R5_CodeableConcept ;
   verificationStatus : R5_CodeableConcept ;
   type : R5_AllergyIntoleranceTypeEnum ;
   category : R5_AllergyIntoleranceCategoryEnum [];
   criticality : R5_AllergyIntoleranceCriticalityEnum ;
   code : R5_CodeableConcept ;
   patient : R5_Reference ;
   encounter : R5_Reference ;
   onsetDateTime : string ;
   onsetAge : string ;
   onsetPeriod : R5_Period ;
   onsetRange : R5_Range ;
   onsetString : string ;
   recordedDate : string ;
   recorder : R5_Reference ;
   asserter : R5_Reference ;
   lastOccurrence : string ;
   note : R5_Annotation [];
   reaction : R5_AllergyIntolerance_Reaction [];
}
