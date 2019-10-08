import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ImplementationGuide_DependsOn      extends R5_BackboneElement
{

   static def : string = 'ImplementationGuide_DependsOn';
   uri : string ;
   packageId : string ;
   version : string ;
}
