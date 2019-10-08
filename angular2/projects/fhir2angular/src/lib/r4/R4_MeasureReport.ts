import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MeasureReportStatusEnum } from './R4_MeasureReportStatusEnum'
import { R4_MeasureReportTypeEnum } from './R4_MeasureReportTypeEnum'
import { R4_MeasureReport_Group } from './R4_MeasureReport_Group'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_MeasureReport      extends R4_DomainResource
{

   static def : string = 'MeasureReport';
   identifier : R4_Identifier [];
   status : R4_MeasureReportStatusEnum ;
   type : R4_MeasureReportTypeEnum ;
   measure : string ;
   subject : R4_Reference ;
   date : string ;
   reporter : R4_Reference ;
   period : R4_Period ;
   improvementNotation : R4_CodeableConcept ;
   group : R4_MeasureReport_Group [];
   evaluatedResource : R4_Reference [];
}
