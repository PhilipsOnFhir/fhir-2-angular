import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_SubstanceSourceMaterial_FractionDescription      extends R5_BackboneElement
{

   static def : string = 'SubstanceSourceMaterial_FractionDescription';
   fraction : string ;
   materialType : R5_CodeableConcept ;
}
