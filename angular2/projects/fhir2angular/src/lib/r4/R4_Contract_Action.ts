import { R4_Annotation } from './R4_Annotation'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Contract_Subject } from './R4_Contract_Subject'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_Timing } from './R4_Timing'

export class R4_Contract_Action      extends R4_BackboneElement
{

   static def : string = 'Contract_Action';
   doNotPerform : boolean ;
   type : R4_CodeableConcept ;
   subject : R4_Contract_Subject [];
   intent : R4_CodeableConcept ;
   linkId : string [];
   status : R4_CodeableConcept ;
   context : R4_Reference ;
   contextLinkId : string [];
   occurrenceDateTime : string ;
   occurrencePeriod : R4_Period ;
   occurrenceTiming : R4_Timing ;
   requester : R4_Reference [];
   requesterLinkId : string [];
   performerType : R4_CodeableConcept [];
   performerRole : R4_CodeableConcept ;
   performer : R4_Reference ;
   performerLinkId : string [];
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   reason : string [];
   reasonLinkId : string [];
   note : R4_Annotation [];
   securityLabelNumber : string [];
}
