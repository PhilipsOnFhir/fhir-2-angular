import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_LinkageTypeEnum } from './STU3_LinkageTypeEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Linkage_Item      extends STU3_BackboneElement
{

   static def : string = 'Linkage_Item';
   type : STU3_LinkageTypeEnum ;
   resource : STU3_Reference ;
}
