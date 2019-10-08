import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_GuideDependencyTypeEnum } from './STU3_GuideDependencyTypeEnum'

export class STU3_ImplementationGuide_Dependency      extends STU3_BackboneElement
{

   static def : string = 'ImplementationGuide_Dependency';
   type : STU3_GuideDependencyTypeEnum ;
   uri : string ;
}
