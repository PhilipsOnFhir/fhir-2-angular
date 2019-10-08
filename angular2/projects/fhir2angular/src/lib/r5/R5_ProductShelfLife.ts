import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Quantity } from './R5_Quantity'

export class R5_ProductShelfLife      extends R5_BackboneElement
{

   static def : string = 'ProductShelfLife';
   identifier : R5_Identifier ;
   type : R5_CodeableConcept ;
   period : R5_Quantity ;
   specialPrecautionsForStorage : R5_CodeableConcept [];
}
