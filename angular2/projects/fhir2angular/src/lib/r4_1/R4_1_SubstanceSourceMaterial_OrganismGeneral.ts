import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_SubstanceSourceMaterial_OrganismGeneral      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSourceMaterial_OrganismGeneral';
   kingdom : R4_1_CodeableConcept ;
   phylum : R4_1_CodeableConcept ;
   class : R4_1_CodeableConcept ;
   order : R4_1_CodeableConcept ;
}
