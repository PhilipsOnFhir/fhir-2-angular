import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_BindingStrengthEnum } from './R4_BindingStrengthEnum'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ElementDefinition_Binding      extends R4_BackboneElement
{

   static def : string = 'ElementDefinition_Binding';
   strength : R4_BindingStrengthEnum ;
   description : string ;
   valueSet : string ;
}
