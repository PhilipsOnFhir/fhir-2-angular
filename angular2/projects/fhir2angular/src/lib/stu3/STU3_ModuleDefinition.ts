import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ModuleDefinition_CodeSystem } from './STU3_ModuleDefinition_CodeSystem'
import { STU3_ModuleDefinition_Data } from './STU3_ModuleDefinition_Data'
import { STU3_ModuleDefinition_Library } from './STU3_ModuleDefinition_Library'
import { STU3_ModuleDefinition_Model } from './STU3_ModuleDefinition_Model'
import { STU3_ModuleDefinition_Parameter } from './STU3_ModuleDefinition_Parameter'
import { STU3_ModuleDefinition_ValueSet } from './STU3_ModuleDefinition_ValueSet'

export class STU3_ModuleDefinition      extends STU3_DomainResource
{

   static def : string = 'ModuleDefinition';
   identifier : STU3_Identifier [];
   version : string ;
   model : STU3_ModuleDefinition_Model [];
   library : STU3_ModuleDefinition_Library [];
   codeSystem : STU3_ModuleDefinition_CodeSystem [];
   valueSet : STU3_ModuleDefinition_ValueSet [];
   parameter : STU3_ModuleDefinition_Parameter [];
   data : STU3_ModuleDefinition_Data [];
}
