import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'

export class DSTU2_AuditEvent_Source      extends DSTU2_BackboneElement
{

   static def : string = 'AuditEvent_Source';
   site : string ;
   identifier : DSTU2_Identifier ;
   type : DSTU2_Coding [];
}
