import { DSTU2_AuditEvent_Network } from './DSTU2_AuditEvent_Network'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_AuditEvent_Participant      extends DSTU2_BackboneElement
{

   static def : string = 'AuditEvent_Participant';
   role : DSTU2_CodeableConcept [];
   reference : DSTU2_Reference ;
   userId : DSTU2_Identifier ;
   altId : string ;
   name : string ;
   requestor : boolean ;
   location : DSTU2_Reference ;
   policy : string [];
   media : DSTU2_Coding ;
   network : DSTU2_AuditEvent_Network ;
   purposeOfUse : DSTU2_Coding [];
}
