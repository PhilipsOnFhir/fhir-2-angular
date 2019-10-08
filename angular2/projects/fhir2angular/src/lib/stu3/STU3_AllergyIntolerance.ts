import { STU3_AllergyIntoleranceCategoryEnum } from './STU3_AllergyIntoleranceCategoryEnum'
import { STU3_AllergyIntoleranceClinicalStatusEnum } from './STU3_AllergyIntoleranceClinicalStatusEnum'
import { STU3_AllergyIntoleranceCriticalityEnum } from './STU3_AllergyIntoleranceCriticalityEnum'
import { STU3_AllergyIntoleranceTypeEnum } from './STU3_AllergyIntoleranceTypeEnum'
import { STU3_AllergyIntoleranceVerificationStatusEnum } from './STU3_AllergyIntoleranceVerificationStatusEnum'
import { STU3_AllergyIntolerance_Reaction } from './STU3_AllergyIntolerance_Reaction'
import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Range } from './STU3_Range'
import { STU3_Reference } from './STU3_Reference'

export class STU3_AllergyIntolerance      extends STU3_DomainResource
{

   static def : string = 'AllergyIntolerance';
   identifier : STU3_Identifier [];
   clinicalStatus : STU3_AllergyIntoleranceClinicalStatusEnum ;
   verificationStatus : STU3_AllergyIntoleranceVerificationStatusEnum ;
   type : STU3_AllergyIntoleranceTypeEnum ;
   category : STU3_AllergyIntoleranceCategoryEnum [];
   criticality : STU3_AllergyIntoleranceCriticalityEnum ;
   code : STU3_CodeableConcept ;
   patient : STU3_Reference ;
   onsetDateTime : string ;
   onsetAge : string ;
   onsetPeriod : STU3_Period ;
   onsetRange : STU3_Range ;
   onsetString : string ;
   assertedDate : string ;
   recorder : STU3_Reference ;
   asserter : STU3_Reference ;
   lastOccurrence : string ;
   note : STU3_Annotation [];
   reaction : STU3_AllergyIntolerance_Reaction [];
}
