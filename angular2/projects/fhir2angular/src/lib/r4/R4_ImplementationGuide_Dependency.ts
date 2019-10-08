import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_GuideDependencyTypeEnum } from './R4_GuideDependencyTypeEnum'

export class R4_ImplementationGuide_Dependency      extends R4_BackboneElement
{

   static def : string = 'ImplementationGuide_Dependency';
   type : R4_GuideDependencyTypeEnum ;
   uri : string ;
}
