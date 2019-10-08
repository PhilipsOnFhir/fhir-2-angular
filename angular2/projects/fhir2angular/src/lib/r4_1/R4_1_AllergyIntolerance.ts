import { R4_1_AllergyIntoleranceCategoryEnum } from './R4_1_AllergyIntoleranceCategoryEnum'
import { R4_1_AllergyIntoleranceCriticalityEnum } from './R4_1_AllergyIntoleranceCriticalityEnum'
import { R4_1_AllergyIntoleranceTypeEnum } from './R4_1_AllergyIntoleranceTypeEnum'
import { R4_1_AllergyIntolerance_Reaction } from './R4_1_AllergyIntolerance_Reaction'
import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_AllergyIntolerance      extends R4_1_DomainResource
{

   static def : string = 'AllergyIntolerance';
   identifier : R4_1_Identifier [];
   clinicalStatus : R4_1_CodeableConcept ;
   verificationStatus : R4_1_CodeableConcept ;
   type : R4_1_AllergyIntoleranceTypeEnum ;
   category : R4_1_AllergyIntoleranceCategoryEnum [];
   criticality : R4_1_AllergyIntoleranceCriticalityEnum ;
   code : R4_1_CodeableConcept ;
   patient : R4_1_Reference ;
   encounter : R4_1_Reference ;
   onsetDateTime : string ;
   onsetAge : string ;
   onsetPeriod : R4_1_Period ;
   onsetRange : R4_1_Range ;
   onsetString : string ;
   recordedDate : string ;
   recorder : R4_1_Reference ;
   asserter : R4_1_Reference ;
   lastOccurrence : string ;
   note : R4_1_Annotation [];
   reaction : R4_1_AllergyIntolerance_Reaction [];
}
