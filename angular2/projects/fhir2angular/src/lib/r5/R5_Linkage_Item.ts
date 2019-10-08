import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_LinkageTypeEnum } from './R5_LinkageTypeEnum'
import { R5_Reference } from './R5_Reference'

export class R5_Linkage_Item      extends R5_BackboneElement
{

   static def : string = 'Linkage_Item';
   type : R5_LinkageTypeEnum ;
   resource : R5_Reference ;
}
