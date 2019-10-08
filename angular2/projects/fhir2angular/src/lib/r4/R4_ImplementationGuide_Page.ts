import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_GuidePageGenerationEnum } from './R4_GuidePageGenerationEnum'
import { R4_Reference } from './R4_Reference'

export class R4_ImplementationGuide_Page      extends R4_BackboneElement
{

   static def : string = 'ImplementationGuide_Page';
   nameUrl : string ;
   nameReference : R4_Reference ;
   title : string ;
   generation : R4_GuidePageGenerationEnum ;
   page : R4_ImplementationGuide_Page [];
}
