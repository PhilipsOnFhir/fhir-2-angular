import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FHIRVersionEnum } from './R5_FHIRVersionEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_StructureDefinitionKindEnum } from './R5_StructureDefinitionKindEnum'
import { R5_StructureDefinition_Context } from './R5_StructureDefinition_Context'
import { R5_StructureDefinition_Differential } from './R5_StructureDefinition_Differential'
import { R5_StructureDefinition_Mapping } from './R5_StructureDefinition_Mapping'
import { R5_StructureDefinition_Snapshot } from './R5_StructureDefinition_Snapshot'
import { R5_TypeDerivationRuleEnum } from './R5_TypeDerivationRuleEnum'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_StructureDefinition      extends R5_DomainResource
{

   static def : string = 'StructureDefinition';
   url : string ;
   identifier : R5_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   keyword : R5_Coding [];
   fhirVersion : R5_FHIRVersionEnum ;
   mapping : R5_StructureDefinition_Mapping [];
   kind : R5_StructureDefinitionKindEnum ;
   abstract : boolean ;
   context : R5_StructureDefinition_Context [];
   contextInvariant : string [];
   type : string ;
   baseDefinition : string ;
   derivation : R5_TypeDerivationRuleEnum ;
   snapshot : R5_StructureDefinition_Snapshot ;
   differential : R5_StructureDefinition_Differential ;
}
