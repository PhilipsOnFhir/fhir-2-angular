import { STU3_BindingStrengthEnum } from './STU3_BindingStrengthEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ElementDefinition_Binding      extends STU3_Element
{

   static def : string = 'ElementDefinition_Binding';
   strength : STU3_BindingStrengthEnum ;
   description : string ;
   valueSetUri : string ;
   valueSetReference : STU3_Reference ;
}
