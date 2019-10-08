import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CompartmentTypeEnum } from './R5_CompartmentTypeEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_GraphCompartmentRuleEnum } from './R5_GraphCompartmentRuleEnum'
import { R5_GraphCompartmentUseEnum } from './R5_GraphCompartmentUseEnum'

export class R5_GraphDefinition_Compartment      extends R5_BackboneElement
{

   static def : string = 'GraphDefinition_Compartment';
   use : R5_GraphCompartmentUseEnum ;
   code : R5_CompartmentTypeEnum ;
   rule : R5_GraphCompartmentRuleEnum ;
   expression : string ;
   description : string ;
}
