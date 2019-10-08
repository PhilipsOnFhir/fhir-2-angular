import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_BindingStrengthEnum } from './R4_1_BindingStrengthEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_OperationDefinition_Binding      extends R4_1_BackboneElement
{

   static def : string = 'OperationDefinition_Binding';
   strength : R4_1_BindingStrengthEnum ;
   valueSet : string ;
}
