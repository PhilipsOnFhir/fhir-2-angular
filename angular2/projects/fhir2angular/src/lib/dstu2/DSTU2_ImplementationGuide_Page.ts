import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_GuidePageKindEnum } from './DSTU2_GuidePageKindEnum'

export class DSTU2_ImplementationGuide_Page      extends DSTU2_BackboneElement
{

   static def : string = 'ImplementationGuide_Page';
   source : string ;
   name : string ;
   kind : DSTU2_GuidePageKindEnum ;
   type : string [];
   package : string [];
   format : string ;
   page : DSTU2_ImplementationGuide_Page [];
}
