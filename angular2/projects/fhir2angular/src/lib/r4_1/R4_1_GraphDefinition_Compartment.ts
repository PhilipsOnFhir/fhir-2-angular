import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CompartmentTypeEnum } from './R4_1_CompartmentTypeEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_GraphCompartmentRuleEnum } from './R4_1_GraphCompartmentRuleEnum'
import { R4_1_GraphCompartmentUseEnum } from './R4_1_GraphCompartmentUseEnum'

export class R4_1_GraphDefinition_Compartment      extends R4_1_BackboneElement
{

   static def : string = 'GraphDefinition_Compartment';
   use : R4_1_GraphCompartmentUseEnum ;
   code : R4_1_CompartmentTypeEnum ;
   rule : R4_1_GraphCompartmentRuleEnum ;
   expression : string ;
   description : string ;
}
