import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_OperationDefinition_Binding } from './R4_1_OperationDefinition_Binding'
import { R4_1_OperationDefinition_ReferencedFrom } from './R4_1_OperationDefinition_ReferencedFrom'
import { R4_1_OperationParameterUseEnum } from './R4_1_OperationParameterUseEnum'
import { R4_1_SearchParamTypeEnum } from './R4_1_SearchParamTypeEnum'

export class R4_1_OperationDefinition_Parameter      extends R4_1_BackboneElement
{

   static def : string = 'OperationDefinition_Parameter';
   name : string ;
   use : R4_1_OperationParameterUseEnum ;
   min : string ;
   max : string ;
   documentation : string ;
   type : string ;
   targetProfile : string [];
   searchType : R4_1_SearchParamTypeEnum ;
   binding : R4_1_OperationDefinition_Binding ;
   referencedFrom : R4_1_OperationDefinition_ReferencedFrom [];
   part : R4_1_OperationDefinition_Parameter [];
}
