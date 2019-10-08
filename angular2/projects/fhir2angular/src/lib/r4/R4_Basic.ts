import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_Basic      extends R4_DomainResource
{

   static def : string = 'Basic';
   identifier : R4_Identifier [];
   code : R4_CodeableConcept ;
   subject : R4_Reference ;
   created : string ;
   author : R4_Reference ;
}
