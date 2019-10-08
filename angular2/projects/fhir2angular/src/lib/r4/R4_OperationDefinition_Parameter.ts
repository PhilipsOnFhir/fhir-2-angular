import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_OperationDefinition_Binding } from './R4_OperationDefinition_Binding'
import { R4_OperationDefinition_ReferencedFrom } from './R4_OperationDefinition_ReferencedFrom'
import { R4_OperationParameterUseEnum } from './R4_OperationParameterUseEnum'
import { R4_SearchParamTypeEnum } from './R4_SearchParamTypeEnum'

export class R4_OperationDefinition_Parameter      extends R4_BackboneElement
{

   static def : string = 'OperationDefinition_Parameter';
   name : string ;
   use : R4_OperationParameterUseEnum ;
   min : string ;
   max : string ;
   documentation : string ;
   type : string ;
   targetProfile : string [];
   searchType : R4_SearchParamTypeEnum ;
   binding : R4_OperationDefinition_Binding ;
   referencedFrom : R4_OperationDefinition_ReferencedFrom [];
   part : R4_OperationDefinition_Parameter [];
}
