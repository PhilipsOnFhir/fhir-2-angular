import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_SubstanceSourceMaterial_Hybrid      extends R5_BackboneElement
{

   static def : string = 'SubstanceSourceMaterial_Hybrid';
   maternalOrganismId : string ;
   maternalOrganismName : string ;
   paternalOrganismId : string ;
   paternalOrganismName : string ;
   hybridType : R5_CodeableConcept ;
}
