import { R4_1_AuditEvent_Network } from './R4_1_AuditEvent_Network'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_AuditEvent_Agent      extends R4_1_BackboneElement
{

   static def : string = 'AuditEvent_Agent';
   type : R4_1_CodeableConcept ;
   role : R4_1_CodeableConcept [];
   who : R4_1_Reference ;
   altId : string ;
   name : string ;
   requestor : boolean ;
   location : R4_1_Reference ;
   policy : string [];
   media : R4_1_Coding ;
   network : R4_1_AuditEvent_Network ;
   purposeOfUse : R4_1_CodeableConcept [];
}
