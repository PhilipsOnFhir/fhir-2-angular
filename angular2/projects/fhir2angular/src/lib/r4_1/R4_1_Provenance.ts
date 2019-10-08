import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Provenance_Agent } from './R4_1_Provenance_Agent'
import { R4_1_Provenance_Entity } from './R4_1_Provenance_Entity'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Signature } from './R4_1_Signature'

export class R4_1_Provenance      extends R4_1_DomainResource
{

   static def : string = 'Provenance';
   target : R4_1_Reference [];
   occurredPeriod : R4_1_Period ;
   occurredDateTime : string ;
   recorded : string ;
   policy : string [];
   location : R4_1_Reference ;
   reason : R4_1_CodeableConcept [];
   activity : R4_1_CodeableConcept ;
   agent : R4_1_Provenance_Agent [];
   entity : R4_1_Provenance_Entity [];
   signature : R4_1_Signature [];
}
