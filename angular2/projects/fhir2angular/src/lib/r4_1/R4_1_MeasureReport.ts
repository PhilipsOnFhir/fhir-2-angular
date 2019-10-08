import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MeasureReportStatusEnum } from './R4_1_MeasureReportStatusEnum'
import { R4_1_MeasureReportTypeEnum } from './R4_1_MeasureReportTypeEnum'
import { R4_1_MeasureReport_Group } from './R4_1_MeasureReport_Group'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MeasureReport      extends R4_1_DomainResource
{

   static def : string = 'MeasureReport';
   identifier : R4_1_Identifier [];
   status : R4_1_MeasureReportStatusEnum ;
   type : R4_1_MeasureReportTypeEnum ;
   measure : string ;
   subject : R4_1_Reference ;
   date : string ;
   reporter : R4_1_Reference ;
   period : R4_1_Period ;
   improvementNotation : R4_1_CodeableConcept ;
   group : R4_1_MeasureReport_Group [];
   evaluatedResource : R4_1_Reference [];
}
