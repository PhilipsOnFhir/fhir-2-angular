import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_GuidePageGenerationEnum } from './R5_GuidePageGenerationEnum'
import { R5_Reference } from './R5_Reference'

export class R5_ImplementationGuide_Page      extends R5_BackboneElement
{

   static def : string = 'ImplementationGuide_Page';
   nameUrl : string ;
   nameReference : R5_Reference ;
   title : string ;
   generation : R5_GuidePageGenerationEnum ;
   page : R5_ImplementationGuide_Page [];
}
