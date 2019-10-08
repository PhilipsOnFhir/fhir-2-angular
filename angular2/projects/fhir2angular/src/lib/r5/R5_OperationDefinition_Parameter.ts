import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_OperationDefinition_Binding } from './R5_OperationDefinition_Binding'
import { R5_OperationDefinition_ReferencedFrom } from './R5_OperationDefinition_ReferencedFrom'
import { R5_OperationParameterUseEnum } from './R5_OperationParameterUseEnum'
import { R5_SearchParamTypeEnum } from './R5_SearchParamTypeEnum'

export class R5_OperationDefinition_Parameter      extends R5_BackboneElement
{

   static def : string = 'OperationDefinition_Parameter';
   name : string ;
   use : R5_OperationParameterUseEnum ;
   min : string ;
   max : string ;
   documentation : string ;
   type : string ;
   targetProfile : string [];
   searchType : R5_SearchParamTypeEnum ;
   binding : R5_OperationDefinition_Binding ;
   referencedFrom : R5_OperationDefinition_ReferencedFrom [];
   part : R5_OperationDefinition_Parameter [];
}
