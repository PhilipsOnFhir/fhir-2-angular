import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ProvenanceEntityRoleEnum } from './STU3_ProvenanceEntityRoleEnum'
import { STU3_Provenance_Agent } from './STU3_Provenance_Agent'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Provenance_Entity      extends STU3_BackboneElement
{

   static def : string = 'Provenance_Entity';
   role : STU3_ProvenanceEntityRoleEnum ;
   whatUri : string ;
   whatReference : STU3_Reference ;
   whatIdentifier : STU3_Identifier ;
   agent : STU3_Provenance_Agent [];
}
