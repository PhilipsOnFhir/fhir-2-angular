import { STU3_AuditEvent_Network } from './STU3_AuditEvent_Network'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_AuditEvent_Agent      extends STU3_BackboneElement
{

   static def : string = 'AuditEvent_Agent';
   role : STU3_CodeableConcept [];
   reference : STU3_Reference ;
   userId : STU3_Identifier ;
   altId : string ;
   name : string ;
   requestor : boolean ;
   location : STU3_Reference ;
   policy : string [];
   media : STU3_Coding ;
   network : STU3_AuditEvent_Network ;
   purposeOfUse : STU3_CodeableConcept [];
}
