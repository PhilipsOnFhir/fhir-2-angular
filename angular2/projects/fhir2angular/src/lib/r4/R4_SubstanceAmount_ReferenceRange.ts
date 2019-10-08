import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'

export class R4_SubstanceAmount_ReferenceRange      extends R4_BackboneElement
{

   static def : string = 'SubstanceAmount_ReferenceRange';
   lowLimit : R4_Quantity ;
   highLimit : R4_Quantity ;
}
