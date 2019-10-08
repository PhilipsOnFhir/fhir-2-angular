import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CompartmentTypeEnum } from './R4_CompartmentTypeEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_GraphCompartmentRuleEnum } from './R4_GraphCompartmentRuleEnum'
import { R4_GraphCompartmentUseEnum } from './R4_GraphCompartmentUseEnum'

export class R4_GraphDefinition_Compartment      extends R4_BackboneElement
{

   static def : string = 'GraphDefinition_Compartment';
   use : R4_GraphCompartmentUseEnum ;
   code : R4_CompartmentTypeEnum ;
   rule : R4_GraphCompartmentRuleEnum ;
   expression : string ;
   description : string ;
}
