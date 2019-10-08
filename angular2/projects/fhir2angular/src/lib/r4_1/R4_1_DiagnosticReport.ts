import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DiagnosticReportStatusEnum } from './R4_1_DiagnosticReportStatusEnum'
import { R4_1_DiagnosticReport_Media } from './R4_1_DiagnosticReport_Media'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_DiagnosticReport      extends R4_1_DomainResource
{

   static def : string = 'DiagnosticReport';
   identifier : R4_1_Identifier [];
   basedOn : R4_1_Reference [];
   status : R4_1_DiagnosticReportStatusEnum ;
   category : R4_1_CodeableConcept [];
   code : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : R4_1_Period ;
   issued : string ;
   performer : R4_1_Reference [];
   resultsInterpreter : R4_1_Reference [];
   specimen : R4_1_Reference [];
   result : R4_1_Reference [];
   imagingStudy : R4_1_Reference [];
   media : R4_1_DiagnosticReport_Media [];
   conclusion : string ;
   conclusionCode : R4_1_CodeableConcept [];
   presentedForm : R4_1_Attachment [];
}
