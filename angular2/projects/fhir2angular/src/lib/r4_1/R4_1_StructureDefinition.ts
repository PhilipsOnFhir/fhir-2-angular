import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FHIRVersionEnum } from './R4_1_FHIRVersionEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_StructureDefinitionKindEnum } from './R4_1_StructureDefinitionKindEnum'
import { R4_1_StructureDefinition_Context } from './R4_1_StructureDefinition_Context'
import { R4_1_StructureDefinition_Differential } from './R4_1_StructureDefinition_Differential'
import { R4_1_StructureDefinition_Mapping } from './R4_1_StructureDefinition_Mapping'
import { R4_1_StructureDefinition_Snapshot } from './R4_1_StructureDefinition_Snapshot'
import { R4_1_TypeDerivationRuleEnum } from './R4_1_TypeDerivationRuleEnum'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_StructureDefinition      extends R4_1_DomainResource
{

   static def : string = 'StructureDefinition';
   url : string ;
   identifier : R4_1_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : R4_1_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   keyword : R4_1_Coding [];
   fhirVersion : R4_1_FHIRVersionEnum ;
   mapping : R4_1_StructureDefinition_Mapping [];
   kind : R4_1_StructureDefinitionKindEnum ;
   abstract : boolean ;
   context : R4_1_StructureDefinition_Context [];
   contextInvariant : string [];
   type : string ;
   baseDefinition : string ;
   derivation : R4_1_TypeDerivationRuleEnum ;
   snapshot : R4_1_StructureDefinition_Snapshot ;
   differential : R4_1_StructureDefinition_Differential ;
}
