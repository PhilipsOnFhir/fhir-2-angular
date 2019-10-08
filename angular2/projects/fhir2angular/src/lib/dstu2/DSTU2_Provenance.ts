import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Provenance_Agent } from './DSTU2_Provenance_Agent'
import { DSTU2_Provenance_Entity } from './DSTU2_Provenance_Entity'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_Signature } from './DSTU2_Signature'

export class DSTU2_Provenance      extends DSTU2_DomainResource
{

   static def : string = 'Provenance';
   target : DSTU2_Reference [];
   period : DSTU2_Period ;
   recorded : string ;
   reason : DSTU2_CodeableConcept [];
   activity : DSTU2_CodeableConcept ;
   location : DSTU2_Reference ;
   policy : string [];
   agent : DSTU2_Provenance_Agent [];
   entity : DSTU2_Provenance_Entity [];
   signature : DSTU2_Signature [];
}
