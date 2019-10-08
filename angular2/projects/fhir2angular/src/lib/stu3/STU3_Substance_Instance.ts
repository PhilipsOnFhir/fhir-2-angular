import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Quantity } from './STU3_Quantity'

export class STU3_Substance_Instance      extends STU3_BackboneElement
{

   static def : string = 'Substance_Instance';
   identifier : STU3_Identifier ;
   expiry : string ;
   quantity : STU3_Quantity ;
}
