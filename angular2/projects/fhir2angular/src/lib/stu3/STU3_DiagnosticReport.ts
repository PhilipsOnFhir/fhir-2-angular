import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DiagnosticReportStatusEnum } from './STU3_DiagnosticReportStatusEnum'
import { STU3_DiagnosticReport_Image } from './STU3_DiagnosticReport_Image'
import { STU3_DiagnosticReport_Performer } from './STU3_DiagnosticReport_Performer'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_DiagnosticReport      extends STU3_DomainResource
{

   static def : string = 'DiagnosticReport';
   identifier : STU3_Identifier [];
   basedOn : STU3_Reference [];
   status : STU3_DiagnosticReportStatusEnum ;
   category : STU3_CodeableConcept ;
   code : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : STU3_Period ;
   issued : string ;
   performer : STU3_DiagnosticReport_Performer [];
   specimen : STU3_Reference [];
   result : STU3_Reference [];
   imagingStudy : STU3_Reference [];
   image : STU3_DiagnosticReport_Image [];
   conclusion : string ;
   codedDiagnosis : STU3_CodeableConcept [];
   presentedForm : STU3_Attachment [];
}
