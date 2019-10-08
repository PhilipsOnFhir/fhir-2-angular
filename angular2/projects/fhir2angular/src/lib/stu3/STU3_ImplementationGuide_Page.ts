import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_GuidePageKindEnum } from './STU3_GuidePageKindEnum'
import { STU3_ResourceTypeEnum } from './STU3_ResourceTypeEnum'

export class STU3_ImplementationGuide_Page      extends STU3_BackboneElement
{

   static def : string = 'ImplementationGuide_Page';
   source : string ;
   title : string ;
   kind : STU3_GuidePageKindEnum ;
   type : STU3_ResourceTypeEnum [];
   package : string [];
   format : string ;
   page : STU3_ImplementationGuide_Page [];
}
