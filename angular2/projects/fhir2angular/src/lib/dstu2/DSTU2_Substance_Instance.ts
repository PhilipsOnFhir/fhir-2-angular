import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_Substance_Instance      extends DSTU2_BackboneElement
{

   static def : string = 'Substance_Instance';
   identifier : DSTU2_Identifier ;
   expiry : string ;
   quantity : DSTU2_SimpleQuantity ;
}
