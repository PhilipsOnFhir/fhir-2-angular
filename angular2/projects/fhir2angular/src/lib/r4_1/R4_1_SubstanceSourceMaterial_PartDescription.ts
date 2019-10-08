import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_SubstanceSourceMaterial_PartDescription      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSourceMaterial_PartDescription';
   part : R4_1_CodeableConcept ;
   partLocation : R4_1_CodeableConcept ;
}
