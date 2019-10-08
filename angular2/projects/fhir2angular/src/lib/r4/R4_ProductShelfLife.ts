import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Quantity } from './R4_Quantity'

export class R4_ProductShelfLife      extends R4_BackboneElement
{

   static def : string = 'ProductShelfLife';
   identifier : R4_Identifier ;
   type : R4_CodeableConcept ;
   period : R4_Quantity ;
   specialPrecautionsForStorage : R4_CodeableConcept [];
}
