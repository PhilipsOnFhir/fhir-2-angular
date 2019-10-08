import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ImplementationGuide_Global      extends DSTU2_BackboneElement
{

   static def : string = 'ImplementationGuide_Global';
   type : string ;
   profile : DSTU2_Reference ;
}
