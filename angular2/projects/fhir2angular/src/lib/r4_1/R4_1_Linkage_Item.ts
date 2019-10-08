import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_LinkageTypeEnum } from './R4_1_LinkageTypeEnum'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Linkage_Item      extends R4_1_BackboneElement
{

   static def : string = 'Linkage_Item';
   type : R4_1_LinkageTypeEnum ;
   resource : R4_1_Reference ;
}
