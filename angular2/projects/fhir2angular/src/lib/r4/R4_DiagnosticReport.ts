import { R4_Attachment } from './R4_Attachment'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DiagnosticReportStatusEnum } from './R4_DiagnosticReportStatusEnum'
import { R4_DiagnosticReport_Media } from './R4_DiagnosticReport_Media'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_DiagnosticReport      extends R4_DomainResource
{

   static def : string = 'DiagnosticReport';
   identifier : R4_Identifier [];
   basedOn : R4_Reference [];
   status : R4_DiagnosticReportStatusEnum ;
   category : R4_CodeableConcept [];
   code : R4_CodeableConcept ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : R4_Period ;
   issued : string ;
   performer : R4_Reference [];
   resultsInterpreter : R4_Reference [];
   specimen : R4_Reference [];
   result : R4_Reference [];
   imagingStudy : R4_Reference [];
   media : R4_DiagnosticReport_Media [];
   conclusion : string ;
   conclusionCode : R4_CodeableConcept [];
   presentedForm : R4_Attachment [];
}
