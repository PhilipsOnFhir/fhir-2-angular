import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_SubstanceSourceMaterial_FractionDescription } from './R4_1_SubstanceSourceMaterial_FractionDescription'
import { R4_1_SubstanceSourceMaterial_Organism } from './R4_1_SubstanceSourceMaterial_Organism'
import { R4_1_SubstanceSourceMaterial_PartDescription } from './R4_1_SubstanceSourceMaterial_PartDescription'

export class R4_1_SubstanceSourceMaterial      extends R4_1_DomainResource
{

   static def : string = 'SubstanceSourceMaterial';
   sourceMaterialClass : R4_1_CodeableConcept ;
   sourceMaterialType : R4_1_CodeableConcept ;
   sourceMaterialState : R4_1_CodeableConcept ;
   organismId : R4_1_Identifier ;
   organismName : string ;
   parentSubstanceId : R4_1_Identifier [];
   parentSubstanceName : string [];
   countryOfOrigin : R4_1_CodeableConcept [];
   geographicalLocation : string [];
   developmentStage : R4_1_CodeableConcept ;
   fractionDescription : R4_1_SubstanceSourceMaterial_FractionDescription [];
   organism : R4_1_SubstanceSourceMaterial_Organism ;
   partDescription : R4_1_SubstanceSourceMaterial_PartDescription [];
}
