import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FHIRAllTypesEnum } from './STU3_FHIRAllTypesEnum'
import { STU3_OperationDefinition_Binding } from './STU3_OperationDefinition_Binding'
import { STU3_OperationParameterUseEnum } from './STU3_OperationParameterUseEnum'
import { STU3_Reference } from './STU3_Reference'
import { STU3_SearchParamTypeEnum } from './STU3_SearchParamTypeEnum'

export class STU3_OperationDefinition_Parameter      extends STU3_BackboneElement
{

   static def : string = 'OperationDefinition_Parameter';
   name : string ;
   use : STU3_OperationParameterUseEnum ;
   min : string ;
   max : string ;
   documentation : string ;
   type : STU3_FHIRAllTypesEnum ;
   searchType : STU3_SearchParamTypeEnum ;
   profile : STU3_Reference ;
   binding : STU3_OperationDefinition_Binding ;
   part : STU3_OperationDefinition_Parameter [];
}
