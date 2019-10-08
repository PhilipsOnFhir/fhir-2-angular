import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_SubstanceSourceMaterial_Author      extends R4_BackboneElement
{

   static def : string = 'SubstanceSourceMaterial_Author';
   authorType : R4_CodeableConcept ;
   authorDescription : string ;
}
