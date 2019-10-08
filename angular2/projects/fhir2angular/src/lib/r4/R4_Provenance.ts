import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Provenance_Agent } from './R4_Provenance_Agent'
import { R4_Provenance_Entity } from './R4_Provenance_Entity'
import { R4_Reference } from './R4_Reference'
import { R4_Signature } from './R4_Signature'

export class R4_Provenance      extends R4_DomainResource
{

   static def : string = 'Provenance';
   target : R4_Reference [];
   occurredPeriod : R4_Period ;
   occurredDateTime : string ;
   recorded : string ;
   policy : string [];
   location : R4_Reference ;
   reason : R4_CodeableConcept [];
   activity : R4_CodeableConcept ;
   agent : R4_Provenance_Agent [];
   entity : R4_Provenance_Entity [];
   signature : R4_Signature [];
}
