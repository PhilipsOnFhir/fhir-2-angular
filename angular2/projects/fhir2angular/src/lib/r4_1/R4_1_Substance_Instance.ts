import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_Substance_Instance      extends R4_1_BackboneElement
{

   static def : string = 'Substance_Instance';
   identifier : R4_1_Identifier ;
   expiry : string ;
   quantity : R4_1_Quantity ;
}
