import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_BindingStrengthEnum } from './STU3_BindingStrengthEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_OperationDefinition_Binding      extends STU3_BackboneElement
{

   static def : string = 'OperationDefinition_Binding';
   strength : STU3_BindingStrengthEnum ;
   valueSetUri : string ;
   valueSetReference : STU3_Reference ;
}
