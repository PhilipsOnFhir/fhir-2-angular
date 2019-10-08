import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_GuideParameterCodeEnum } from './R4_GuideParameterCodeEnum'

export class R4_ImplementationGuide_Parameter      extends R4_BackboneElement
{

   static def : string = 'ImplementationGuide_Parameter';
   code : R4_GuideParameterCodeEnum ;
   value : string ;
}
