import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_SubstanceSourceMaterial_OrganismGeneral      extends R5_BackboneElement
{

   static def : string = 'SubstanceSourceMaterial_OrganismGeneral';
   kingdom : R5_CodeableConcept ;
   phylum : R5_CodeableConcept ;
   class : R5_CodeableConcept ;
   order : R5_CodeableConcept ;
}
