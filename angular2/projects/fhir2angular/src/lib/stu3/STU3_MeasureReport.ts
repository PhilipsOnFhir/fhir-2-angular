import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_MeasureReportStatusEnum } from './STU3_MeasureReportStatusEnum'
import { STU3_MeasureReportTypeEnum } from './STU3_MeasureReportTypeEnum'
import { STU3_MeasureReport_Group } from './STU3_MeasureReport_Group'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MeasureReport      extends STU3_DomainResource
{

   static def : string = 'MeasureReport';
   identifier : STU3_Identifier ;
   status : STU3_MeasureReportStatusEnum ;
   type : STU3_MeasureReportTypeEnum ;
   measure : STU3_Reference ;
   patient : STU3_Reference ;
   date : string ;
   reportingOrganization : STU3_Reference ;
   period : STU3_Period ;
   group : STU3_MeasureReport_Group [];
   evaluatedResources : STU3_Reference ;
}
