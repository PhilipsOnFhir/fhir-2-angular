import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_BindingStrengthEnum } from './R4_1_BindingStrengthEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ElementDefinition_Binding      extends R4_1_BackboneElement
{

   static def : string = 'ElementDefinition_Binding';
   strength : R4_1_BindingStrengthEnum ;
   description : string ;
   valueSet : string ;
}
