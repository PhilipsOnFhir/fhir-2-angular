import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Conformance_Certificate      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_Certificate';
   type : string ;
   blob : string ;
}
