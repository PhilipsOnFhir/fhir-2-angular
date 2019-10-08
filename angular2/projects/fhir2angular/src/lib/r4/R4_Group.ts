import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_GroupTypeEnum } from './R4_GroupTypeEnum'
import { R4_Group_Characteristic } from './R4_Group_Characteristic'
import { R4_Group_Member } from './R4_Group_Member'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_Group      extends R4_DomainResource
{

   static def : string = 'Group';
   identifier : R4_Identifier [];
   active : boolean ;
   type : R4_GroupTypeEnum ;
   actual : boolean ;
   code : R4_CodeableConcept ;
   name : string ;
   quantity : string ;
   managingEntity : R4_Reference ;
   characteristic : R4_Group_Characteristic [];
   member : R4_Group_Member [];
}
