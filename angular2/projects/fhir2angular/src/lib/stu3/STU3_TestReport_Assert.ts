import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestReportActionResultEnum } from './STU3_TestReportActionResultEnum'

export class STU3_TestReport_Assert      extends STU3_BackboneElement
{

   static def : string = 'TestReport_Assert';
   result : STU3_TestReportActionResultEnum ;
   message : string ;
   detail : string ;
}
