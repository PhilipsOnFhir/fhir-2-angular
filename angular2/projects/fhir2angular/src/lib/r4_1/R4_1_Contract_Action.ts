import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Contract_Subject } from './R4_1_Contract_Subject'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_Contract_Action      extends R4_1_BackboneElement
{

   static def : string = 'Contract_Action';
   doNotPerform : boolean ;
   type : R4_1_CodeableConcept ;
   subject : R4_1_Contract_Subject [];
   intent : R4_1_CodeableConcept ;
   linkId : string [];
   status : R4_1_CodeableConcept ;
   context : R4_1_Reference ;
   contextLinkId : string [];
   occurrenceDateTime : string ;
   occurrencePeriod : R4_1_Period ;
   occurrenceTiming : R4_1_Timing ;
   requester : R4_1_Reference [];
   requesterLinkId : string [];
   performerType : R4_1_CodeableConcept [];
   performerRole : R4_1_CodeableConcept ;
   performer : R4_1_Reference ;
   performerLinkId : string [];
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   reason : string [];
   reasonLinkId : string [];
   note : R4_1_Annotation [];
   securityLabelNumber : string [];
}
