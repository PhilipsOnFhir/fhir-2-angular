import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Provenance_Agent } from './R5_Provenance_Agent'
import { R5_Provenance_Entity } from './R5_Provenance_Entity'
import { R5_Reference } from './R5_Reference'
import { R5_Signature } from './R5_Signature'

export class R5_Provenance      extends R5_DomainResource
{

   static def : string = 'Provenance';
   target : R5_Reference [];
   occurredPeriod : R5_Period ;
   occurredDateTime : string ;
   recorded : string ;
   policy : string [];
   location : R5_Reference ;
   reason : R5_CodeableConcept [];
   activity : R5_CodeableConcept ;
   agent : R5_Provenance_Agent [];
   entity : R5_Provenance_Entity [];
   signature : R5_Signature [];
}
