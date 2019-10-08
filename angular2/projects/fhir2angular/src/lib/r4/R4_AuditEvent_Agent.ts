import { R4_AuditEvent_Network } from './R4_AuditEvent_Network'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_AuditEvent_Agent      extends R4_BackboneElement
{

   static def : string = 'AuditEvent_Agent';
   type : R4_CodeableConcept ;
   role : R4_CodeableConcept [];
   who : R4_Reference ;
   altId : string ;
   name : string ;
   requestor : boolean ;
   location : R4_Reference ;
   policy : string [];
   media : R4_Coding ;
   network : R4_AuditEvent_Network ;
   purposeOfUse : R4_CodeableConcept [];
}
