import { R5_AuditEvent_Network } from './R5_AuditEvent_Network'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_AuditEvent_Agent      extends R5_BackboneElement
{

   static def : string = 'AuditEvent_Agent';
   type : R5_CodeableConcept ;
   role : R5_CodeableConcept [];
   who : R5_Reference ;
   altId : string ;
   name : string ;
   requestor : boolean ;
   location : R5_Reference ;
   policy : string [];
   media : R5_Coding ;
   network : R5_AuditEvent_Network ;
   purposeOfUse : R5_CodeableConcept [];
}
