import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_SubstanceSourceMaterial_Hybrid      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSourceMaterial_Hybrid';
   maternalOrganismId : string ;
   maternalOrganismName : string ;
   paternalOrganismId : string ;
   paternalOrganismName : string ;
   hybridType : R4_1_CodeableConcept ;
}
