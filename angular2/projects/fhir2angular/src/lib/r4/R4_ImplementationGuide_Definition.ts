import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ImplementationGuide_Grouping } from './R4_ImplementationGuide_Grouping'
import { R4_ImplementationGuide_Page } from './R4_ImplementationGuide_Page'
import { R4_ImplementationGuide_Parameter } from './R4_ImplementationGuide_Parameter'
import { R4_ImplementationGuide_Resource } from './R4_ImplementationGuide_Resource'
import { R4_ImplementationGuide_Template } from './R4_ImplementationGuide_Template'

export class R4_ImplementationGuide_Definition      extends R4_BackboneElement
{

   static def : string = 'ImplementationGuide_Definition';
   grouping : R4_ImplementationGuide_Grouping [];
   resource : R4_ImplementationGuide_Resource [];
   page : R4_ImplementationGuide_Page ;
   parameter : R4_ImplementationGuide_Parameter [];
   template : R4_ImplementationGuide_Template [];
}
