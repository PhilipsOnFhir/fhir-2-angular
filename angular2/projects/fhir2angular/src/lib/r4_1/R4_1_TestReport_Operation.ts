import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TestReportActionResultEnum } from './R4_1_TestReportActionResultEnum'

export class R4_1_TestReport_Operation      extends R4_1_BackboneElement
{

   static def : string = 'TestReport_Operation';
   result : R4_1_TestReportActionResultEnum ;
   message : string ;
   detail : string ;
}
