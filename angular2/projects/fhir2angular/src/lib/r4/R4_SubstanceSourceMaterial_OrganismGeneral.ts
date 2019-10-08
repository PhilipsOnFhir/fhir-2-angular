import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_SubstanceSourceMaterial_OrganismGeneral      extends R4_BackboneElement
{

   static def : string = 'SubstanceSourceMaterial_OrganismGeneral';
   kingdom : R4_CodeableConcept ;
   phylum : R4_CodeableConcept ;
   class : R4_CodeableConcept ;
   order : R4_CodeableConcept ;
}
