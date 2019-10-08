import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestReportActionResultEnum } from './R4_TestReportActionResultEnum'

export class R4_TestReport_Operation      extends R4_BackboneElement
{

   static def : string = 'TestReport_Operation';
   result : R4_TestReportActionResultEnum ;
   message : string ;
   detail : string ;
}
