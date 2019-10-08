import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class AdverseEvent_SupportingInfo      extends BackboneElement
{

   static def : string = 'AdverseEvent_SupportingInfo';
   item : Reference ;
   contributingFactor : boolean ;
}
