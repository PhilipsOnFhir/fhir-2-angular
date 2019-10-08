import { DSTU2_AllergyIntoleranceCategoryEnum } from './DSTU2_AllergyIntoleranceCategoryEnum'
import { DSTU2_AllergyIntoleranceCriticalityEnum } from './DSTU2_AllergyIntoleranceCriticalityEnum'
import { DSTU2_AllergyIntoleranceStatusEnum } from './DSTU2_AllergyIntoleranceStatusEnum'
import { DSTU2_AllergyIntoleranceTypeEnum } from './DSTU2_AllergyIntoleranceTypeEnum'
import { DSTU2_AllergyIntolerance_Reaction } from './DSTU2_AllergyIntolerance_Reaction'
import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_AllergyIntolerance      extends DSTU2_DomainResource
{

   static def : string = 'AllergyIntolerance';
   identifier : DSTU2_Identifier [];
   onset : string ;
   recordedDate : string ;
   recorder : DSTU2_Reference ;
   patient : DSTU2_Reference ;
   reporter : DSTU2_Reference ;
   substance : DSTU2_CodeableConcept ;
   status : DSTU2_AllergyIntoleranceStatusEnum ;
   criticality : DSTU2_AllergyIntoleranceCriticalityEnum ;
   type : DSTU2_AllergyIntoleranceTypeEnum ;
   category : DSTU2_AllergyIntoleranceCategoryEnum ;
   lastOccurence : string ;
   note : DSTU2_Annotation ;
   reaction : DSTU2_AllergyIntolerance_Reaction [];
}
