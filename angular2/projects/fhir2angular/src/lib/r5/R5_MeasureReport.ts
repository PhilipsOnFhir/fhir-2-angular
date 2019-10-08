import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_MeasureReportStatusEnum } from './R5_MeasureReportStatusEnum'
import { R5_MeasureReportTypeEnum } from './R5_MeasureReportTypeEnum'
import { R5_MeasureReport_Group } from './R5_MeasureReport_Group'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_MeasureReport      extends R5_DomainResource
{

   static def : string = 'MeasureReport';
   identifier : R5_Identifier [];
   status : R5_MeasureReportStatusEnum ;
   type : R5_MeasureReportTypeEnum ;
   measure : string ;
   subject : R5_Reference ;
   date : string ;
   reporter : R5_Reference ;
   period : R5_Period ;
   improvementNotation : R5_CodeableConcept ;
   group : R5_MeasureReport_Group [];
   evaluatedResource : R5_Reference [];
}
