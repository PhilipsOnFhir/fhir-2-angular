import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_LinkTypeEnum } from './R5_LinkTypeEnum'
import { R5_Reference } from './R5_Reference'

export class R5_Patient_Link      extends R5_BackboneElement
{

   static def : string = 'Patient_Link';
   other : R5_Reference ;
   type : R5_LinkTypeEnum ;
}
