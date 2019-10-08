import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ProvenanceEntityRoleEnum } from './R4_ProvenanceEntityRoleEnum'
import { R4_Provenance_Agent } from './R4_Provenance_Agent'
import { R4_Reference } from './R4_Reference'

export class R4_Provenance_Entity      extends R4_BackboneElement
{

   static def : string = 'Provenance_Entity';
   role : R4_ProvenanceEntityRoleEnum ;
   what : R4_Reference ;
   agent : R4_Provenance_Agent [];
}
