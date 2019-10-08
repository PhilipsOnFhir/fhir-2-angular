import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_OperationDefinition_Binding } from './DSTU2_OperationDefinition_Binding'
import { DSTU2_OperationParameterUseEnum } from './DSTU2_OperationParameterUseEnum'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_OperationDefinition_Parameter      extends DSTU2_BackboneElement
{

   static def : string = 'OperationDefinition_Parameter';
   name : string ;
   use : DSTU2_OperationParameterUseEnum ;
   min : string ;
   max : string ;
   documentation : string ;
   type : string ;
   profile : DSTU2_Reference ;
   binding : DSTU2_OperationDefinition_Binding ;
   part : DSTU2_OperationDefinition_Parameter [];
}
