import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_SubstanceSourceMaterial_FractionDescription } from './R4_SubstanceSourceMaterial_FractionDescription'
import { R4_SubstanceSourceMaterial_Organism } from './R4_SubstanceSourceMaterial_Organism'
import { R4_SubstanceSourceMaterial_PartDescription } from './R4_SubstanceSourceMaterial_PartDescription'

export class R4_SubstanceSourceMaterial      extends R4_DomainResource
{

   static def : string = 'SubstanceSourceMaterial';
   sourceMaterialClass : R4_CodeableConcept ;
   sourceMaterialType : R4_CodeableConcept ;
   sourceMaterialState : R4_CodeableConcept ;
   organismId : R4_Identifier ;
   organismName : string ;
   parentSubstanceId : R4_Identifier [];
   parentSubstanceName : string [];
   countryOfOrigin : R4_CodeableConcept [];
   geographicalLocation : string [];
   developmentStage : R4_CodeableConcept ;
   fractionDescription : R4_SubstanceSourceMaterial_FractionDescription [];
   organism : R4_SubstanceSourceMaterial_Organism ;
   partDescription : R4_SubstanceSourceMaterial_PartDescription [];
}
