import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ExtensionContextEnum } from './STU3_ExtensionContextEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_StructureDefinitionKindEnum } from './STU3_StructureDefinitionKindEnum'
import { STU3_StructureDefinition_Differential } from './STU3_StructureDefinition_Differential'
import { STU3_StructureDefinition_Mapping } from './STU3_StructureDefinition_Mapping'
import { STU3_StructureDefinition_Snapshot } from './STU3_StructureDefinition_Snapshot'
import { STU3_TypeDerivationRuleEnum } from './STU3_TypeDerivationRuleEnum'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_StructureDefinition      extends STU3_DomainResource
{

   static def : string = 'StructureDefinition';
   url : string ;
   identifier : STU3_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : STU3_ContactDetail [];
   description : string ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   keyword : STU3_Coding [];
   fhirVersion : string ;
   mapping : STU3_StructureDefinition_Mapping [];
   kind : STU3_StructureDefinitionKindEnum ;
   abstract : boolean ;
   contextType : STU3_ExtensionContextEnum ;
   context : string [];
   contextInvariant : string [];
   type : string ;
   baseDefinition : string ;
   derivation : STU3_TypeDerivationRuleEnum ;
   snapshot : STU3_StructureDefinition_Snapshot ;
   differential : STU3_StructureDefinition_Differential ;
}
