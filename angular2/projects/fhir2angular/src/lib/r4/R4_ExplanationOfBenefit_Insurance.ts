import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_ExplanationOfBenefit_Insurance      extends R4_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Insurance';
   focal : boolean ;
   coverage : R4_Reference ;
   preAuthRef : string [];
}
