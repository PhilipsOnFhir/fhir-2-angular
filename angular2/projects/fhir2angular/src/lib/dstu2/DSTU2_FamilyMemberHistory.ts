import { DSTU2_Age } from './DSTU2_Age'
import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_FamilyHistoryStatusEnum } from './DSTU2_FamilyHistoryStatusEnum'
import { DSTU2_FamilyMemberHistory_Condition } from './DSTU2_FamilyMemberHistory_Condition'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Range } from './DSTU2_Range'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_FamilyMemberHistory      extends DSTU2_DomainResource
{

   static def : string = 'FamilyMemberHistory';
   identifier : DSTU2_Identifier [];
   patient : DSTU2_Reference ;
   date : string ;
   status : DSTU2_FamilyHistoryStatusEnum ;
   name : string ;
   relationship : DSTU2_CodeableConcept ;
   gender : string ;
   bornPeriod : DSTU2_Period ;
   bornDate : string ;
   bornString : string ;
   ageQuantity : DSTU2_Age ;
   ageRange : DSTU2_Range ;
   ageString : string ;
   deceasedBoolean : boolean ;
   deceasedQuantity : DSTU2_Age ;
   deceasedRange : DSTU2_Range ;
   deceasedDate : string ;
   deceasedString : string ;
   note : DSTU2_Annotation ;
   condition : DSTU2_FamilyMemberHistory_Condition [];
}
