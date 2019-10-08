import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FamilyHistoryStatusEnum } from './R4_FamilyHistoryStatusEnum'
import { R4_FamilyMemberHistory_Condition } from './R4_FamilyMemberHistory_Condition'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Range } from './R4_Range'
import { R4_Reference } from './R4_Reference'

export class R4_FamilyMemberHistory      extends R4_DomainResource
{

   static def : string = 'FamilyMemberHistory';
   identifier : R4_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   status : R4_FamilyHistoryStatusEnum ;
   dataAbsentReason : R4_CodeableConcept ;
   patient : R4_Reference ;
   date : string ;
   name : string ;
   relationship : R4_CodeableConcept ;
   sex : R4_CodeableConcept ;
   bornPeriod : R4_Period ;
   bornDate : string ;
   bornString : string ;
   ageAge : string ;
   ageRange : R4_Range ;
   ageString : string ;
   estimatedAge : boolean ;
   deceasedBoolean : boolean ;
   deceasedAge : string ;
   deceasedRange : R4_Range ;
   deceasedDate : string ;
   deceasedString : string ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   note : R4_Annotation [];
   condition : R4_FamilyMemberHistory_Condition [];
}
