import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_GuideParameterCodeEnum } from './R5_GuideParameterCodeEnum'

export class R5_ImplementationGuide_Parameter      extends R5_BackboneElement
{

   static def : string = 'ImplementationGuide_Parameter';
   code : R5_GuideParameterCodeEnum ;
   value : string ;
}
