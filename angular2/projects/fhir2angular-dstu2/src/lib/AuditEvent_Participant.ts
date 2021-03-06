import { AuditEvent_Network } from './AuditEvent_Network'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class AuditEvent_Participant      extends BackboneElement
{

   static def : string = 'AuditEvent_Participant';
   role : CodeableConcept [];
   reference : Reference ;
   userId : Identifier ;
   altId : string ;
   name : string ;
   requestor : boolean ;
   location : Reference ;
   policy : string [];
   media : Coding ;
   network : AuditEvent_Network ;
   purposeOfUse : Coding [];
}
