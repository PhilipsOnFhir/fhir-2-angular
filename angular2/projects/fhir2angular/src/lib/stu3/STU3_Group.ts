import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_GroupTypeEnum } from './STU3_GroupTypeEnum'
import { STU3_Group_Characteristic } from './STU3_Group_Characteristic'
import { STU3_Group_Member } from './STU3_Group_Member'
import { STU3_Identifier } from './STU3_Identifier'

export class STU3_Group      extends STU3_DomainResource
{

   static def : string = 'Group';
   identifier : STU3_Identifier [];
   active : boolean ;
   type : STU3_GroupTypeEnum ;
   actual : boolean ;
   code : STU3_CodeableConcept ;
   name : string ;
   quantity : string ;
   characteristic : STU3_Group_Characteristic [];
   member : STU3_Group_Member [];
}
