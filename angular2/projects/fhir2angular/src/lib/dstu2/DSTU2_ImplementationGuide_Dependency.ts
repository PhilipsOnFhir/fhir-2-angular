import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_GuideDependencyTypeEnum } from './DSTU2_GuideDependencyTypeEnum'

export class DSTU2_ImplementationGuide_Dependency      extends DSTU2_BackboneElement
{

   static def : string = 'ImplementationGuide_Dependency';
   type : DSTU2_GuideDependencyTypeEnum ;
   uri : string ;
}
