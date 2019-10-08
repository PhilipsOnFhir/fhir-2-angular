import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CompartmentTypeEnum } from './STU3_CompartmentTypeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_GraphCompartmentRuleEnum } from './STU3_GraphCompartmentRuleEnum'

export class STU3_GraphDefinition_Compartment      extends STU3_BackboneElement
{

   static def : string = 'GraphDefinition_Compartment';
   code : STU3_CompartmentTypeEnum ;
   rule : STU3_GraphCompartmentRuleEnum ;
   expression : string ;
   description : string ;
}
