import { R5_Attachment } from './R5_Attachment'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DiagnosticReportStatusEnum } from './R5_DiagnosticReportStatusEnum'
import { R5_DiagnosticReport_Media } from './R5_DiagnosticReport_Media'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_DiagnosticReport      extends R5_DomainResource
{

   static def : string = 'DiagnosticReport';
   identifier : R5_Identifier [];
   basedOn : R5_Reference [];
   status : R5_DiagnosticReportStatusEnum ;
   category : R5_CodeableConcept [];
   code : R5_CodeableConcept ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : R5_Period ;
   issued : string ;
   performer : R5_Reference [];
   resultsInterpreter : R5_Reference [];
   specimen : R5_Reference [];
   result : R5_Reference [];
   imagingStudy : R5_Reference [];
   media : R5_DiagnosticReport_Media [];
   conclusion : string ;
   conclusionCode : R5_CodeableConcept [];
   presentedForm : R5_Attachment [];
}
