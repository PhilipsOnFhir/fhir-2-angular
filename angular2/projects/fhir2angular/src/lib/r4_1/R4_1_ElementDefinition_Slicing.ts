import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ElementDefinition_Discriminator } from './R4_1_ElementDefinition_Discriminator'
import { R4_1_SlicingRulesEnum } from './R4_1_SlicingRulesEnum'

export class R4_1_ElementDefinition_Slicing      extends R4_1_BackboneElement
{

   static def : string = 'ElementDefinition_Slicing';
   discriminator : R4_1_ElementDefinition_Discriminator [];
   description : string ;
   ordered : boolean ;
   rules : R4_1_SlicingRulesEnum ;
}
