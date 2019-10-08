import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_ElementDefinition_Discriminator } from './STU3_ElementDefinition_Discriminator'
import { STU3_SlicingRulesEnum } from './STU3_SlicingRulesEnum'

export class STU3_ElementDefinition_Slicing      extends STU3_Element
{

   static def : string = 'ElementDefinition_Slicing';
   discriminator : STU3_ElementDefinition_Discriminator [];
   description : string ;
   ordered : boolean ;
   rules : STU3_SlicingRulesEnum ;
}
