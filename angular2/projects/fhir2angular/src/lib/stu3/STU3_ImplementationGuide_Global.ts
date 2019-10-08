import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'
import { STU3_ResourceTypeEnum } from './STU3_ResourceTypeEnum'

export class STU3_ImplementationGuide_Global      extends STU3_BackboneElement
{

   static def : string = 'ImplementationGuide_Global';
   type : STU3_ResourceTypeEnum ;
   profile : STU3_Reference ;
}
