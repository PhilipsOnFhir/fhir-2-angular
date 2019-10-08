import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestReportActionResultEnum } from './R5_TestReportActionResultEnum'

export class R5_TestReport_Operation      extends R5_BackboneElement
{

   static def : string = 'TestReport_Operation';
   result : R5_TestReportActionResultEnum ;
   message : string ;
   detail : string ;
}
