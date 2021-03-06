import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { GroupTypeEnum } from './GroupTypeEnum'
import { Group_Characteristic } from './Group_Characteristic'
import { Group_Member } from './Group_Member'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Group      extends DomainResource
{

   static def : string = 'Group';
   identifier : Identifier [];
   active : boolean ;
   type : GroupTypeEnum ;
   actual : boolean ;
   code : CodeableConcept ;
   name : string ;
   quantity : string ;
   managingEntity : Reference ;
   characteristic : Group_Characteristic [];
   member : Group_Member [];
}
