import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SubstanceSourceMaterial_Author } from './R4_1_SubstanceSourceMaterial_Author'
import { R4_1_SubstanceSourceMaterial_Hybrid } from './R4_1_SubstanceSourceMaterial_Hybrid'
import { R4_1_SubstanceSourceMaterial_OrganismGeneral } from './R4_1_SubstanceSourceMaterial_OrganismGeneral'

export class R4_1_SubstanceSourceMaterial_Organism      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSourceMaterial_Organism';
   family : R4_1_CodeableConcept ;
   genus : R4_1_CodeableConcept ;
   species : R4_1_CodeableConcept ;
   intraspecificType : R4_1_CodeableConcept ;
   intraspecificDescription : string ;
   author : R4_1_SubstanceSourceMaterial_Author [];
   hybrid : R4_1_SubstanceSourceMaterial_Hybrid ;
   organismGeneral : R4_1_SubstanceSourceMaterial_OrganismGeneral ;
}
