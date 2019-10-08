import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ExtensionContextEnum } from './DSTU2_ExtensionContextEnum'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_StructureDefinitionKindEnum } from './DSTU2_StructureDefinitionKindEnum'
import { DSTU2_StructureDefinition_Contact } from './DSTU2_StructureDefinition_Contact'
import { DSTU2_StructureDefinition_Differential } from './DSTU2_StructureDefinition_Differential'
import { DSTU2_StructureDefinition_Mapping } from './DSTU2_StructureDefinition_Mapping'
import { DSTU2_StructureDefinition_Snapshot } from './DSTU2_StructureDefinition_Snapshot'

export class DSTU2_StructureDefinition      extends DSTU2_DomainResource
{

   static def : string = 'StructureDefinition';
   url : string ;
   identifier : DSTU2_Identifier [];
   version : string ;
   name : string ;
   display : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : DSTU2_StructureDefinition_Contact [];
   date : string ;
   description : string ;
   useContext : DSTU2_CodeableConcept [];
   requirements : string ;
   copyright : string ;
   code : DSTU2_Coding [];
   fhirVersion : string ;
   mapping : DSTU2_StructureDefinition_Mapping [];
   kind : DSTU2_StructureDefinitionKindEnum ;
   constrainedType : string ;
   abstract : boolean ;
   contextType : DSTU2_ExtensionContextEnum ;
   context : string [];
   base : string ;
   snapshot : DSTU2_StructureDefinition_Snapshot ;
   differential : DSTU2_StructureDefinition_Differential ;
}
