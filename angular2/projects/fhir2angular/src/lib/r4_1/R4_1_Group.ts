import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_GroupTypeEnum } from './R4_1_GroupTypeEnum'
import { R4_1_Group_Characteristic } from './R4_1_Group_Characteristic'
import { R4_1_Group_Member } from './R4_1_Group_Member'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Group      extends R4_1_DomainResource
{

   static def : string = 'Group';
   identifier : R4_1_Identifier [];
   active : boolean ;
   type : R4_1_GroupTypeEnum ;
   actual : boolean ;
   code : R4_1_CodeableConcept ;
   name : string ;
   quantity : string ;
   managingEntity : R4_1_Reference ;
   characteristic : R4_1_Group_Characteristic [];
   member : R4_1_Group_Member [];
}
