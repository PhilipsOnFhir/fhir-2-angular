import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Quantity } from './R4_Quantity'

export class R4_Substance_Instance      extends R4_BackboneElement
{

   static def : string = 'Substance_Instance';
   identifier : R4_Identifier ;
   expiry : string ;
   quantity : R4_Quantity ;
}
