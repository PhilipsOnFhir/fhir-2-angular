import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ImplementationGuide_Page1 } from './R4_1_ImplementationGuide_Page1'
import { R4_1_ImplementationGuide_Resource1 } from './R4_1_ImplementationGuide_Resource1'

export class R4_1_ImplementationGuide_Manifest      extends R4_1_BackboneElement
{

   static def : string = 'ImplementationGuide_Manifest';
   rendering : string ;
   resource : R4_1_ImplementationGuide_Resource1 [];
   page : R4_1_ImplementationGuide_Page1 [];
   image : string [];
   other : string [];
}
