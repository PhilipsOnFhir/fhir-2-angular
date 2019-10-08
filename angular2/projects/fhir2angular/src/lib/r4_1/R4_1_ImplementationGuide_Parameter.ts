import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_GuideParameterCodeEnum } from './R4_1_GuideParameterCodeEnum'

export class R4_1_ImplementationGuide_Parameter      extends R4_1_BackboneElement
{

   static def : string = 'ImplementationGuide_Parameter';
   code : R4_1_GuideParameterCodeEnum ;
   value : string ;
}
