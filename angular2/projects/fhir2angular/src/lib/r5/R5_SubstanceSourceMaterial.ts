import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_SubstanceSourceMaterial_FractionDescription } from './R5_SubstanceSourceMaterial_FractionDescription'
import { R5_SubstanceSourceMaterial_Organism } from './R5_SubstanceSourceMaterial_Organism'
import { R5_SubstanceSourceMaterial_PartDescription } from './R5_SubstanceSourceMaterial_PartDescription'

export class R5_SubstanceSourceMaterial      extends R5_DomainResource
{

   static def : string = 'SubstanceSourceMaterial';
   sourceMaterialClass : R5_CodeableConcept ;
   sourceMaterialType : R5_CodeableConcept ;
   sourceMaterialState : R5_CodeableConcept ;
   organismId : R5_Identifier ;
   organismName : string ;
   parentSubstanceId : R5_Identifier [];
   parentSubstanceName : string [];
   countryOfOrigin : R5_CodeableConcept [];
   geographicalLocation : string [];
   developmentStage : R5_CodeableConcept ;
   fractionDescription : R5_SubstanceSourceMaterial_FractionDescription [];
   organism : R5_SubstanceSourceMaterial_Organism ;
   partDescription : R5_SubstanceSourceMaterial_PartDescription [];
}
