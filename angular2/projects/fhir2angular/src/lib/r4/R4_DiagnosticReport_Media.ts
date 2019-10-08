import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_DiagnosticReport_Media      extends R4_BackboneElement
{

   static def : string = 'DiagnosticReport_Media';
   comment : string ;
   link : R4_Reference ;
}
