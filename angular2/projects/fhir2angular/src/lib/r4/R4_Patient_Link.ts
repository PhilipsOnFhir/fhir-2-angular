import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_LinkTypeEnum } from './R4_LinkTypeEnum'
import { R4_Reference } from './R4_Reference'

export class R4_Patient_Link      extends R4_BackboneElement
{

   static def : string = 'Patient_Link';
   other : R4_Reference ;
   type : R4_LinkTypeEnum ;
}
