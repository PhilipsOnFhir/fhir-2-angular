import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_LinkTypeEnum } from './STU3_LinkTypeEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Patient_Link      extends STU3_BackboneElement
{

   static def : string = 'Patient_Link';
   other : STU3_Reference ;
   type : STU3_LinkTypeEnum ;
}
