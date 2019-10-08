import { DSTU2_BindingStrengthEnum } from './DSTU2_BindingStrengthEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ElementDefinition_Binding      extends DSTU2_Element
{

   static def : string = 'ElementDefinition_Binding';
   strength : DSTU2_BindingStrengthEnum ;
   description : string ;
   valueSetUri : string ;
   valueSetReference : DSTU2_Reference ;
}
