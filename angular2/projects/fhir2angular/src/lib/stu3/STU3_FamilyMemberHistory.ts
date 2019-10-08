import { STU3_AdministrativeGenderEnum } from './STU3_AdministrativeGenderEnum'
import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FamilyHistoryStatusEnum } from './STU3_FamilyHistoryStatusEnum'
import { STU3_FamilyMemberHistory_Condition } from './STU3_FamilyMemberHistory_Condition'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Range } from './STU3_Range'
import { STU3_Reference } from './STU3_Reference'

export class STU3_FamilyMemberHistory      extends STU3_DomainResource
{

   static def : string = 'FamilyMemberHistory';
   identifier : STU3_Identifier [];
   definition : STU3_Reference [];
   status : STU3_FamilyHistoryStatusEnum ;
   notDone : boolean ;
   notDoneReason : STU3_CodeableConcept ;
   patient : STU3_Reference ;
   date : string ;
   name : string ;
   relationship : STU3_CodeableConcept ;
   gender : STU3_AdministrativeGenderEnum ;
   bornPeriod : STU3_Period ;
   bornDate : string ;
   bornString : string ;
   ageAge : string ;
   ageRange : STU3_Range ;
   ageString : string ;
   estimatedAge : boolean ;
   deceasedBoolean : boolean ;
   deceasedAge : string ;
   deceasedRange : STU3_Range ;
   deceasedDate : string ;
   deceasedString : string ;
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   note : STU3_Annotation [];
   condition : STU3_FamilyMemberHistory_Condition [];
}
