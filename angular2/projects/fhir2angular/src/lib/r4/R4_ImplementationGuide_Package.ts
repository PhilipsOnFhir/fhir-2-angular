import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ImplementationGuide_Resource } from './R4_ImplementationGuide_Resource'

export class R4_ImplementationGuide_Package      extends R4_BackboneElement
{

   static def : string = 'ImplementationGuide_Package';
   name : string ;
   description : string ;
   resource : R4_ImplementationGuide_Resource [];
}
