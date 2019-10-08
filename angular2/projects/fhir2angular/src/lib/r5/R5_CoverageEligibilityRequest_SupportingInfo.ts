import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_CoverageEligibilityRequest_SupportingInfo      extends R5_BackboneElement
{

   static def : string = 'CoverageEligibilityRequest_SupportingInfo';
   sequence : string ;
   information : R5_Reference ;
   appliesToAll : boolean ;
}
