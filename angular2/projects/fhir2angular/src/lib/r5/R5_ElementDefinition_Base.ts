import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ElementDefinition_Base      extends R5_BackboneElement
{

   static def : string = 'ElementDefinition_Base';
   path : string ;
   min : string ;
   max : string ;
}
