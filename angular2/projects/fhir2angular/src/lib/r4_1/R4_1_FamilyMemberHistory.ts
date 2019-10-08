import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FamilyHistoryStatusEnum } from './R4_1_FamilyHistoryStatusEnum'
import { R4_1_FamilyMemberHistory_Condition } from './R4_1_FamilyMemberHistory_Condition'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_FamilyMemberHistory      extends R4_1_DomainResource
{

   static def : string = 'FamilyMemberHistory';
   identifier : R4_1_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   status : R4_1_FamilyHistoryStatusEnum ;
   dataAbsentReason : R4_1_CodeableConcept ;
   patient : R4_1_Reference ;
   date : string ;
   name : string ;
   relationship : R4_1_CodeableConcept ;
   sex : R4_1_CodeableConcept ;
   bornPeriod : R4_1_Period ;
   bornDate : string ;
   bornString : string ;
   ageAge : string ;
   ageRange : R4_1_Range ;
   ageString : string ;
   estimatedAge : boolean ;
   deceasedBoolean : boolean ;
   deceasedAge : string ;
   deceasedRange : R4_1_Range ;
   deceasedDate : string ;
   deceasedString : string ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   note : R4_1_Annotation [];
   condition : R4_1_FamilyMemberHistory_Condition [];
}
