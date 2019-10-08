import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FHIRVersionEnum } from './R4_FHIRVersionEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_StructureDefinitionKindEnum } from './R4_StructureDefinitionKindEnum'
import { R4_StructureDefinition_Context } from './R4_StructureDefinition_Context'
import { R4_StructureDefinition_Differential } from './R4_StructureDefinition_Differential'
import { R4_StructureDefinition_Mapping } from './R4_StructureDefinition_Mapping'
import { R4_StructureDefinition_Snapshot } from './R4_StructureDefinition_Snapshot'
import { R4_TypeDerivationRuleEnum } from './R4_TypeDerivationRuleEnum'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_StructureDefinition      extends R4_DomainResource
{

   static def : string = 'StructureDefinition';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   keyword : R4_Coding [];
   fhirVersion : R4_FHIRVersionEnum ;
   mapping : R4_StructureDefinition_Mapping [];
   kind : R4_StructureDefinitionKindEnum ;
   abstract : boolean ;
   context : R4_StructureDefinition_Context [];
   contextInvariant : string [];
   type : string ;
   baseDefinition : string ;
   derivation : R4_TypeDerivationRuleEnum ;
   snapshot : R4_StructureDefinition_Snapshot ;
   differential : R4_StructureDefinition_Differential ;
}
