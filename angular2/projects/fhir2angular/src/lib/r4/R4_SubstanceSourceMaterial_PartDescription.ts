import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_SubstanceSourceMaterial_PartDescription      extends R4_BackboneElement
{

   static def : string = 'SubstanceSourceMaterial_PartDescription';
   part : R4_CodeableConcept ;
   partLocation : R4_CodeableConcept ;
}
