import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ImplementationGuide_Resource } from './DSTU2_ImplementationGuide_Resource'

export class DSTU2_ImplementationGuide_Package      extends DSTU2_BackboneElement
{

   static def : string = 'ImplementationGuide_Package';
   name : string ;
   description : string ;
   resource : DSTU2_ImplementationGuide_Resource [];
}
