import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_GroupTypeEnum } from './DSTU2_GroupTypeEnum'
import { DSTU2_Group_Characteristic } from './DSTU2_Group_Characteristic'
import { DSTU2_Group_Member } from './DSTU2_Group_Member'
import { DSTU2_Identifier } from './DSTU2_Identifier'

export class DSTU2_Group      extends DSTU2_DomainResource
{

   static def : string = 'Group';
   identifier : DSTU2_Identifier [];
   type : DSTU2_GroupTypeEnum ;
   actual : boolean ;
   code : DSTU2_CodeableConcept ;
   name : string ;
   quantity : string ;
   characteristic : DSTU2_Group_Characteristic [];
   member : DSTU2_Group_Member [];
}
