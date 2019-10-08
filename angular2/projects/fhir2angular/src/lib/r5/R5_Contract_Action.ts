import { R5_Annotation } from './R5_Annotation'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Contract_Subject } from './R5_Contract_Subject'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_Timing } from './R5_Timing'

export class R5_Contract_Action      extends R5_BackboneElement
{

   static def : string = 'Contract_Action';
   doNotPerform : boolean ;
   type : R5_CodeableConcept ;
   subject : R5_Contract_Subject [];
   intent : R5_CodeableConcept ;
   linkId : string [];
   status : R5_CodeableConcept ;
   context : R5_Reference ;
   contextLinkId : string [];
   occurrenceDateTime : string ;
   occurrencePeriod : R5_Period ;
   occurrenceTiming : R5_Timing ;
   requester : R5_Reference [];
   requesterLinkId : string [];
   performerType : R5_CodeableConcept [];
   performerRole : R5_CodeableConcept ;
   performer : R5_Reference ;
   performerLinkId : string [];
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   reason : string [];
   reasonLinkId : string [];
   note : R5_Annotation [];
   securityLabelNumber : string [];
}
