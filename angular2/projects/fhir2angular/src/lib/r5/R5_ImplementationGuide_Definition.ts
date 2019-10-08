import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ImplementationGuide_Grouping } from './R5_ImplementationGuide_Grouping'
import { R5_ImplementationGuide_Page } from './R5_ImplementationGuide_Page'
import { R5_ImplementationGuide_Parameter } from './R5_ImplementationGuide_Parameter'
import { R5_ImplementationGuide_Resource } from './R5_ImplementationGuide_Resource'
import { R5_ImplementationGuide_Template } from './R5_ImplementationGuide_Template'

export class R5_ImplementationGuide_Definition      extends R5_BackboneElement
{

   static def : string = 'ImplementationGuide_Definition';
   grouping : R5_ImplementationGuide_Grouping [];
   resource : R5_ImplementationGuide_Resource [];
   page : R5_ImplementationGuide_Page ;
   parameter : R5_ImplementationGuide_Parameter [];
   template : R5_ImplementationGuide_Template [];
}
