import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_ProductShelfLife      extends R4_1_BackboneElement
{

   static def : string = 'ProductShelfLife';
   identifier : R4_1_Identifier ;
   type : R4_1_CodeableConcept ;
   period : R4_1_Quantity ;
   specialPrecautionsForStorage : R4_1_CodeableConcept [];
}
