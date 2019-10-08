import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ImplementationGuide_DependsOn      extends R4_BackboneElement
{

   static def : string = 'ImplementationGuide_DependsOn';
   uri : string ;
   packageId : string ;
   version : string ;
}
