import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_GroupTypeEnum } from './R5_GroupTypeEnum'
import { R5_Group_Characteristic } from './R5_Group_Characteristic'
import { R5_Group_Member } from './R5_Group_Member'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_Group      extends R5_DomainResource
{

   static def : string = 'Group';
   identifier : R5_Identifier [];
   active : boolean ;
   type : R5_GroupTypeEnum ;
   actual : boolean ;
   code : R5_CodeableConcept ;
   name : string ;
   quantity : string ;
   managingEntity : R5_Reference ;
   characteristic : R5_Group_Characteristic [];
   member : R5_Group_Member [];
}
