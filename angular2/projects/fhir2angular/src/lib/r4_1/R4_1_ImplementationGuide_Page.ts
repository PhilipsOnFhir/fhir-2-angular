import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_GuidePageGenerationEnum } from './R4_1_GuidePageGenerationEnum'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ImplementationGuide_Page      extends R4_1_BackboneElement
{

   static def : string = 'ImplementationGuide_Page';
   nameUrl : string ;
   nameReference : R4_1_Reference ;
   title : string ;
   generation : R4_1_GuidePageGenerationEnum ;
   page : R4_1_ImplementationGuide_Page [];
}
