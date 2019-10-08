import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_LinkageTypeEnum } from './R4_LinkageTypeEnum'
import { R4_Reference } from './R4_Reference'

export class R4_Linkage_Item      extends R4_BackboneElement
{

   static def : string = 'Linkage_Item';
   type : R4_LinkageTypeEnum ;
   resource : R4_Reference ;
}
