import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SubstanceSourceMaterial_Author } from './R4_SubstanceSourceMaterial_Author'
import { R4_SubstanceSourceMaterial_Hybrid } from './R4_SubstanceSourceMaterial_Hybrid'
import { R4_SubstanceSourceMaterial_OrganismGeneral } from './R4_SubstanceSourceMaterial_OrganismGeneral'

export class R4_SubstanceSourceMaterial_Organism      extends R4_BackboneElement
{

   static def : string = 'SubstanceSourceMaterial_Organism';
   family : R4_CodeableConcept ;
   genus : R4_CodeableConcept ;
   species : R4_CodeableConcept ;
   intraspecificType : R4_CodeableConcept ;
   intraspecificDescription : string ;
   author : R4_SubstanceSourceMaterial_Author [];
   hybrid : R4_SubstanceSourceMaterial_Hybrid ;
   organismGeneral : R4_SubstanceSourceMaterial_OrganismGeneral ;
}
