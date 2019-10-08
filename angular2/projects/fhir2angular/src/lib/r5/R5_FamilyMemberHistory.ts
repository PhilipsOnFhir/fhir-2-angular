import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FamilyHistoryStatusEnum } from './R5_FamilyHistoryStatusEnum'
import { R5_FamilyMemberHistory_Condition } from './R5_FamilyMemberHistory_Condition'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Range } from './R5_Range'
import { R5_Reference } from './R5_Reference'

export class R5_FamilyMemberHistory      extends R5_DomainResource
{

   static def : string = 'FamilyMemberHistory';
   identifier : R5_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   status : R5_FamilyHistoryStatusEnum ;
   dataAbsentReason : R5_CodeableConcept ;
   patient : R5_Reference ;
   date : string ;
   name : string ;
   relationship : R5_CodeableConcept ;
   sex : R5_CodeableConcept ;
   bornPeriod : R5_Period ;
   bornDate : string ;
   bornString : string ;
   ageAge : string ;
   ageRange : R5_Range ;
   ageString : string ;
   estimatedAge : boolean ;
   deceasedBoolean : boolean ;
   deceasedAge : string ;
   deceasedRange : R5_Range ;
   deceasedDate : string ;
   deceasedString : string ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   note : R5_Annotation [];
   condition : R5_FamilyMemberHistory_Condition [];
}
