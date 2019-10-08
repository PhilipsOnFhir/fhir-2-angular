import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DiagnosticRequest_Requester } from './STU3_DiagnosticRequest_Requester'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'
import { STU3_Timing } from './STU3_Timing'

export class STU3_DiagnosticRequest      extends STU3_DomainResource
{

   static def : string = 'DiagnosticRequest';
   identifier : STU3_Identifier [];
   definition : STU3_Reference [];
   basedOn : STU3_Reference [];
   replaces : STU3_Reference [];
   requisition : STU3_Identifier ;
   status : string ;
   intent : string ;
   priority : string ;
   code : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : STU3_Period ;
   occurrenceTiming : STU3_Timing ;
   authoredOn : string ;
   requester : STU3_DiagnosticRequest_Requester ;
   performerType : STU3_CodeableConcept ;
   performer : STU3_Reference ;
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   supportingInfo : STU3_Reference [];
   specimen : STU3_Reference [];
   bodySIte : STU3_CodeableConcept ;
   note : STU3_Annotation [];
   relevantHistory : STU3_Reference [];
}
