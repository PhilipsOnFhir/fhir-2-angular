import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SubstanceSourceMaterial_Author } from './R5_SubstanceSourceMaterial_Author'
import { R5_SubstanceSourceMaterial_Hybrid } from './R5_SubstanceSourceMaterial_Hybrid'
import { R5_SubstanceSourceMaterial_OrganismGeneral } from './R5_SubstanceSourceMaterial_OrganismGeneral'

export class R5_SubstanceSourceMaterial_Organism      extends R5_BackboneElement
{

   static def : string = 'SubstanceSourceMaterial_Organism';
   family : R5_CodeableConcept ;
   genus : R5_CodeableConcept ;
   species : R5_CodeableConcept ;
   intraspecificType : R5_CodeableConcept ;
   intraspecificDescription : string ;
   author : R5_SubstanceSourceMaterial_Author [];
   hybrid : R5_SubstanceSourceMaterial_Hybrid ;
   organismGeneral : R5_SubstanceSourceMaterial_OrganismGeneral ;
}
