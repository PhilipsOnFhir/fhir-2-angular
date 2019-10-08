import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ImplementationGuide_Page1 } from './R5_ImplementationGuide_Page1'
import { R5_ImplementationGuide_Resource1 } from './R5_ImplementationGuide_Resource1'

export class R5_ImplementationGuide_Manifest      extends R5_BackboneElement
{

   static def : string = 'ImplementationGuide_Manifest';
   rendering : string ;
   resource : R5_ImplementationGuide_Resource1 [];
   page : R5_ImplementationGuide_Page1 [];
   image : string [];
   other : string [];
}
