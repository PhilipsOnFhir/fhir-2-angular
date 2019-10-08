import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DiagnosticReportStatusEnum } from './DSTU2_DiagnosticReportStatusEnum'
import { DSTU2_DiagnosticReport_Image } from './DSTU2_DiagnosticReport_Image'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DiagnosticReport      extends DSTU2_DomainResource
{

   static def : string = 'DiagnosticReport';
   identifier : DSTU2_Identifier [];
   status : DSTU2_DiagnosticReportStatusEnum ;
   category : DSTU2_CodeableConcept ;
   code : DSTU2_CodeableConcept ;
   subject : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : DSTU2_Period ;
   issued : string ;
   performer : DSTU2_Reference ;
   request : DSTU2_Reference [];
   specimen : DSTU2_Reference [];
   result : DSTU2_Reference [];
   imagingStudy : DSTU2_Reference [];
   image : DSTU2_DiagnosticReport_Image [];
   conclusion : string ;
   codedDiagnosis : DSTU2_CodeableConcept [];
   presentedForm : DSTU2_Attachment [];
}
