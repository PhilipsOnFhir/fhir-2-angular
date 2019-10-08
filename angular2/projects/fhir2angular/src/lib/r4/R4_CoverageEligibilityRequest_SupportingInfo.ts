import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_CoverageEligibilityRequest_SupportingInfo      extends R4_BackboneElement
{

   static def : string = 'CoverageEligibilityRequest_SupportingInfo';
   sequence : string ;
   information : R4_Reference ;
   appliesToAll : boolean ;
}
