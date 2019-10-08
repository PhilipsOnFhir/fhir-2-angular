import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_BindingStrengthEnum } from './R5_BindingStrengthEnum'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ElementDefinition_Binding      extends R5_BackboneElement
{

   static def : string = 'ElementDefinition_Binding';
   strength : R5_BindingStrengthEnum ;
   description : string ;
   valueSet : string ;
}
