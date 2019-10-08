import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_LinkTypeEnum } from './R4_1_LinkTypeEnum'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Patient_Link      extends R4_1_BackboneElement
{

   static def : string = 'Patient_Link';
   other : R4_1_Reference ;
   type : R4_1_LinkTypeEnum ;
}
