import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ImplementationGuide_DependsOn      extends R4_1_BackboneElement
{

   static def : string = 'ImplementationGuide_DependsOn';
   uri : string ;
   packageId : string ;
   version : string ;
}
