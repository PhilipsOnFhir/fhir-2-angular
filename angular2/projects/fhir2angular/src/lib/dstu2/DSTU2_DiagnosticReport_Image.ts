import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DiagnosticReport_Image      extends DSTU2_BackboneElement
{

   static def : string = 'DiagnosticReport_Image';
   comment : string ;
   link : DSTU2_Reference ;
}
