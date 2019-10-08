import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_SubstanceAmount_ReferenceRange      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceAmount_ReferenceRange';
   lowLimit : R4_1_Quantity ;
   highLimit : R4_1_Quantity ;
}
