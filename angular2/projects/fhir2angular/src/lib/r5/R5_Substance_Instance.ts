import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Quantity } from './R5_Quantity'

export class R5_Substance_Instance      extends R5_BackboneElement
{

   static def : string = 'Substance_Instance';
   identifier : R5_Identifier ;
   expiry : string ;
   quantity : R5_Quantity ;
}
