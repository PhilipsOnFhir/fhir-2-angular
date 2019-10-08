import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImplementationGuide_Resource } from './STU3_ImplementationGuide_Resource'

export class STU3_ImplementationGuide_Package      extends STU3_BackboneElement
{

   static def : string = 'ImplementationGuide_Package';
   name : string ;
   description : string ;
   resource : STU3_ImplementationGuide_Resource [];
}
